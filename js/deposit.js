document.getElementById('btn-deposit').addEventListener('click' , function(){

    const newDepositAmount = getInputValue('deposit-field');
   
  
    const pDepositAmount = elementValueGet('deposit-total');
  
  
    const newDepositTotal = pDepositAmount + newDepositAmount;
  
  
  
    setTextElementValueById('deposit-total', newDepositTotal);
  
    const pBalanceTotal = elementValueGet('total-balance');
    const newBalanceTotal = pBalanceTotal + newDepositAmount;
  
    setTextElementValueById('total-balance' , newBalanceTotal);
   
  
  
  
  });