import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-compontent-interacton';
 
  public name!:string;
  public email!:string;
  public dob!:string;
  public updateData(item:any){
   
    console.log(item);
    
  }
}
