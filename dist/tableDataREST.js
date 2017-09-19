"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const typescript_rest_1 = require("typescript-rest");
let HelloService = class HelloService {
    sayHello(name) {
        return "Hello " + name;
    }
};
__decorate([
    typescript_rest_1.Path(":name"),
    typescript_rest_1.GET,
    __param(0, typescript_rest_1.PathParam('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], HelloService.prototype, "sayHello", null);
HelloService = __decorate([
    typescript_rest_1.Path("/hello")
], HelloService);
let TableDataService = class TableDataService {
    getTableData(name) {
        return "[" +
            "{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'}," +
            "{position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'}," +
            "{position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}," +
            "{position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'}," +
            "{position: 5, name: 'Boron', weight: 10.811, symbol: 'B'}," +
            "{position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'}," +
            "{position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'}," +
            "{position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'}," +
            "{position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'}," +
            "{position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}," +
            "{position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'}," +
            "{position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'}," +
            "{position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'}," +
            "{position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'}," +
            "{position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'}," +
            "{position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'}," +
            "{position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'}," +
            "{position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'}," +
            "{position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'}," +
            "{position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'}" +
            "]";
    }
};
__decorate([
    typescript_rest_1.Path(":name"),
    typescript_rest_1.GET,
    __param(0, typescript_rest_1.PathParam('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], TableDataService.prototype, "getTableData", null);
TableDataService = __decorate([
    typescript_rest_1.Path("/tableData")
], TableDataService);
let app = express();
typescript_rest_1.Server.buildServices(app);
app.listen(3000, function () {
    console.log('Rest Server listening on port 3000!');
});
