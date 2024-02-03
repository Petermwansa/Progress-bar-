let number = document.getElementById("number");
let counter = 0;

// this will set the counter 
setInterval(() => {
    // this will check if the counter is 65 and then stop the count 
    if (counter == 65) {
        clearInterval();
    } else {
        // this will execute as long as the counter is less that 65 
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 30);

