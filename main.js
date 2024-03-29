const checkBtnDOM = document.querySelector('.check-btn');
const resultsTipDisplayDOM = document.getElementById('resultTip');
const resultsDisplayDOM = document.getElementById('result');
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
    let str = "";
    for (let i = 0; i < rate.length; i++) {
        if(rate[i] >= "0" && rate[i] < "9") {
                str += rate[i];
        }
    }
    
    const rateNum = +str
    const billNum = +bill
    const tip = (rateNum * billNum) / 100;
    const result = billNum + tip;

    resultsTipDisplayDOM.innerHTML = `${tip}`;
    resultsDisplayDOM.innerHTML = `${result}`;

 
});
 
 



