//Create a main function for all of your code.
// Keep asking the user to press 1, 2, or 3 until they press 'q' to quit.

// If they press 1, alert "Challenge goes here".
// If they press 2, alert "2".
// If they press 3, alert "Hello World".


while(userinput !== 'q')
{
    var userinput = parseInt(prompt("Press 1, 2, or 3"));
    if(userinput === 1)
    {
        alert("Challenge goes here");
        prompt("Press a, b or c");
    }
else if(userinput ===2)
    {
    alert("2")
    }
else if(userinput ===3)
    {
       alert("Hello World!")
    }
}
