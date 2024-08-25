document.getElementById('deposit-btn').addEventListener('click',function(){
   const depositField = document.getElementById('deposit-field');
   const depositAmount = parseFloat(depositField.value);
  
   if((isNaN(depositField.value)) || depositField.value === '' || depositAmount < 0){
    depositField.value = '';
    alert("Please give a valid amount");
    
   }
  
   else{
   const depositText = document.getElementById('deposit-text');
   const depositPreviousValue = parseFloat(depositText.innerText);
   depositText.innerText = depositAmount + depositPreviousValue;
   const balanceText = document.getElementById('balance-text');
   const previousBalance = parseFloat(balanceText.innerText);
   balanceText.innerText = previousBalance + depositAmount;
   depositField.value = '';
   }
  

})