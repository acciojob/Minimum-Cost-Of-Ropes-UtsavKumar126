function calculateMinCost() {
  //your code here
	// Get rope lengths input value
 var ropeLengthsInput = document.getElementById("rope-lengths").value;

            // Convert the input string to an array of lengths (assuming comma-separated)
  var ropeLengthsArray = ropeLengthsInput.split(",");
  let sum=0;
  while(ropeLengthsArray.length!=0){
	  ropeLengthsArray.sort();
	  let a=ropeLengthsArray.shift();
	  let b=ropeLengthsArray.shift();
	  sum+=(a+b)
	  ropeLengthsArray.push(a+b);
  }
  
  return sum;
}  
