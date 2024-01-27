//ternary ..>> three parts
// ?    :
// condition  ? do something when true : do something when false

// const number = 507;
// number > 500 ? console.log('Get in my son') : console.log('Get Out Of My House');

// const age =  21;
// if(age>=18){
//     console.log('You can vote');
// }
// else{
//     console.log('Sleep');
// }

// const price = 500;
// const isLeader = true;
// // if(isLeader === true){
// //     price == 0;
// //     console.log(price)
// // }
// // else{
// //     price += 100;
// //     console.log(price)
// // }

// // makign the upper code ternary
// price = isLeader === true ? 0 : price + 100;

price = 1200;
Premium = true;

if(Premium === true){
    price = price / 2;
}
else{
    price = 0;
}