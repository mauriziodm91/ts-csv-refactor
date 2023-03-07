import { MatchData } from '../MatchData'
import { Analizer } from '../Summary'
import { MatchResult } from '../MatchResult'

export class WinsAnalisis implements Analizer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++
      } else if (match[2] === this.team && match[5] === MatchResult.Awaywin) {
        wins++
      }
    }
    return `Team ${this.team} won ${wins}`
  }
}
