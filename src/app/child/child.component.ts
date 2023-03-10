import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 
  @Input() email!:string;

  @Input()
  get name():string{
    return this._name;
  }
  set name(name: string) {
    this._name = name.charAt(0).toUpperCase()+name.slice(1);
  }
  private _name = '';
  @Input()
  get dob():string{
    return this._dob;
  }
  set dob(dob: string) {
    const db= new Date(dob).getTime();
    const currtdate= new Date().getTime();
    this._dob = Math.floor((currtdate-db)/(1000*60*60*24*365));
  }
  private _dob:any = '';
 @Output() onClick= new EventEmitter<any>();

}
