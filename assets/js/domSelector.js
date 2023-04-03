//************ Single line Selector *********** */
// getting an Elements
// let a = document.getElementById('unorder').className;
// console.log(a);
// changing Style
// let a = document.getElementById('test');
// a.style.background = 'black';
// a.style.color = 'white';
// a.style.textDecoration = 'none';
// a.style.textAlign = 'center'
// changing Content
// a = document.getElementById('test');
// a.textContent = "Hello";
// a.innerText = "Hello";
// a.innerHTML = "<a href='#'>Welcome</a>";

//************* Multiple Selector ***********************/
//className
// let a = document.getElementsByClassName('test');
// console.log(a[2]);
//tagName
// let a = document.getElementsByTagName('h3');
// console.log(a[1].innerText = "Welcome");
//querySelector
// a = document.querySelector('.test');
// a = document.querySelectorAll('.test');
// console.log(a);

// let a = document.querySelector('ul');
// console.log(a.childNodes[5].nodeType);
// NodeType
// 1. Element
// 2. Attribute
// 3. TextNode
// 8. comment
// 9. Document ItSelf
// 10. DocType
// console.log(a.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling);
//Add,Replace,Remove Using DOM
// let a = document.querySelector('ul');
//Create Element;
// 1. appendChild();
// Replace Element
// 2. ReplaceChild();
// remove Element
// 3. remove();
// 4. removeChild();
// let b = a.childNodes[1];
// console.log(b);
// b.setAttribute('title','Welcome to Bangladesh');
// b.classList.add('text-danger');
// b.classList.add('bg-success');
// // console.log(a);
// console.log(a.children[0]);
//---------------------------------------
    //Create Element
// ------------------------------------------ 

// let ancor = document.createElement('a');
// ancor.classList = 'text-danger text-center text-none';
// ancor.setAttribute('href','https://innovacomputersbd.com/');
// ancor.setAttribute('target','_blank');
// ancor.setAttribute('title', 'INNOVA Computers BD');
// ancor.textContent = 'INNOVA Computers';
// ancor.id = 'testid';
// let li = document.createElement('li');
// li.appendChild(ancor);
// let ul = document.querySelector('#unorder');
// oldValue = ul.children[0];
// newValue = li;
// ul.replaceChild(newValue, oldValue);
// ul.appendChild(li);
// ancor2 = document.createElement('a');
// ancor2.textContent = 'Ancor Two';
// ancor2.setAttribute('href','#');
// ancor2.classList = 'text-none text-danger'
// newLi = document.createElement('li');
// newLi.appendChild(ancor2);
// ul.appendChild(newLi);
// console.log(ul.hasAttribute('href'));
// ul.children[2].remove()
// console.log(li);

// console.log(ul.children[1].remove())
//--------------------------------------------------
// Event Listener
// -----------------------------------------------
// let btn = document.querySelector('.btn');
// btn.addEventListener('mouseover', test);
// function test(e){
    // window.alert('clicked');
    // console.log(e.clientY);
    // document.querySelector('#output').innerHTML = e.offsetY;
// }

// Regular Expression
// Syntax = //;
// let a = / /i;
// console.log(a);

// let re = /worlds/i;
// let str = "hello world hello again world";
// console.log(re.exec(str));
// exec() return result in an array or Null;
// console.log(re.exec(str));
//test() return true/false;
// console.log(re.test(str));
//match() return array or null;
// console.log(str.match(re));
//search() return index of the first match or -1;
// console.log(str.search(re));
// replace() return new string
// console.log(str.replace(re));

// let re = /[A-z][A-z][A-z]45/;
// let str = "Ass45";
// let re = /e[0-9]{2,}lo/;
// let str = "He12lo";
// let re = /^([0-9]*){3}/;
// let re = /^([0-9]+){3}/;
// re = /^01[0-9]{9}$/;
// re = /^\+8801[3-9]{1}[0-9]{8}$/;
// str = "+8801317682322";
// re = /\b/; 
// str = "$%#%hekm";
// re = /0(?=1)/;
// str = "aiuss sdhfd 017"
// re = /^[0-9]{4}$/; //postal code validation
// str = "1200";
// re = /^(\+)?(88)?01[0-9]{9}$/;
// re = /^(\+)?(88)?01[3-9][0-9]{8}$/;
// str = "+8801367033550"
re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
str = "ss@dd.com";
reTest(re,str);
function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} match ${re.source}`);
        console.log(re.exec(str));
    }
    else{
        console.log(`${str} dosen't match ${re.source}`);
    }
}