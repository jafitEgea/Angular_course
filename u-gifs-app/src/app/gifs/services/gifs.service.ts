import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {
    
    public gifsList: Gif[] = [];

    private _tagsHistory: string[] = [];
    private apiKey: string = 'mmZ0Hd5TypOLQfmgIib0z24T6NsB8L1I';
    private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
    
    constructor(private http: HttpClient) { 
        this.loadLocalStorage();
        console.log('gifs service ready');
    }

    get tagsHistory() {
        return [...this._tagsHistory];
    }

    organizeTag(tag: string): void {
        tag = tag.toLowerCase();

        if(this._tagsHistory.includes(tag)){
            this._tagsHistory = this._tagsHistory.filter((currentTag) => currentTag !== tag);
        }

        this._tagsHistory.unshift(tag);
        this._tagsHistory = this._tagsHistory.splice(0 , 10);
        this.saveLocalStorage();
    }

    // PERSISTENCIA - LOCALSTORAGE

    private saveLocalStorage(): void {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory));
    }

    private loadLocalStorage(): void {
        if( !localStorage.getItem('history')) return;
        this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

        if(this._tagsHistory.length === 0) return;
        this.searchTag(this._tagsHistory[0]);
    }

    /////////////////////////

    searchTag(tag: string): void {
        if(tag.length === 0) return;
        this.organizeTag(tag);

        // fetch(`https://api.giphy.com/v1/gifs/search?api_key=mmZ0Hd5TypOLQfmgIib0z24T6NsB8L1I&q=fortnite&limit=10`)
        // .then(response => response.json())
        // .then(data => console.log(data));

        const params = new HttpParams()
        .set('api_key' , this.apiKey)
        .set('q' , tag)
        .set('limit' , '10')

        this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{ params:params })
        .subscribe(response => {

            this.gifsList = response.data;
            // console.log({gifs: this.gifsList});

            })


    }

}