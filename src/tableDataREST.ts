import * as express from "express";
import {Server, Path, GET, PathParam} from "typescript-rest";

// Load config
require('dotenv').config();

/*if (!process.env.PROJECT_ID || !process.env.CLIENT_EMAIL || !process.env.PRIVATE_KEY || !process.env.FIREBASE_DB) {
    console.error('Missing environment variables!');
    process.exit(1);
}*/

var fs = require('fs');
var parse = require('csv-parse/lib/sync');
var path = require('path');
var cors = require('cors');
var firebase = require('firebase-admin');
var elements = [];

/*
// Initialize Firebase
firebase.initializeApp({
    credential: firebase.credential.cert({
        projectId: app.get('projectId'),
        clientEmail: app.get('clientEmail'),
        privateKey: app.get('privateKey').replace(/\\n/g, '\n')
    }),
    databaseURL: app.get('firebaseDB')
});

var db = firebase.database();
var ref = db.ref('stocks');
// end initialize firebase db
*/

export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

@Path("/hello")
class HelloService {
    @Path(":name")
    @GET
    sayHello( @PathParam('name') name: string): string {
        return "Hello " + name;
    }
}
@Path("/tableData")
class TableDataService {
    @Path(":name")
    @GET
    getTableData( @PathParam('name') name: string): string {
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
            "{position: 20, name: 'Calcium', weight: 40.078, symbol: 'CaAssHole'}" +
        "]";
    }
}

@Path("/elementData")
    class ElementDataService {
    @Path(":symbols")
    @GET
    getElementsData( @PathParam('symbols') symbols: string): Array<Element> {
        if (symbols ) {
            var delimitedSymbols = symbols.split(',');
            delimitedSymbols.map(function(symbol) {
                return symbol.toUpperCase();
            });
        }
        elements = loadSymbols();
        return elements;
    }
}

let app: express.Application = express();
Server.buildServices(app);

app.use(cors());
app.set('port', (3000));
app.set('projectId', (''));
app.set('clientEmail', (''));
app.set('privateKey', (''));
app.set('firebaseDB', (''));

function getRandomInt(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function loadSymbols() {
    let csv = fs.readFileSync('./companies.csv', 'utf8');

    elements = parse(csv, {columns: true}).map(element => {
        let current = getRandomInt(5100, 80000) / 100;
        let change = getRandomInt(-1000, 1000) / 100;
        return {
            name: element.Name,
            position: element.Position,
            weight: element.Weight,
            symbol: element.Symbol
        };
    });
    console.log(elements.length + ' elements loaded at ' + new Date());
    //ref.set(elements);

    return elements;

    // setTimeout(loadSymbols, 1000 * 60 * 60 * 24); // Reload once a day
}

// Load the initial data
loadSymbols();

app.listen(3000, function() {
    console.log('Rest Server listening on port 3000!');
});