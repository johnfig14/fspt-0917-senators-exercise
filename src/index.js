import Senators from './data/senators'

console.log(Senators.length)

const males = Senators.filter((senator) => {
  return senator.person.gender === 'male'
})

console.log(males.length)
