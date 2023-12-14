import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'sebastian';
  public nameUpper: string = 'RIVAS';
  public fullName: string = 'fErNAndo hErReRa';
  public customDate: Date = new Date();

}
