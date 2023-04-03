
// Create Result Function
function result(){
    //show result
    let output = document.getElementById('output');
    // get value form user form
    let num = document.getElementById('num').value;
    //init result
    let result = 1;
    //loops
    for(let i = 1; i <= num; i++){
        // result = result+i;
        result *= i;
    }
    output.innerText = result;
    
}