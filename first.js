function change() {
    let red = document.querySelector("#red").value;
    let green = document.querySelector("#green").value;
    let blue = document.querySelector("#blue").value;

    let block = document.querySelector("#block");
    block.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    document.querySelector("#redValue").textContent = red;
    document.querySelector("#greenValue").textContent = green;
    document.querySelector("#blueValue").textContent = blue;

    document.getElementById("text").innerHTML = "rgb(" + red + " , " + green + " , " + blue + ")";

}

change();
