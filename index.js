


// Manage Form Area.......

var enterBtn = document.getElementById('entBtn');
enterBtn.addEventListener('click', function(){
    // console.log("I am getting clicked");
    var formArea = document.getElementById('form_area');
    formArea.style.display="none";
    var transactionAtra = document.getElementById('transArea');
    transactionAtra.style.display="block";
})
// End...........


// Manage the Condition 

var depositBtn = document.getElementById('addDeposit');
    depositBtn.addEventListener('click', function(){
    var depositAmount  = document.getElementById('addAmount').value ;
    var amountNumber = parseFloat(depositAmount);


    var currentDeposit = document.getElementById('currentDeposit').innerText;
    var currentDepositNumber = parseFloat(currentDeposit);

    var totalAmount = currentDepositNumber + amountNumber;
    document.getElementById('currentDeposit').innerText=totalAmount;


    var currentAmount = document.getElementById('currentAmount').innerText;
    var currentAmountNumber = parseFloat(currentAmount);
    var currentTotalAmount = currentAmountNumber + amountNumber ;
    document.getElementById('currentAmount').innerText=currentTotalAmount ;

    
    

    
    


})

// End managing condition


// Withdraw Part Start......


var clickWithdraw = document.getElementById('clickWithdraw');
clickWithdraw.addEventListener('click',function(){
    
    var withdrawmount = document.getElementById('withdrawAmount').value;
    var withdrawAmountNumber = parseFloat(withdrawmount);
    


     var currentWithdraw = document.getElementById('currentWithdraw').innerText;
     var currentWithdrawNumber = parseFloat(currentWithdraw);
     
     var totalWithdrawAmount = withdrawAmountNumber + currentWithdrawNumber;
     document.getElementById('currentWithdraw').innerText=totalWithdrawAmount;

    

     var currentAmount = document.getElementById('currentAmount').innerText;
     var currentAmountNumber = parseFloat(currentAmount);

     var CurrentTotalBalance = currentAmountNumber - withdrawAmountNumber;
     document.getElementById('currentAmount').innerText=CurrentTotalBalance;

    

    
   

   
})


// Withdraw Part End.......
