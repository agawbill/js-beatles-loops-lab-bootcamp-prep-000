function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (var i=0; i < 4; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var array=[]
  let i=0
  while (i<facts.length) {
    array.push(`${facts[i]}!!!`);
    i++
  }
  return array
}

function iLoveTheBeatles (number){
  return number < 15
  var array = []
  do {
  array.push('I love the Beatles')
  number ++
  return array
} while (maybeTrue());
}