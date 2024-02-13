import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  // seach filter used to seach for types
  transform(items: any[], searchTerm: string){
    let filteredList = [];

    if (searchTerm) {
      for (let i=0; i<items.length; i++){
        if (items[i].Type.toUpperCase().includes(searchTerm.toUpperCase())) {
          filteredList.push(items[i])
        }
      }
      return filteredList
    } else {
      return items;
    }
  }

}
