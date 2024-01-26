const salary = 25000;
const isBCS = true;
const height = 61;

 if (salary > 20000 && height > 60){
    console.log('Patrir ma raji');
 }
 else{
    console.log('patrir ma raji na');
 }

//  if we use && we have to fulfill both the conditions. Otherwise, the result will be false.

 if (salary > 25000 || height > 72){
    console.log('Patri to bejai raji')
 }
 else{
    console.log('Dauraia pala koitasi.')
 }

//  if we use or if condition we, can fulfill eigher one of the condition. and the result will be true.

// practising
const BaperJomi = 200;
const mayerAdor = true;
const ekmatroSele = true;

if(BaperJomi >= 190 && mayerAdor == false){
    console.log('Asho baba Probesh koro');
}
else{
    console.log('Je dike ashso sedikhe jao');
}

if(BaperJomi == 200 && ekmatroSele == true){
    console.log('Ok, we are raji');
}
else{
    console.log('to kere vaag');
}

const coshmaPrice = 350;
const ghoriPrice = 550;
const total = 950;

if(total <= 900){
    console.log('taile den ei nen');
}
else{
    console.log('apnar mal apni rakhen');
}

if(coshmaPrice <= 330 || ghoriPrice == 500){
    console.log('packet koren');
}
else{
    console.log('apnar mall pachay den');
}

if(coshmaPrice == 300 || ghoriPrice == 550 || total == 800){
    console.log('Mal gola packet koren');
}
else{
    console.log('Thak taile nibo na');
}

if(coshmaPrice == 300 && ghoriPrice == 550 && total == 850){
    console.log('We have friendship.');
}
else{
    console.log('allah hafez');
}

//complex condition

if(coshmaPrice <= 350 && ghoriPrice == 500 || total == 900){
    console.log('Ok mama Ami asi.');
}
else{
    console.log('Tata mama')
}