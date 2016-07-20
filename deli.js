var katzDeli = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(arr){
  if (arr.length == 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${arr.shift()}.`
  }
}

function currentLine(katzDeliLine){
  arr = []
  if( katzDeliLine.length == 0){
    return "The line is currently empty."
  }
  for (i = 0; i < katzDeliLine.length; i++){
    arr.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${arr.join(", ")}`
}
