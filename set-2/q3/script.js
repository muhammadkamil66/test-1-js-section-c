function checkAnnual() {
    let monthlySalary = parseInt(document.querySelector("input").value);
    const monthsPerYear = 12; // 12 months in a year
    
    alert("Your annual salary is " + (monthlySalary * monthsPerYear)); 

}