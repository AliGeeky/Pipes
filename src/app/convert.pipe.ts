import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true
})
export class ConvertPipe implements PipeTransform {

  transform(mile: number, targetUnits: string): any {
    if(!mile){
       return;
    }
    switch(targetUnits){
      case 'km':
        return mile * 1.6;
      case 'm' :
        return mile * 1.6 * 1000;
      case 'cm':
        return mile * 1.6 * 1000 * 1000;
      default :
        throw new Error ("Not Suportet Unit : "+ targetUnits)    
    } 
  }
}
