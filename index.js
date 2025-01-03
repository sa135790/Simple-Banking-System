


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