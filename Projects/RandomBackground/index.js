const randomNumber = ()=>{
    return Math.floor(Math.random() * 256 );
}
const text = document.getElementById('text');
let hexCode = '#';
const hexFun = ()=>{
    const hex = [0,1,2,3,4,5,6,7,8,'A','B','C','D','E','F'];
    for(let i = 0; i < 6; i++){
        hexCode += hex[Math.floor(Math.random() * hex.length)];
    }
    text.textContent = hexCode;
    text.style.color = 'white';
    const body = document.querySelector('body').style.backgroundColor = hexCode;
    hexCode = '#';

}

const Change = ()=>{
 const body = document.querySelector('body');
 let color = "rgb(" + randomNumber() + "  ," + randomNumber() + "," + randomNumber() + ")";
 text.textContent = color;
 text.style.color = 'white';
 body.style.backgroundColor = color;
}