
//Arrays 
//let Planets= ['Moon', 'Earth']


//DOM 


//examine the docoument object 
console.dir(document); 
console.log(document.domain)
console.log(document.URL)
console.log(document.title)
console.log(document.doctype)
console.log(document.body)
console.log(document.all)
console.log(document.all[10])
//document.all[10].textContent = 'Hello'
console.log(document.forms[0])
console.log(document.links)
console.log(document.images)

// get element by ID 

console.log(document.getElementById('header'));
let header = document.getElementById('header'); 
console.log(header); 
header.textContent= 'Hello';
header.innerText = 'Goodbye';
header.innerHTML= '<h3> Hello <h3>'; 

header.style.borderBottom = 'solid 3px red'

// get elements by Class name 

let items = document.getElementsByClassName('items');
console.log(items);
items[1].style.backgroundColor =  'yellow';
items[2].textContent = 'Hello from here';
items[0].style.fontWeight = 'bold' ;

for(let  i=0; i < items.length; i++){
    items[i].style.backgroundColor = '#358946';
}

let li = document.getElementsByTagName('li');
console.log(li);
li[1].style.backgroundColor = 'red';
li[3].textContent= 'hello from here too' ;


for( let i = 0; i < li.length; i++){
    li[i].style.listStyle = 'none';
}


//Query Selector 

let headerSecond = document.querySelector('#header')
console.log(header);
headerSecond.style.borderBottom = 'solid 10px blue';

//let lastItem =  document.querySelector('.items: last-child');
//lastItem.style.color =  'blue';


//QuerySelectiorAll 

let title= document.querySelectorAll('.body');
console.log(title);