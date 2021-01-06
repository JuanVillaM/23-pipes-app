import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

  transform(value: string , arg: boolean = true ): string {
    
    value = value.toLowerCase();
    let names = value.split(' ');

    if( arg ) {
      names = names.map( name => {
        return name[0].toUpperCase() + name.substr(1);
      });
    } else {
      names[0] = names[0][0].toUpperCase() + names[0].substr(1)
    }

    return names.join(' ');
  }

}
