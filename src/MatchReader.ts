import { CsvFileReader } from './CsvFileReader'
import { dateStringtoDate } from './utils'
import { MatchResult } from './MatchResult'

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringtoDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, //Type assertion
      row[6],
    ]
  }
}
