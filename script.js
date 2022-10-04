//given data
let bankDetails = {
    AccountName: "Current Account",
    BankBalance: "XXXXX",
    transactionamount: 15000,
    transactiondate: "2022-08-14 15:55",
};
let paymentType = {
    Id: "X",
    Name: "Bank to Wallet Transfer",
};
let senderDetails = {
    sender: "Saurabh Sharma",
    bank: "SBI",
    IFSC: "SBIN016095",
    accountno: "XXXXXXXXXX5736",
    transactiondate: "2022-08-12 15:55",
};
let receiverDetails = {
    reciever: "Saurabh Sharma",
    wallet: " Growpital Wallet ",
    referenceno: "DBTR/222201998174",
    transactiondate: "2022-08-12 15:55",
};
let paymentDetails = {
    paymentmethod: "UPI",
    transactionId: "DBTR/222201998174",
};

//Formatting Date and Time
let s = bankDetails.transactiondate;
console.log(s);
monthArr = ['none', 'Jan', 'Feb', 'Mar', 'Apr', "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let _date = (s.slice(8, 10));
let _month = s.slice(5, 7);
if (_month[0] == 0) {
    _month = monthArr[_month[1]];
}
else {
    _month = monthArr[_month];

}
let _year = s.slice(0, 4);

let _time;
// adding am, pm
let _hour = s.slice(11, 13);
if (_hour > 12) {
    _hour -= 12;
    _time = _hour + ":" + s.slice(14, 17) + "pm";
}
else {
    _time = _hour + ":" + s.slice(14, 17) + "am";

}
// after formatting
let finalDate = _date + ' ' + _month + ' ' + _year + ', ' + _time;
console.log(finalDate);


//assigning values dynamically
// transaction amount
let transactionAmount = document.querySelector('.bold-text');
transactionAmount.innerText = '₹' + bankDetails.transactionamount;

// transaction date and time
let transactionDate = document.querySelectorAll('.plain-text')[2];
transactionDate.innerText = finalDate;

// sender's details
let senderCredentails = document.getElementsByClassName('sender-details');
senderCredentails[0].innerText = senderDetails.sender;
senderCredentails[1].innerText = senderDetails.bank + ', ISFC ' + senderDetails.IFSC;
senderCredentails[2].innerText = 'A/c No.' + senderDetails.accountno;
senderCredentails[3].innerText = finalDate;

// receiver's details
let receiverCredentials = document.getElementsByClassName('receiver-details');
receiverCredentials[0].innerText = receiverDetails.reciever;
receiverCredentials[1].innerText = receiverDetails.wallet;
receiverCredentials[2].innerText = 'Ref No. ' + receiverDetails.referenceno;
receiverCredentials[3].innerText = finalDate;

// Payment Details
let transactionDetails = document.getElementsByClassName('transactionDetails');
transactionDetails[0].innerHTML = `<b>Payment Method : </b> ${paymentDetails.paymentmethod}`;
transactionDetails[1].innerHTML = `<b>Transaction ID : </b> ${paymentDetails.transactionId}`;

