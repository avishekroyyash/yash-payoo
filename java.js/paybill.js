document.getElementById('pay-now').addEventListener('click',function(){
   // console.log('clicked pay bill')
   //select a bank 
   const select=getValueFromId('bill-select-bank');
    if(select =='Select a bank'){
        alert('select a bank ')
        return;
    }
   //select account number for pay bill
   const accountNo = getValueFromId('bill-acc-num');
   if(accountNo.length!=11){
    alert('enter a valid account number');
    return ;
   }
   //select amount to pay
   const amount = getValueFromId('pay-bill-amount');
    // money calculation 
    const newTaka = sub(getMoney(),amount);
    if(newTaka<0){
        alert('insufficient fund please chake your account');
        return;
    }
   //select pin number for pay bill
   const pin = getValueFromId('pay-bill-agent-pass');
   if(pin=='0000'){
     alert('pay bill is success ful ');
     setMoney(newTaka);
     //add transaction
     //take the main parent where i add transation
     const mainContainer = document.getElementById('history-container');
     //make new div to add transaction 
     const div = document.createElement('div')
     //add inner html
     
     div.innerHTML = `
         <div class="" >
         <img class="w-[60px] mb-2" src="assets/Logo-full.png" alt="">
          pay bill is succuessfully  ${amount} and 
          new money ${newTaka} to date ${new Date}
         </div>
     `
     //add to main 
     mainContainer.appendChild(div);
   }
   else{
    alert('pin number is wrong');
    return;
   }
})