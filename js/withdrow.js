document.getElementById('withdraw-button').addEventListener('click' , function(){

    const newWithdrawAmount = getInputValue('withdraw-input');

const pWithdrawAmount =  elementValueGet('withdraw-balance');

const totalWithdrawAmount = newWithdrawAmount + pWithdrawAmount ;

setTextElementValueById('withdraw-balance' , totalWithdrawAmount);

const pTotalBalance = elementValueGet('total-balance');

const newBalanceTotal = pTotalBalance - newWithdrawAmount ;

setTextElementValueById('total-balance' , newBalanceTotal);


});