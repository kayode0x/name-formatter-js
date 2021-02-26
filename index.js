/*
this program gets the name of the user regardless of the case and then sets it so that
the first letter of the name is in upper case and the rest letters of the name are in
lower case.

@kayode0x
*/


function nameFormatter() {
    var name = yourName;
    nameLength = name.length //gets the length of the name

    var nameValidation = /^[A-Za-z]+$/; //checks if the name is alphabets only

    firstLetter = name.slice(0, 1) //gets the first letter of the name
    newFirstLetter = firstLetter.toUpperCase(); //converts the first letter to upper case if it wasn't

    otherLetters = name.slice(1, nameLength) //gets the other letters apart from the first letter
    newOtherLetters = otherLetters.toLowerCase() //converts the other letters to lower case
    newName = newFirstLetter + newOtherLetters //adds both variables


    if (name.match(nameValidation)) {
        alert("Hello " + newName)// gives you the output of the name in the format you want.
    }
    else {
        alert("enter alphabets only") //alerts the user to input alphabets only for the name
    };

    const isEmpty = str => !str.trim().length // function to check if empty spaces are entered

    if (isEmpty(name)) {
      alert("Enter a valid name, spaces are invalid characters");
    };

}

var yourName = prompt("What is your name? ") //asks the user for the name and stores it
nameFormatter(yourName);
