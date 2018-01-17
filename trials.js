var switchWins = 0; // Variable to track if switching doors created winning a car
var simulations = 10000;

for (var i = 0; i < simulations; i++) {
  // Get random number to assign car to a random door
  var randomN = Math.random();
  // Initialize all doors to have a goat. 0 = door has goat
  var playerDoor = 0;
  var hostDoor1 = 0;
  var hostDoor2 = 0;

  // Assign the car to a door. 1 = door has car
  if (randomN < 0.33) {
    playerDoor = 1;
  } else if (randomN >= 0.33 && randomN <= 0.66) {
    hostDoor1 = 1;
  } else {
    hostDoor2 = 1;
  }

  if (hostDoor1 === 0) {
    // Check if the first host door is a goat, if it does we remove it as an option.
    if (hostDoor2 === 1) {
      // Check if switching to the other door would win the car.
      switchWins += 1; // Increase switch wins count
    }
  } else {
    // If the host door has the car, we know switching wins so we increase switch wins count
    switchWins += 1;
  }
}

console.log(
  "Out of 10,000 simulations, switching doors won " +
    switchWins +
    " times or " +
    (switchWins / simulations * 100).toFixed(2) +
    "% of the time"
);

// Creating a pie chart w/ Plotly
// var data = [
//   {
//     values: [switchWins, simulations - switchWins],
//     labels: ["Switch Wins", "No Switch Wins"],
//     type: "pie"
//   }
// ];

// var layout = {
//   height: 600,
//   width: 700
// };

// Plotly.newPlot("myDiv", data, layout);
