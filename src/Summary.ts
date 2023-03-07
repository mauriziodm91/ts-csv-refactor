import { MatchData } from './MatchData'
import { HtmlReport } from './reportTargets/HtmlReport'
import { WinsAnalisis } from './analizers/WinsAnalisis'

export interface Analizer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  static analisisFromWinsAndHtml(team: string): Summary {
    return new Summary(new WinsAnalisis(team), new HtmlReport())
  }

  constructor(public analizer: Analizer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analizer.run(matches)
    this.outputTarget.print(output)
  }
}
