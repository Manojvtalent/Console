import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gernder'
})
export class GernderPipe implements PipeTransform {

  transform(value: any,genderVal:any): string {
    if(genderVal.toLowerCase()=="male"){
        return "Mr. "+value;
    }else{
      return "Miss. "+value;
    }
  }

}
