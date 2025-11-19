import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name:'filterByName'})
export class FilterByNamePipe implements PipeTransform {
  transform(list:any[], q:string) {
    if(!q) return list;
    return list.filter(i=>i.name.toLowerCase().includes(q.toLowerCase()));
  }
}
