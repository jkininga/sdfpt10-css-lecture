// 1. querySelector - select the first h1 and change its text and color

document.querySelector('h1').style.color = 'green';

document.querySelector('h1').innerText = 'We are breakout 6';


// 2. querySelectorAll - select all the li and give the text color red
let n = document.querySelectorAll('li') 

//console.log(listItems.length)

// for (i = 0; i < n.length; i++) {

//     n[i].style.color = "magenta"

// }

document.querySelectorAll("li").forEach(li => {
    li.style.color = "red";
});

// 3. getElementsByTagName - select the th and increase their font size

let m = document.getElementsByTagName('th');

for (i = 0; i < m.length; i++) {

     m[i].style.fontSize = "20px"
    
     }


// 4. getElementsByClassName - select the element with the class of image-container/ change the backgroundColor

 document.getElementsByClassName('image-container')[0].style.backgroundColor = 'yellow';


// 5. getElementById - select the course outcomes and change the BG color


document.getElementById('outcomes-section').style.backgroundColor = 'yellow';



