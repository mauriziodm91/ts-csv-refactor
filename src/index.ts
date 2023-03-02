import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { MatchResult } from './MatchResult'
import path from 'path'

const file = path.join(__dirname, '..', 'assets', 'football.csv')
const csvFile = new CsvFileReader(file)

const matchReader = new MatchReader(csvFile)

matchReader.load()

let manUnitedWins = 0

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.Awaywin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} matches`)
