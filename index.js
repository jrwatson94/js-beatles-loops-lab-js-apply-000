// add solution here
function theBeatlesPlay (arrayMusicians,arrayInstruments){
  var i = 0
  var array = []
  for (i = 0; i < arrayMusicians.length; i++){
    array.push(arrayMusicians[i] + " plays " + arrayInstruments[i]);
  }
  
  return array
}


function 