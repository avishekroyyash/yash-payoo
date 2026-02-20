document.getElementById('get-bonus').addEventListener('click',function(){
   //console.log('clicked bounus butotn')
   //get the coupon field
   const coupon = getValueFromId('coupon');
   //console.log(coupon)
    if(coupon>=0 && coupon<=5000){
        const newmoney = add(getMoney(),coupon)
        alert(`coupon add successfully and new money ${newmoney}`)  
        setMoney(newmoney)     
        //add transaction history 
        //take the parent where transation will be add 
     const historyMain = document.getElementById('history-container');
     // make new div 
     const div = document.createElement('div')
     //add inner html
     div.innerHTML = `
         <div class="" >
         <img class="w-[60px] mb-2" src="assets/Logo-full.png" alt="">
          you have get bonus is succuessfully and 
          new money ${newmoney} to date ${new Date}
         </div>      
     `
     //add to history in main div
     historyMain.appendChild(div);
    }
    else{
        alert('enter 0<gift<5000');
    }
});