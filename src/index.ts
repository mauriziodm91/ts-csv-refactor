import { CsvFileReader } from './CsvFileReader'
import { MatchResult } from './MatchResult'
import path from 'path'

const file = path.join(__dirname, '..', 'assets', 'football.csv')
const csvFile = new CsvFileReader(file)

csvFile.read()

let manUnitedWins = 0

for (let match of csvFile.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.Awaywin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} matches`)
