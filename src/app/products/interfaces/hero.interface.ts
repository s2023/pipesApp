export enum Color {
  red = "red",
  black = "black",
  blue = "blue",
  green = "green",
  yellow = "yellow",
  white = "white"
}

export interface Hero {
  name:   string;
  canFly: boolean;
  color:  Color;
}
