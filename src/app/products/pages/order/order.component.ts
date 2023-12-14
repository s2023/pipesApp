import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;
  //v1 public orderBy: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Wonder Woman',
      canFly: true,
      color: Color.yellow,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green,
    },
  ]

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero ){
    this.orderBy = value;
  }

}
