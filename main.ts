import {Menu} from "./Controller/Menu";
import * as rsLib from "readline-sync";

let menu = new Menu();

menu.showMenu();
let number = Number(rsLib.question('Nhap menu: '));

while (number > 0 && number < 16) {
    menu.solve(number);
    number = Number(rsLib.question('Nhap menu: '))
    menu.showMenu();
}
