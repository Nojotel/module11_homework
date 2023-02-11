let arr = [NaN,null,3,3,3,4,4,4,4,0,0,'s','s'];
let zero = 0;
let odd = 0;
let even = 0;
let un = 0;
function arrayIterateElement(){
    for(let i=0; i < arr.length; i++){
        if(typeof arr[i] === 'number'&& !isNaN(arr[i])){
            if(arr[i] === 0){
                zero = zero + 1;
            }
            else if((arr[i] % 2) === 0){
                even = even + 1;
            }else if((arr[i] % 2) !== 0){
                odd = odd + 1;
            }
        }else{
            un = un + 1;
        }
    }
    console.log(zero,'Ноль');
    console.log(odd,'Нечетное');
    console.log(even,'Четное');
    console.log(un,'Неизветно');
}
arrayIterateElement();