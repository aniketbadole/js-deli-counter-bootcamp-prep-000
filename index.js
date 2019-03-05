function takeANumber(line, name) {
  //var pos = line.length + 1
  line.push(name)
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

var counter = 0
function takeANumber(line) {
  counter++
  line.push(counter)
  return (`Welcome to the deli. You are number ${counter}`)
}

function nowServing(katzDeliLine) {
  var name = katzDeliLine.shift()
  for(var i=katzDeliLine.length; i>0; i--){
    return "Currently serving "+ name + "."
  }
  return "There is nobody waiting to be served!"
}

function currentLine(line) {
  var array = []
  for (let i = 0; i < line.length; i++) {
   array.push(` ` +[i+1]+`. `  + line[i])
  }
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  else {
    return (`The line is currently:` + array)
  }
}