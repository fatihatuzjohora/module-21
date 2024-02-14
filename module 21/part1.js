
// practice ------function------

//12inch 1 feet, 75

//short vbe kore
function inchToFeet(inch){
const rifatHight =inch/12;
return rifatHight;
}
const rifat =inchToFeet(75);
 // console.log(rifat);

//boro kore
function inchToFeets(inch){
    const rifatFeet =inch/12;
    const rifatFeetParseint= parseInt(rifatFeet)
    const rifatInch = inch%12;
    const rifatFeetInch = rifatFeetParseint+' ft '+rifatInch + ' inch ' ;
return rifatFeetInch;
}
const rifat2 = inchToFeets(75);
// console.log(rifat2);


//function-- Average Of The Odd Numbers In An Array


function odd (nn){
    const allodds=[];
    for(const n of nn){
        if(n%2===1){
        allodds.push(n);  
        }
    }
     let sum=0;
for(const finalodds of allodds){
    sum= sum + finalodds;
 }
const finalOdd=allodds.length;
  console.log(sum,finalOdd);
 const avg=sum/finalOdd;
  return avg;
}
const nn=[12,23,22,34,54,67,79,90,69]
const oddNumberaverage = odd(nn); 
 console.log(oddNumberaverage);

//------------------------------------

 ///sob tke choto somkha ber kora jnno ar babhor
 const min= Math.min(42,1,6,7,-99);
 console.log(min);

 ///sob tke boro somkha ber kora jnno ar babhor
 const max= Math.max(42,1,6,7,-99);
 console.log(max);

 console.log(Math.PI);
 console.log(Math.abs(5-10));
 console.log(Math.round(2.25));
 console.log(Math.round(2.85));
 console.log(Math.floor(2.95));
 console.log(Math.floor(2.99));
 console.log(Math.ceil(2.99995));
 console.log(Math.ceil(2.000001));




 console.log(Math.random());
 console.log(Math.random()*10);
 
 const rand =Math.round(Math.random()*10);
 console.log(rand);


 //----------------------------date.js-------------------
 const today= new Date();
 const date= new Date('2062-10-19');
 console.log(date.getMonth());
 console.log(date.getDay());
 const specificDate =new Date (2091,0,26);
 console.log(specificDate);
 specificDate.setMonth(10);
 console.log(specificDate.toDateString('en-GB'));

 //temp---------------
 let a=5;
 let b=7;
 console.log(a,b);
 const temp=a;
 a=b;
 b=temp;
 console.log(a,b);


























