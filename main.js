const checkBtnDOM = document.querySelector('.check-btn');
const resultsDisplayDOM = document.getElementById('result');
const screenDOM = document.getElementById('screen');
const billInputDOM = document.getElementById('bill-input');
const rateInputDOM = document.getElementById('rate-input');


function kainaSuPVM(kainaBePVM){
    const PVM = 21;
    const coof = 1 + PVM / 100;
    const galutineKaina = kainaBePVM * coof;
    return galutineKaina + ' Eur';
 
}
 
checkBtnDOM.addEventListener('click', function () {
    // let count = 0;
    const bill = billInputDOM.value;
    const rate = rateInputDOM.value;
    console.log(bill, rate);

    resultsDisplayDOM.innerHTML = `${text} ${count}`;



    // const weightNum = (+ weight);
    // const heightNum = (+ height);
    // if (weight.length === 0 || height.length === 0) {
    //     count += 0;
    // } else {
    //     count += (+ ((weightNum) / (((heightNum) / 100) ** 2)).toFixed(2));
    // }
    // screenDOM.style.display = 'flex';
    // screenDOM.style.justifyContent = 'space-evenly';
    // let text = '';
    

    // resultsDisplayDOM.innerHTML = `${text} ${count}`;
});
 
 
