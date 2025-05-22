const square=process.argv[2];
let x=parseInt(square);
if (isNaN(x)){
    console.log('Missing size');
}else{
    let i = 0;
    while (i<x){
        console.log('X'.repeat(x));
        i++;
    }
}
