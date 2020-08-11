function calculateStay() {
    // Get the values from the page's elements and store them in local variables.
    var race = parseInt(document.getElementById('race').value, 10);
    var yearsofexperience = parseInt(document.getElementById('yearsofexperience').value, 10);
    var salary = parseInt(document.getElementById('salary').value, 10);


    function calc(Total_exp, Salary, White){
        cof = -.000000000735 - (.00000000964 * Total_exp) - (.0000411 * Salary) - (.000000000698 * White)
        per = 1 / (1 + Math.exp(1 + cof));
        return [`The probability of this teacher leaving is ${(per*100).toFixed(2)}%`, (per*100)];
    }

    document.getElementById('results').innerHTML = '';
    myelement = document.createElement("h2")
    var response = calc(yearsofexperience, salary, race);
    myelement.innerHTML = response[0];
    if (response[1] > 50) {
        myelement.className = 'leaving';
    } else {
        myelement.className = 'staying';
    }

    document.querySelector("#results").appendChild(myelement)
    
   
}
