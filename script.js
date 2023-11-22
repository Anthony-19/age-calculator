//input Element 
inputDay = document.querySelector('#day');
inputMonth = document.querySelector('#MONTH');
inputYear = document.querySelector('#YEAR');
 let isValid = false;

//output Element 
outputDay = document.querySelector('.days');
outputMonth = document.querySelector('.months');
outputYear = document.querySelector('.years');

//LABEL
labelDay = document.querySelector('#labelDay');
labelMonth = document.querySelector('#labelMonth');
labelYear = document.querySelector('#labelYear');

//error messages 
errorDay = document.getElementById('errorDay');
errorMonth = document.getElementById('errorMonth');
errorYear = document.getElementById('errorYear');

//submitBtn
submitBtn = document.querySelector('.submitBtn');

//add eventListener
form = document.getElementById('form');
submitBtn.addEventListener('click', submitButton);
inputDay.addEventListener('input', errorDays);
inputMonth.addEventListener('input', errorMonths);
inputYear.addEventListener('input', errorYears);

//result
result = document.querySelector('.result');

// final error
finalError = document.getElementById('finalError');
function errorDays() {
    if (inputDay.value.trim() === '') {
        errorDay.textContent = 'This field is required';
        errorDay.style.color = 'red';
        inputDay.style.borderColor = 'red';
        labelDay.style.color = 'red';
        isValid = false;
        return;  
    }
    else if(+inputDay.value > 31) {
        errorDay.textContent = 'Must be a valid day';
        errorDay.style.color = 'red';
        inputDay.style.borderColor = 'red';
        labelDay.style.color = 'red';
        isValid = false;
        return;   
    }  
    else if (isNaN(+inputDay.value)) {
        errorDay.textContent = 'Must be a valid day';
        errorDay.style.color = 'red';
        inputDay.style.borderColor = 'red';
        labelDay.style.color = 'red';
        isValid = false;
        return;  
    }
    else if (+inputDay.value <= 0) {
        errorDay.textContent = 'Must be a valid day';
        errorDay.style.color = 'red';
        inputDay.style.borderColor = 'red';
        labelDay.style.color = 'red';
        isValid = false;
        return;  
    }
    
    else {
        errorDay.textContent = 'Valid input';
        errorDay.style.color = 'green';
        inputDay.style.borderColor = 'green';
        labelDay.style.color = 'green';
        isValid = true;
    }
}

function errorMonths() {
    if (inputMonth.value.trim() === '') {
        errorMonth.textContent = 'This field is required';
        errorMonth.style.color = 'red';
        inputMonth.style.borderColor = 'red';
        labelMonth.style.color = 'red';
        isValid = false;
        return;  
    }
    else if(+inputMonth.value > 12) {
        errorMonth.textContent = 'Must be a valid Month';
        errorMonth.style.color = 'red';
        inputMonth.style.borderColor = 'red';
        labelMonth.style.color = 'red';
        isValid = false;
        return;  
    }  
    else if (isNaN(+inputMonth.value)) {
        errorMonth.textContent = 'Must be a valid Month';
        errorMonth.style.color = 'red';
        inputMonth.style.borderColor = 'red';
        labelMonth.style.color = 'red';
        isValid = false;
        return;  
    }
    else if (+inputMonth.value <= 0) {
        errorMonth.textContent = 'Must be a valid Month';
        errorMonth.style.color = 'red';
        inputMonth.style.borderColor = 'red';
        labelMonth.style.color = 'red';
        isValid = false;
        return;  
    }
    
    else {
        errorMonth.textContent = 'Valid input';
        errorMonth.style.color = 'green';
        inputMonth.style.borderColor = 'green';
        labelMonth.style.color = 'green';
        isValid = true;
    }
}

function errorYears() {
    if (inputYear.value.trim() === '') {
        errorYear.textContent = 'This field is required';
        errorYear.style.color = 'red';
        inputYear.style.borderColor = 'red';
        labelYear.style.color = 'red';
        isValid = false;
        return;  
    }
    else if(+inputYear.value < 1970) {
        errorYear.textContent = 'Must be a valid Year';
        errorYear.style.color = 'red';
        inputYear.style.borderColor = 'red';
        labelYear.style.color = 'red';
        isValid = false;
        return; 
    }  
    else if (isNaN(+inputYear.value)) {
        errorYear.textContent = 'Must be a valid Year';
        errorYear.style.color = 'red';
        inputYear.style.borderColor = 'red';
        labelYear.style.color = 'red';
        isValid = false;
        return; 
    }
    else if (+inputYear.value <= 0) {
        errorYear.textContent = 'Must be a valid Year';
        errorYear.style.color = 'red';
        inputYear.style.borderColor = 'red';
        labelYear.style.color = 'red';
        isValid = false;
        return; 
    }
    else if (+inputYear.value > 2023) {
        errorYear.textContent = 'Must be a valid Year';
        errorYear.style.color = 'red';
        inputYear.style.borderColor = 'red';
        labelYear.style.color = 'red';
        isValid = false;
        return; 
    }
    
    else {
        errorYear.textContent = 'Valid input';
        errorYear.style.color = 'green';
        inputYear.style.borderColor = 'green';
        labelYear.style.color = 'green';
        isValid = true;
    }
}

function submitButton() {
    finalError.innerHTML = '';

    if(isValid) {
        result.style.display = 'block';
        finalError.style.display = 'none';
        var userInput = `${inputYear.value}/${inputMonth.value}/${inputDay.value}`;// alternative way to collect input data
        var userInputObj = new Date(userInput); //converting to date object
        var todaysDate = new Date();
        var ageDiffMill = todaysDate - userInputObj;
        console.log(ageDiffMill);
        var ageDiff = new Date(ageDiffMill);
        var ageInYears = ageDiff.getUTCFullYear() - 1970;// it shows us how many years have passed since 1970 so therefore to get the exact age we minus it by 1970
        var ageInMonth = ageDiff.getUTCMonth();
        var ageInDays = ageDiff.getUTCDate();
        outputYear.textContent = ageInYears;
        outputMonth.textContent = ageInMonth;
        outputDay.textContent = ageInDays;
        result.style.display = 'block';

    }
   
    else {
        result.style.display = 'none';
        var h2 = document.createElement('p');
        var h2Text = document.createTextNode('Fill in the correct data');
        h2.style.color = 'red';
        h2.appendChild(h2Text);
        finalError.appendChild(h2);
        finalError.style.display = 'block';

    }
}

























































































