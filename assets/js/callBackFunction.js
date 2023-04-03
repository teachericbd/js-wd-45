let person = [
    {firstName: "Siam",lastName:"Hossain"},
    {firstName: "Mahmudur",lastName:"Rahman"},
    {firstName: "Premanda",lastName:"Das"}
];

function createPerson(Newperson,call){
    setTimeout(function(){
        person.push(Newperson);
        call();
    },4000);
}

function getPerson(){
    setTimeout(function(){
        let output = '<ul>';
        person.forEach(function(data){
            output += `<li> ${data.firstName} ${data.lastName} </li>`
        });
        output += '</ul>';
        document.querySelector('#output').innerHTML = output;
        console.log(person);
    },3000);
}
createPerson({firstName: "Sajjad",lastName:"Hossain"},getPerson)
// getPerson();
// console.log(person);
// let call = getPerson;
// Newperson = {firstName: "Sajjad",lastName:"Hossain"};