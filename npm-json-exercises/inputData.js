function dataInput (input) {
  return inputArray(input);
}

//hidden
var origList = [];
function inputArray (myArgs) {
  for (var i = 0; i < myArgs.length; i++) {
     origList.push(myArgs[i]);
  }
  return sortedData();
}

//hidden
var sortedData = function () {
  origList.sort();
  console.log(origList);
}

module.exports = {
  dataInput: dataInput
}
