function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string) {
  console.log('I can\'t hear you!')
}

function sayHiToGrandma(string) {
  if (string === string.toUpperCase()) return('YES INDEED!')
  if (string === string.toLowerCase()) return('I can\'t hear you!')
}
