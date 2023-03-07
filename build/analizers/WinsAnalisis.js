"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalisis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalisis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.team && match[5] === MatchResult_1.MatchResult.Awaywin) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins}`;
    }
}
exports.WinsAnalisis = WinsAnalisis;
