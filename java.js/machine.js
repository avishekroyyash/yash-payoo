// id -> value find 
function getValueFromId(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log('the value of id ', value)
    return value;
}

// id -> text find
function getTextFromId(id){
    const innerT= document.getElementById(id);
    const text=innerT.innerText;
    console.log('the text of id ',text);
    return text;
}

// get money 
function getMoney(){
    const mainMoney = document.getElementById('main-amount-nav')
     const balance = mainMoney.innerText;
     console.log('main money is ',balance);
     return Number(balance);
}

//set money
function setMoney(value){
     const mainMoney = document.getElementById('main-amount-nav');
      mainMoney.innerText=value;
}

// add function
function add(a,b){
    return Number(a)+Number(b);
}

// sub function
function sub(a,b){
    return Number(a)-Number(b);
}

// id -> hidde all id -> match id unhide or open

function show(id){
    const transaction = document.getElementById('transaction-section');
    console.log(transaction)
    const addMoney = document.getElementById('add-money-section');
      console.log(addMoney)
    const cashOut = document.getElementById('cash-out-section');
     console.log(cashOut)
     const PayBill = document.getElementById('pay-bill-section')
     const history =document.getElementById('history')
     const getBonus = document.getElementById('bonus-section')
    //hide all button 
    transaction.classList.add('hidden');
     addMoney.classList.add('hidden');
      cashOut.classList.add('hidden');
      PayBill.classList.add('hidden');
      history.classList.add('hidden');
      getBonus.classList.add('hidden')
   // if id match then hidden class will bee unhidden
   const item = document.getElementById(id);
   item.classList.remove('hidden');

}

   //this is for transaction history 
   function transactionHistoryMaker(id){
     //take the parent where transation will be add 
     const historyMain = document.getElementById('history-container');
     // make new div 
     const div = document.createElement('div')
     //add inner html
     div.innerHTML = `
         <div class="w-full bg-[#F4F5F7]" >
         alert(' money is succuessfully ${id} is ')
         </div>
     `
     //add to history in main div
     historyMain.appendChild(div);
   }
   

