
// Create Result Function
function result(){
    //show result
    let output = document.getElementById('output');
    // get value form user form
    let num = document.getElementById('num').value;
    //init result
    let result = 0;
    //loops
    for(let i = 0; i <= num; i++){
        // result = result+i;
        if(i%2 != 0){
            result += i;
        }
    }
    output.innerText = result;
    
}