
let secret = Math.floor(Math.random() * 100) + 1;

document.getElementById("btn").onclick = function () {
    let num = document.getElementById("guess").value;

    if (num === "") {
        document.getElementById("msg").innerText = "Please enter a number!";
        return;
    }

    num = Number(num);

    if (num < secret) {
        document.getElementById("msg").innerText = "Too Low!";
    }
    else if (num > secret) {
        document.getElementById("msg").innerText = "Too High!";
    }
    else {
        document.getElementById("msg").innerText = "🎉 Correct! You guessed it!";
    }
};