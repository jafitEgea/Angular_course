import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit{
  
  public debouncer = new Subject<string>();
  
  @Input()
  public placeholder: string = '';
  
  @Output()
  public onValue = new EventEmitter<string>();
  
  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(400)
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
      })
  }

  emitValue( value: string ): void {
    this.onValue.emit(value);
  }

  onKeyPress (term: string): void {
    this.debouncer.next(term);
  }
}
