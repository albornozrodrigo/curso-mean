const _ = require('lodash');

const alunos = [
  {
    nome: 'Rodrigo',
    nota: 9.9
  },
  {
    nome: 'Camila',
    nota: 9.7
  },
  {
    nome: 'Isa',
    nota: 8.9
  },
  {
    nome: 'Lucas',
    nota: 5.5
  }
]

const media = _.sumBy(alunos, 'nota') / alunos.length

console.log(media)
