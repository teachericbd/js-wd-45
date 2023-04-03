let btn = document.querySelector('#GetData');
let output = document.querySelector('#output');
let img = document.querySelector('#imgId');
let date = document.querySelector('#date');

let getJoks = (e) => {
    let xhr = new XMLHttpRequest();
    // Api = Application Programming Interface
    xhr.open('get', 'https://api.chucknorris.io/jokes/random', true);
    xhr.onload = function(){
        if(this.status === 200){
            let data = JSON.parse(this.responseText);
            console.log(data);
            let joks = data.value;
            // console.log(joks)
            output.innerText = joks;
            img.src = data.icon_url;
            let oldate = new Date(data.created_at);
            date.innerText = oldate;
        }
    }
    xhr.send();
}

btn.addEventListener('click', getJoks);