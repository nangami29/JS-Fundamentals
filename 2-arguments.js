const args=process.argv.length-2;

if(args===0){
    console.log('No argement');
}else if (args===1){
    console.log("Argument found");
}else {
    console.log('arguments found');
}