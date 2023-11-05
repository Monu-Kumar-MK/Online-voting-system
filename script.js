// Variables for storing votes and election status
let bjpVote = 0;
let congressVote = 0;
let bspVote = 0;
let aapVote = 0;
let cpVote = 0;
let napVote = 0;
let stopfun = 0;

// Function to reverse a string
function reverse(str) {
    return [...str]; // Convert the string into an array of characters
}

// Counter for counting temporary data
let count = 0;

// Function to handle voting actions
function action(anas) {
    if (stopfun > 0) {
        // If the election is closed, show a message and return
        swal("The Election has been done ", "Plz refresh the page"); // Using "swal" to show a message
        return;
    }

    // Get the HTML element that triggered the action
    let elm = document.getElementById(anas);

    // Function to change the background color of the element
    function fun() {
        elm.style.background = "#48D1CC"; // Change the background color
    }

    // Prompt the user to enter their email
    let content = prompt("enter your Email");

    // Reverse the email for validation
    let arr = reverse(content);

    // Email Validation
    if (
        arr[arr.length - 1] == 'm' && arr[arr.length - 2] == 'o' &&
        arr[arr.length - 3] == 'c' && arr[arr.length - 4] == '.' &&
        arr[arr.length - 5] == 'l' && arr[arr.length - 6] == 'i' &&
        arr[arr.length - 7] == 'a' && arr[arr.length - 8] == 'm' &&
        arr[arr.length - 9] == 'g' && arr[arr.length - 10] == '@'
    ) {
        // Valid email, increment the count and show success message
        count = 1 + count;
        if (count > 0) {
            swal("Thank's", "You have voted", "success"); // Show a success message
            elm.style.backgroundColor = "#00FF00"; // Change the background color to green
            setTimeout(fun, 4000); // Change the background color back after a delay

            // Check conditions and store the vote
        }
        if (anas == 'bjpbutton') {
            bjpVote = bjpVote + 1; // Increment BJP votes
        }
        if (anas == 'congressbutton') {
            congressVote = congressVote + 1; // Increment Congress votes
        }
        if (anas == 'bspbutton') {
            bspVote = bspVote + 1; // Increment BSP votes
            console.log(bspVote); // Log the BSP votes
        }
        if (anas == 'aapbutton') {
            aapVote = aapVote + 1; // Increment AAP votes
        }
        if (anas == 'napbutton') {
            napVote = napVote + 1; // Increment NAP votes
        }
        if (anas == 'cpbutton') {
            cpVote = cpVote + 1; // Increment CP votes
        }
    } else {
        // Invalid email, show an error message and apply visual effects
        swal("Please Enter Valid Email", "For Voting"); // Show an error message
        elm.style.background = "red"; // Change the background color to red
        setTimeout(fun, 2000); // Revert the background color after a delay

        // More visual effects can be applied here
    }
    if (count > 0) {
        // Update the "Voting.." status
        let as = document.getElementsByClassName("as");
        for (let sc of as) {
            sc.innerHTML = "Voting.."; // Update the text to "Voting.."
        }
    }
}

// Get HTML elements for vote counting and result display
let smalldiv = document.getElementById("small3");
let spandiv = document.getElementById("spandiv");

// Add a click event listener to the counting button
smalldiv.addEventListener("click", function () {
    let as = document.getElementsByClassName("as");

    // Update the text to "Counting" for all elements with the class "as"
    for (let i of as) {
        i.innerHTML = "Counting";
    }
    spandiv.innerHTML = "please Wait.."; // Update the message, show result button.

    setTimeout(wait, 4000); // Wait for 4 seconds before displaying results

    function wait() {
        // Update the vote counts and determine the winner
        document.getElementById("bjpid").innerHTML = bjpVote;
        document.getElementById("aapid").innerHTML = aapVote;
        document.getElementById("congressid").innerHTML = congressVote;
        document.getElementById("napid").innerHTML = napVote;
        document.getElementById("cpid").innerHTML = cpVote;
        document.getElementById("bspid").innerHTML = bspVote;

        stopfun = stopfun + 1; // Mark that the voting process is closed

        // Determine the winning party based on vote counts
        if (
            bjpVote > bspVote && bjpVote > congressVote &&
            bjpVote > cpVote && bjpVote > napVote && bjpVote > aapVote
        ) {
            spandiv.innerHTML = "Bjp Winner"; // BJP is the winner
            document.getElementById("bjpid").style.background = "#00FF00"; // Set the background color to green
        } else if (
            bspVote > bjpVote && bspVote > congressVote &&
            bspVote > cpVote && bspVote > napVote && bspVote > aapVote
        ) {
            spandiv.innerHTML = "Bsp Winner"; // BSP is the winner
            document.getElementById("bspid").style.background = "#00FF00"; // Set the background color to green
        } else if (
            aapVote > bjpVote && aapVote > congressVote &&
            aapVote > cpVote && aapVote > napVote && aapVote > bspVote
        ) {
            spandiv.innerHTML = "Aap Winner"; // AAP is the winner
            document.getElementById("aapid").style.background = "#00FF00"; // Set the background color to green
        } else if (
            cpVote > bjpVote && cpVote > congressVote &&
            cpVote > bspVote && cpVote > napVote && cpVote > aapVote
        ) {
            spandiv.innerHTML = "Cp Winner"; // CP is the winner
            document.getElementById("cpid").style.background = "#00FF00"; // Set the background color to green
        } else if (
            napVote > bjpVote && napVote > congressVote &&
            napVote > bspVote && napVote > cpVote && napVote > aapVote
        ) {
            spandiv.innerHTML = "Nap Winner"; // NAP is the winner
            document.getElementById("napid").style.background = "#00FF00"; // Set the background color to green
        } else if (
            congressVote > bjpVote && congressVote > napVote &&
            congressVote > bspVote && congressVote > cpVote && congressVote > aapVote
        ) {
            spandiv.innerHTML = "congress Winner"; // Congress is the winner
            document.getElementById("congressid").style.background = "#00FF00"; // Set the background color to green
        } else {
            console.log("No winner"); // No party has a clear majority
            spandiv.innerHTML = "No Winner"; // Display "No Winner"
            smalldiv.style.background = "red"; // Set the background color to red
            for (let i of as) {
                i.style.background = "red"; // Set background color to red for all elements with class "as"
            }
        }
    }
});
