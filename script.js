//login Button event handler;
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    const transactionArea = document.getElementById("transaction-area");

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //  condition for login button;
    if (email == 'admin@bank.com' && password == 'bankpage') {
        loginArea.style.display = "none";
        transactionArea.style.display = "block";
    }
    else {
        swal({
            icon: 'email',
            title: 'Enter this email',
            text: 'admin@bank.com'
        })
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }

})

// forget button event handler;
const forgetBtn = document.getElementById("forget");
forgetBtn.addEventListener("click", function () {
    swal(
        'Please enter given password'
    )
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
})

//  deposit button event handler;
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    const depositNumber = getInput("depositAmount");

    if (depositNumber > 0) {
        updateTotalAmount("currentDeposit", depositNumber);
        updateTotalAmount("currentBalance", depositNumber);
    }
    else {
        swal({
            icon: 'error',
            title: 'Sorry',
            text: 'Deposit number should be positive'
        });
    }

    document.getElementById("depositAmount").value = "";
});

// withdraw button event handler;
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInput("withdrawAmount");

    if (withdrawNumber > 0) {
        updateTotalAmount("currentWithdraw", withdrawNumber)
        updateTotalAmount("currentBalance", -1 * withdrawNumber);
    }
    else {
        swal({
            icon: 'error',
            title: 'Oops!',
            text: 'Withdraw number should be positive'
        });
    }

    document.getElementById("withdrawAmount").value = "";
})

// get input from user;
function getInput(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

// update deposit, withdraw and total Balance;
function updateTotalAmount(id, depositNumber) {
    const Balance = document.getElementById(id).innerText;
    const BalanceNumber = parseFloat(Balance);
    const NewBalance = depositNumber + BalanceNumber;
    document.getElementById(id).innerText = NewBalance;
}


















// // Login button event handler;
// const loginBtn = document.getElementById("login");
// loginBtn.addEventListener("click", function () {
//     const loginArea = document.getElementById("login-area");
//     loginArea.style.display = "none";
//     const transactionArea = document.getElementById("transaction-area");
//     transactionArea.style.display = "block";
// })

// // deposit button event handler;
// const depositBtn = document.getElementById("addDeposit");
// depositBtn.addEventListener("click", function () {
//     const depositNumber = getInputUser("depositAmount");

//     updateDepositTotal("currentDeposit", depositNumber);
//     updateDepositTotal("currentBalance", depositNumber);

//     document.getElementById("depositAmount").value = "";
// })

// // withdraw button event handler;
// const withdrawBtn = document.getElementById("addWithdraw");
// withdrawBtn.addEventListener("click", function () {
//     const withdrawNumber = getInputUser("withdrawAmount");

//     updateDepositTotal("currentWithdraw", withdrawNumber);
//     updateDepositTotal("currentBalance", -1 * withdrawNumber);

//     document.getElementById("withdrawAmount").value = "";
// })

// // get input from user;
// function getInputUser(id) {
//     const amount = document.getElementById(id).value;
//     const amountNumber = parseFloat(amount);
//     return amountNumber;
// }

// // enter deposit amount & add Total Balance;
// function updateDepositTotal(id, depositNumber) {
//     const currentBalance = document.getElementById(id).innerText;
//     const currentBalanceNumber = parseFloat(currentBalance);    //convert String to Number;
//     const totalNewBalance = depositNumber + currentBalanceNumber;
//     document.getElementById(id).innerText = totalNewBalance;
// }