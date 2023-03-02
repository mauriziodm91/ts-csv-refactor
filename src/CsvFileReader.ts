import fs from 'fs'

export abstract class CsvFileReader<T> {
  data: T[] = []

  constructor(public filePath: string) {}

  abstract mapRow(row: string[]): T

  read(): void {
    this.data = fs
      .readFileSync(this.filePath, 'utf-8')
      .split('\n')
      .map((row) => row.split(','))
      .map(this.mapRow)
  }
}
