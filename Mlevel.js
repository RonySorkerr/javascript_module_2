// multi level conditions

const price = 50000;
if(price >= 5000){
    //10% discount
    const discount = price * 10 / 100;
    const payAmoutn = price - discount ;
    console.log(payAmoutn);
}