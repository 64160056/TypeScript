function printStatusCode(code: string|number) {
    if(typeof code ==='string'){
        console.log(`My status code is ${code.toUpperCase()} ${typeof code}`);

    }else{
        console.log(`My status code is ${code} ${typeof code}`)
    }
}
printStatusCode(404);
printStatusCode("abc");