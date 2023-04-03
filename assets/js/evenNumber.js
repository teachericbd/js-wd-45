
// Create Result Function
function result() {
    // get value form user form
    let num = document.getElementById('num').value;
    //loops
    for (let i = 1; i <= num; i++) {
        //  condition check
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}