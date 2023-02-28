"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const path_1 = __importDefault(require("path"));
const file = path_1.default.join(__dirname, '..', 'assets', 'football.csv');
const csvFile = new CsvFileReader_1.CsvFileReader(file);
csvFile.read();
const dateoffirstsmatch = csvFile.data[0][0];
let manUnitedWins = 0;
for (let match of csvFile.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.Awaywin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} matches`);
