"use strict";
exports.__esModule = true;
var Menu_1 = require("./Controller/Menu");
var rsLib = require("readline-sync");
var menu = new Menu_1.Menu();
menu.showMenu();
var number = Number(rsLib.question('Nhap menu: '));
while (number > 0 && number < 16) {
    menu.solve(number);
    number = Number(rsLib.question('Nhap menu: '));
    menu.showMenu();
}
