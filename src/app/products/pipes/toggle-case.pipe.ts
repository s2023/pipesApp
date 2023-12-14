import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform( value: string, toUpper: boolean = false ): string {
  //v1 transform( value: string ): string {
  //xdef transform(value: any, ...args: any[]) {

    return ( toUpper )
      ? value.toUpperCase()
      : value.toLowerCase();
    //v1 return value.toUpperCase();
  }

}
