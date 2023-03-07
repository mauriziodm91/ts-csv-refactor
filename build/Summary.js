"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const HtmlReport_1 = require("./reportTargets/HtmlReport");
const WinsAnalisis_1 = require("./analizers/WinsAnalisis");
class Summary {
    static analisisFromWinsAndHtml(team) {
        return new Summary(new WinsAnalisis_1.WinsAnalisis(team), new HtmlReport_1.HtmlReport());
    }
    constructor(analizer, outputTarget) {
        this.analizer = analizer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analizer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
