document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);
    console.log(isNaN(withdrawAmount));
    withdrawField.value = '';
    if((isNaN(withdrawAmount))){
        alert("Please give a valid amount");
        return;
        
       }
    const balanceText = document.getElementById('balance-text');
    const previousBalance = parseFloat(balanceText.innerText);
    
    const withdrawText = document.getElementById('withdraw-text');
    const withdrawPreviousValue = parseFloat(withdrawText.innerText);
    if(withdrawAmount>previousBalance){
        alert("amount is too high");
        return;
    }
    withdrawText.innerText = withdrawAmount + withdrawPreviousValue;
    balanceText.innerText = previousBalance - withdrawAmount;
   
 
 })