const req = '/chord?key=A&notes=A,C,E,G'
const res = {
  name: 'A Dominant 7th',
  shortName: 'A7',
  notes: [
    { note: 'A', interval: '1' },
    { note: 'C', interval: '3' },
    { note: 'E', interval: '5' },
    { note: 'G', interval: 'b7' }
  ]
}

module.exports = { req, res }
