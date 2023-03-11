// valid loan form

let loanAmountInputElement = document.getElementById('loanAmountElement');
let loanInterestInputElement = document.getElementById('interestRate');
let loanYearsInputElement = document.getElementById('years');
let submitBtnElement = document.getElementById('submitBtn');



loanAmountInputElement.addEventListener('blur',function(event){
    let loanAmountErrorMsg = document.getElementById('loanAmountErrorMsg');

    if (event.target.value === ''){
        loanAmountErrorMsg.textContent = 'Required*';
    }else{
        loanAmountErrorMsg.textContent = '';
    }
})

loanInterestInputElement.addEventListener('blur',function(event){
    let loanInterestErrorMsg = document.getElementById('loanInterestErrorMsg');

    if (event.target.value === ''){
        loanInterestErrorMsg.textContent = 'Required*';
    }else{
        loanInterestErrorMsg.textContent = '';
    }
})

loanYearsInputElement.addEventListener('blur',function(event){
    let loanYearsErrorMsg = document.getElementById('loanYearsErrorMsg');

    if (event.target.value === ''){
        loanYearsErrorMsg.textContent = 'Required*';
    }else{
        loanYearsErrorMsg.textContent = '';
    }
})


submitBtnElement.addEventListener('submit',function(event){
    event.preventDefault();
})

// Dark Mode
let darkMode = document.getElementById('darkMode');
let bgColorMode = document.getElementById('bgColorMode');
let mainHeading = document.getElementById('mainHeadingColor');



darkMode.addEventListener('click',function(){
    bgColorMode.classList.toggle('bg-dark');
    bgColorMode.style.transition = '1s';
    mainHeading.classList.toggle('text-light');
    mainHeading.style.transition = '1s';
    darkMode.classList.toggle('text-white')
    darkMode.style.transition = '1s';

})


// loan amount calculations
let totalYears = document.getElementById('totalYears');
let totalAmount = document.getElementById('totalAmount');
let totalInterest = document.getElementById('totalInterest');
let totalMonths = document.getElementById('totalMonths');
let result = document.getElementById('result');




submitBtnElement.addEventListener('click',function(){
    let hrLine = document.getElementById('hrLine');
    let allResultValues = document.getElementById('allResultValues');
    let loanAmount = parseInt(loanAmountInputElement.value);
    let loanInterest = parseInt(loanInterestInputElement.value)/12/100;
    let noOfYears = parseInt(loanYearsInputElement.value)*12;
    let calculationLoan = (loanAmount*loanInterest*((1+loanInterest)**noOfYears)/((1+loanInterest)**noOfYears-1));

    hrLine.classList.add('hr-line2');
    result.textContent = 'Monthly EMI : ' + Math.ceil(calculationLoan);
    totalAmount.textContent = 'Total Loan Amount : ' + loanAmount;
    totalYears.textContent = 'Number of Years : ' + loanYearsInputElement.value;
    totalMonths.textContent = 'Number of Months : ' + noOfYears;
    totalInterest.textContent = 'Rate of Interest : ' + loanInterestInputElement.value;
})