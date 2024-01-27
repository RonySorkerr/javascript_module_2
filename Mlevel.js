// Multi_level Condition
const price = 7500;
if(price <= 7000 && price == 7500){
    // 5% discount
    const discout = price * 5 / 100;
    console.log('Your discount is : ' , discout);
    const payAmount = price - discout;
    console.log('Amazing ! You paying amount is only : ', payAmount);
}
else if(price > 7000){
    const discount = price * 6 / 100;
    console.log(discount);
    const totalPrice = price -  discount;
    console.log(totalPrice);
}
else{
    console.log('You have to pay : ', price);
}

const Price = 2500;
const age =  55;
if(age <= 21){
    console.log('You can eat here for free');
}
else if(age <= 30){
    // 6% discout 
    const discount = Price * 6 / 100;
    const yourBill = Price -  discount;
    console.log(yourBill);
}

else if(age > 50){
    const discount = Price * 2 / 100;
    const price =  Price -  discount;
    console.log('Your bill is : ', price);
}
else{
    console.log('Your bill is : ', Price);
}