function createGrid() {
    const gridElement = document.querySelector('.grid');
    for (let i = 0; i < 37; i++) {
        let rowElement = document.createElement('div');
        rowElement.classList.add('row');
        gridElement.appendChild(rowElement)
        for (let j = 0; j < 37; j++) {
            let squareElement = document.createElement('span');
            squareElement.classList.add('square');
            squareElement.classList.add('border');
            squareElement.title = `W : ${i + 1} - H : ${j + 1}`
            rowElement.appendChild(squareElement);
            squareElement.addEventListener('click', (ev) => ev.target.classList.toggle('black'))
        }
    }
}

const grid = createGrid();

let button = document.querySelector('[data-btn]')
let squares = document.querySelectorAll('.square');
let labels = document.querySelectorAll('.label')

button.addEventListener('click', () => {
    squares.forEach(square => square.classList.toggle('border'))
    labels.forEach(square => square.classList.toggle('opacity'))
})


// EVIL VERSION: WHEN THE CLOCKS RUNS DOWN ALL SQUARES ARE RESET 

// // Set the countdown duration in seconds
// var countdownDuration = 60*59;

// // Update the countdown every 1 second
// var interval = setInterval(function () {
//     // Calculate the minutes and seconds left
//     var minutes = Math.floor(countdownDuration / 60);
//     var seconds = countdownDuration % 60;

//     // Format the minutes and seconds
//     if (minutes < 10) {
//         minutes = "0" + minutes;
//     }
//     if (seconds < 10) {
//         seconds = "0" + seconds;
//     }

//     // Display the result in an element with id="countdown"
//     document.getElementById("countdown").innerHTML = minutes + ":" + seconds;

//     // If the countdown is finished, clear the interval and display a message
//     if (countdownDuration <= 0) {
//         clearInterval(interval);
//         document.getElementById("countdown").innerHTML = "Sorry Mate";
//         squares.forEach(square => square.classList.remove('black'))
//     }

//     // Decrement the countdown duration by 1 second
//     countdownDuration--;
// }, 1000);
