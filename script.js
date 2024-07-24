
let numberran = "";

function functionman() {
    const randomnum = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomnum;
    document.getElementById("demo").innerHTML = "گل گفتی!";
}

function question() {
    numberran = Math.floor(Math.random() * 100);
    document.getElementById("demo").innerHTML = "حدس بزن!";
}

function poroses() {
    const player_number = parseInt(document.getElementById("player_answer").value);
    if (isNaN(player_number)) {
        document.getElementById("demo").innerHTML = "لطفا یک عدد وارد کنید!";
        return;
    }

    document.getElementById("enter_btn").value = numberran;

    if (numberran == player_number) {
        functionman();
    } else if (numberran > player_number) {
        document.getElementById("demo").innerHTML = "بزرگ تر";
    } else {
        document.getElementById("demo").innerHTML = "کوچک تر";
    } 
}


