let form = document.getElementById("loanForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isvalid = true;

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let salary = document.getElementById("salary").value;
    let loan = document.getElementById("loan").value;
    let duration = document.getElementById("duration").value;
    let success = document.getElementById("successMsg");

    let nameError = document.getElementById("nameError");
    let ageError = document.getElementById("ageError");
    let salaryError = document.getElementById("salaryError");
    let loanError = document.getElementById("loanError");
    let durationError = document.getElementById("durationError");

    nameError.innerHTML = "";
    ageError.innerHTML = "";
    salaryError.innerHTML = "";
    loanError.innerHTML = "";
    durationError.innerHTML = "";
    success.innerHTML = "";

    if (name === "") {
        nameError.innerHTML = "Name must not be empty";
        isvalid = false;
    } else if (name.length < 3) {
        nameError.innerHTML = "Minimum 3 characters required";
        isvalid = false;
    } else {
        for (let i = 0; i < name.length; i++) {
            let ch = name[i];
            if (!(ch >= 'A' && ch <= 'Z') &&
                !(ch >= 'a' && ch <= 'z') &&
                ch !== " ") {
                nameError.innerHTML = "Only alphabets allowed";
                isvalid = false;
                break;
            }
        }
    }

    if (age === "") {
        ageError.innerHTML = "Age must not be empty";
        isvalid = false;
    } else if (isNaN(age)) {
        ageError.innerHTML = "Age must be a number";
        isvalid = false;
    } else if (age < 21 || age > 60) {
        ageError.innerHTML = "Age must be between 21 and 60";
        isvalid = false;
    }

    if (salary === "") {
        salaryError.innerHTML = "Salary must not be empty";
        isvalid = false;
    } else if (isNaN(salary)) {
        salaryError.innerHTML = "Salary must be a number";
        isvalid = false;
    } else if (salary <= 10000) {
        salaryError.innerHTML = "Salary must be above 10,000";
        isvalid = false;
    }

    if (loan === "") {
        loanError.innerHTML = "Loan must not be empty";
        isvalid = false;
    } else if (isNaN(loan)) {
        loanError.innerHTML = "Loan must be a number";
        isvalid = false;
    } else if (loan > salary * 20) {
        loanError.innerHTML = "Max loan is 20x salary";
        isvalid = false;
    }


    if (duration === "") {
        durationError.innerHTML = "Duration required";
        isvalid = false;
    } else if (isNaN(duration)) {
        durationError.innerHTML = "Duration must be a number";
        isvalid = false;
    } else if (duration < 1 || duration > 30) {
        durationError.innerHTML = "Duration 1 to 30 years only";
        isvalid = false;
    }
    if(isvalid){
        success.innerHTML="Form Submitted Successfully"

    }

    age = Number(age);
    salary = Number(salary);
    loan = Number(loan);
    duration = Number(duration);


    let annualIncome = salary * 12;
    let status = "";
    if (loan <= salary * 20 && age >= 21 && age <= 60) {
        status = "Eligible";
    } else {
        status = "Not Eligible";
    }

    let totalPayable = loan + (loan * 0.10 * duration);
    let emi = totalPayable / (duration * 12);
    let percent = (emi / salary) * 100;
    let category = "";
    if (percent <= 30) {
        category = "Safe";
    } else if (percent <= 50) {
        category = "Risky";
    } else {
        category = "Not Recommended";
    }

    document.getElementById("dName").innerHTML = name;
    document.getElementById("dIncome").innerHTML = annualIncome.toFixed(2);
    document.getElementById("dStatus").innerHTML = status;
    document.getElementById("dTotal").innerHTML = totalPayable.toFixed(2);
    document.getElementById("dEmi").innerHTML = emi.toFixed(2);
    document.getElementById("dCategory").innerHTML = category;

});
