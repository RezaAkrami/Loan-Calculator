// ==== Define Ui variables ====

let form = document.querySelector('#form-loan');
let amount = document.querySelector('#amount');
let interest = document.querySelector('#interest');
let year = document.querySelector('#year');
let monthlyPayment = document.querySelector('#monthly-payment');
let totalPayment = document.querySelector('#total-payment');
let intrestPayment = document.querySelector('#intrest-payment');
let card = document.querySelector('.card-body');
let heading = document.querySelector('.heading');

// form event submit

form.addEventListener('submit' , (e)=>{

    e.preventDefault();

    document.querySelector('.loading').style.display = 'block';
   
    setTimeout(calculateLoan, 1000);
});


// calculate function 
function calculateLoan(){

    let intAmount = parseFloat(amount.value);
    let intInterest = parseFloat(interest.value);
    let intMonth = parseFloat(year.value) * 12;

    let calInterest = (intAmount * intInterest * (intMonth+1) )/2400;
    let calMonthlyPayment = (calInterest+intAmount)/intMonth;
    let calTotalPayment = calInterest + intAmount ;

    if(isFinite(intAmount)){
        monthlyPayment.value = calMonthlyPayment.toFixed(2);
        totalPayment.value = calTotalPayment.toFixed(2);
        intrestPayment.value = calInterest.toFixed(2);

        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.results').style.display = 'block';
    }else{
        showError('please check the numbers');
    }    
}

// check numbers 

function showError(error){
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.results').style.display = 'none';

    let alertError = document.createElement('div');
    alertError.className = 'alert alert-danger';
    alertError.textContent = error;

    card.insertBefore(alertError,heading);

    setTimeout(()=>{
        document.querySelector('.alert').remove();
    }, 3000);
}

// clear inputs 

function clearInputs(){
    window.location.reload();
}