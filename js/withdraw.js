document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);
    const balanceText = document.getElementById('balance-text');
    const previousBalance = parseFloat(balanceText.innerText);
   
    if((isNaN(withdrawField.value)) || withdrawField.value === '' || withdrawAmount > previousBalance ){
     withdrawField.value = '';
     alert("Please give a valid amount");
     
    }
   
    else{
    const withdrawText = document.getElementById('withdraw-text');
    const withdrawPreviousValue = parseFloat(withdrawText.innerText);
    withdrawText.innerText = withdrawAmount + withdrawPreviousValue;
    balanceText.innerText = previousBalance - withdrawAmount;
    withdrawField.value = '';
    }
   
 
 })