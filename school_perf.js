function calculateStay() {
    // Get the values from the page's elements and store them in local variables.
    var race = parseInt(document.getElementById('race').value, 10);
    var yearsofexperience = parseInt(document.getElementById('yearsofexperience').value, 10);
    var salary = parseInt(document.getElementById('salary').value, 10);

    /*
    import math
    def calc(Total_exp, Salary, White):
        cof = -.000000000735 - (.00000000964 * Total_exp) - (.0000411 * Salary) - (.000000000698 * White)
        per = 1 / (1 + math.exp(1 + cof))
        return f"The probabilty of this teacher leaving is {per*100:.2f}%"
    */

    function calc(Total_exp, Salary, White){
        cof = -.000000000735 - (.00000000964 * Total_exp) - (.0000411 * Salary) - (.000000000698 * White)
        per = 1 / (1 + Math.exp(1 + cof))
        return `The probability of this teacher leaving is ${(per*100).toFixed(2)}%` 
    }

    myelement = document.createElement("h2")
    myelement.innerHTML = calc(yearsofexperience, salary, race)
    document.querySelector("#results").appendChild(myelement)

    // alert(calc(yearsofexperience, salary, race));

   // Provide results to the website user.
   
}
