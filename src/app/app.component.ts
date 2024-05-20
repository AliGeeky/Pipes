import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ConvertPipe ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pipes';
  nameInpt : string='';
  dateInput : string= '';
  amountInput :string='';
  heightInput :number= 0 ;
  mileInput :number = 0 ;
  onNameChange(value:string){
    this.nameInpt=value;
  }
  onDateChange(value :string){
    this.dateInput = value;
  }
  onAmountChange(value:string){
    this.amountInput = value;
  }
  onHeightChange(value:number){
    this.heightInput=value;
  }
  onMileChange(value:number){
    this.mileInput=value;
  }
}
