export enum Color {
  red, black, blue, green, yellow, white
}

export interface Hero {
  name:   string;
  canFly: boolean;
  color:  Color;
}
