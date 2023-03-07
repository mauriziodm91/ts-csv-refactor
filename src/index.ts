import path from 'path'
import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

const file = path.join(__dirname, '..', 'assets', 'football.csv')
const matchReader = MatchReader.fromCsv(file)
const summary = Summary.analisisFromWinsAndHtml('Man United')

matchReader.load()
summary.buildAndPrintReport(matchReader.matches)
