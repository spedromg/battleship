function startBattheship() {
  var randomicLoc = Math.floor(Math.random() * 5);
  var location1 = randomicLoc;
  var location2 = location1 + 1;
  var location3 = location2 + 1;
  var optionNumber; // insert number
  var hits = 0;
  var errors = 0;
  var isSunk = false; // flag
  var guesses = 0;
  var optionNumbers = []; // save numbers guess

  while (isSunk == false) {
    guesses = guesses + 1;
    optionNumber = prompt('Ready, aim, fire! (enter a number from 0 a 6):');

    if (optionNumber < 0 || optionNumber > 6) {
      alert('Please, enter a valid cell number!');
    } else {
      if (optionNumbers.includes(optionNumber)) {
        alert('This number has already been used .... ');
      } else {
        optionNumbers.push(optionNumber);

        if (
          optionNumber == location1 ||
          optionNumber == location2 ||
          optionNumber == location3
        ) {
          alert('HIT!!!');
          hits = hits + 1;

          if (hits == 3) {
            isSunk = true;
            alert('You sank my battleship.');
          }
        } else {
          alert('MISS!!!');
          errors = errors + 1;

          if (errors == 3) {
            alert('You lost!!!');
            isSunk = true;
          }
        }
      }
    }
  }

  var stats =
    'You took ' +
    guesses +
    ' guesses to sink the battleship, ' +
    'which means your shooting accuracy was ' +
    ((hits / guesses) * 100).toFixed(2) +
    '%';

  alert(stats);
}
