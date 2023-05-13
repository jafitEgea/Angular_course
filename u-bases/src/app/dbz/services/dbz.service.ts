import { Injectable } from '@angular/core';

import {v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }
    
    public characters: Character[] = [{
        id: uuid(),
        name: 'trunks',
        power: 5000
    },{
        id: uuid(),
        name: 'Picoolo',
        power: 7000
    },{
        id: uuid(),
        name: 'gohan',
        power: 2000
    }];

    public addCharacter(character: Character): void {
        const newCharacter: Character = {
            id: uuid(),
            ...character
        };

        this.characters.push(newCharacter);
    }

    // public onDeleteCharacter(index: number): void {
    //     this.characters.splice(index, 1);
    // }

    public delecteCharacterById(id: string): void {
        this.characters = this.characters.filter(character => character.id != id);
    }
}