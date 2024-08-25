document.getElementById('deposit-btn').addEventListener('click',function(){
   const depositField = document.getElementById('deposit-field');
   const depositAmount = parseFloat(depositField.value);
   depositField.value = '';
   if((isNaN(depositAmount))){
    alert("give valid amount");
    return;
    
   }
  
   else{
   const depositText = document.getElementById('deposit-text');
   const depositPreviousValue = parseFloat(depositText.innerText);
   const balanceText = document.getElementById('balance-text');
   const previousBalance = parseFloat(balanceText.innerText);
   depositText.innerText = depositAmount + depositPreviousValue;
   balanceText.innerText = previousBalance + depositAmount;
   }
  

})