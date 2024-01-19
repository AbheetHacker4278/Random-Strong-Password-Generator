const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()?:;<=>?@[]{";

function getRandomItem(pass) {
    const randomIndex = Math.floor(Math.random() * pass.length);
    const item = pass[randomIndex];
    return item;
}
const symbodls = letters + numbers + symbols;

let btn = document.querySelector('button');
let showpass = document.querySelector('.password');
let enterpass = document.querySelector('.write');



btn.addEventListener('click', ()=>{
    let clutter = "";
    for(let i = 0; i < parseInt(enterpass.value) ; i++){
        clutter += getRandomItem(symbodls);
    }
    showpass.innerHTML = clutter;
})


showpass.addEventListener('dblclick', () => {
    const textArea = document.createElement('textarea');
    textArea.value = showpass.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});










