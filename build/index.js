"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const file = path_1.default.join(__dirname, '..', 'assets', 'football.csv');
const matchReader = MatchReader_1.MatchReader.fromCsv(file);
const summary = Summary_1.Summary.analisisFromWinsAndHtml('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
