// Function to calculate the minimum cost of connecting ropes
function calculateMinCost() {
    // Get the input element and its value
    var ropeLengthsInput = document.getElementById("rope-lengths").value;
    
    // Convert the input string to an array of integers
    var ropeLengthsArray = ropeLengthsInput.split(",").map(Number);

    let sum = 0;

    while (ropeLengthsArray.length != 0) {
        ropeLengthsArray.sort(function(a, b) { return a - b; }); // Sort the rope lengths in ascending order
        let a = ropeLengthsArray.shift(); // Get the shortest rope length
        let b = ropeLengthsArray.shift(); // Get the second shortest rope length
        sum += (a + b); // Add the combined length to the total cost
        ropeLengthsArray.push(a + b); // Push the combined length back to the array
    }

    // Display the result in the result element
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Minimum cost: " + sum;
}

// Add an event listener to the form's submit button
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    calculateMinCost(); // Call the function to calculate the minimum cost
});

