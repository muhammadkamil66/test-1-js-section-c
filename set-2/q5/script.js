function checkPersonType() {
    let income = parseInt(document.querySelector("input").value);
    let personType;

    if (income >= 100000) {
        personType = "Rich";
    } else if (income >= 50000) {
        personType = "Middle Class";
    } else {
        personType = "Poor";
    }

    alert(personType);

}