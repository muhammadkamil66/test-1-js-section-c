function calcAvg() {
    // need to use id selector because there are 2 input elements, not one.
    let numb1 = parseInt(document.querySelector("#numb1").value);
    let numb2 = parseInt(document.querySelector("#numb2").value);

    let average = (numb1 + numb2) / 2;

    alert(average);
}