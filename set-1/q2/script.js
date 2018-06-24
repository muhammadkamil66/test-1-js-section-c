function checkAgeGroup() {
    let age = parseInt(document.querySelector("input").value);
    let ageGroup;

    if (age >= 65) {
        ageGroup = "Senior";
    } else if (age >= 25) {
        ageGroup = "Adult";
    } else if (age >= 15) {
        ageGroup = "Youth";
    } else {
        ageGroup = "Child";
    }

    alert(ageGroup);

    /*

        There could be other ways to write this if/else statement

        Example  # 1

        if (age >= 0 && age <=14) {
            
        } else if (age >= 15 && age <= 24) {

        }
        .
        .
        .

    */
}