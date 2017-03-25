import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menu'
})
export class MenuPipe implements PipeTransform {


  transform(value, args:string[]) : any {
     //return value.filter( item => value[item] != value[item]);
  
    let keys = [];
    for (let key in value) {
     if(key == 'items'){
         for (let a in value[key]) {
            keys.push({menuitem: value[key][a]});
            // keys.push({menuName: value[key][a].id, menuName: value[key][a].title});
            // console.log(value[key][a].id);
         }
     
        //keys.push({key: key, value: value[key]});
      }
    }
    console.log(keys);
    return keys;
  
  }

}

