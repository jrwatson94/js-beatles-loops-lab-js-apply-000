// add solution here
function theBeatlesPlay (arrayMusicians,arrayInstruments){
  var i = 0
  var array = []
  for (i = 0; i < arrayMusicians.length; i++){
    array.push(arrayMusicians[i] + " " + arrayInstruments[i]);
  }
  
  return array
}