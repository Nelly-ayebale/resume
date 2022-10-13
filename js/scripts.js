const colorSwitch = document.getElementById('input-color-switch');
colorSwitch.addEventListener('click', checkMode);
const theme = localStorage.getItem('theme');

if(theme=="dark-mode"){
    darkModeOn();
}else{
    darkModeOff();
}

function checkMode(){
    console.log("checking...")

    if(colorSwitch.checked){
        console.log('dark on');
        darkModeOn();
    }else{
        console.log('dark-off');
        darkModeOff();
    }

}
 
function darkModeOn(){
    document.body.classList.add("dark-mode");
    colorSwitch.checked = true;
    localStorage.setItem('theme',"dark-mode");
}

function darkModeOff(){
    document.body.classList.remove("dark-mode");
    colorSwitch.checked=false;
    localStorage.setItem('theme',"light-mode");
    
}

const email = document.querySelector('p#email');
const popup = document.querySelector('.popup');
const copyBtn = document.getElementById('copy')

copyBtn.addEventListener('click', ()=>{
   popup.classList.add('active');
   copyToClipboard();
});

popup.addEventListener('animationend', ()=>{
    popup.classList.remove('active');
});

function copyToClipboard(){
const textarea = document.createElement("textarea");
  textarea.setAttribute("readonly", "");
  textarea.value = email.innerHTML;
  textarea.style.position = "absolute";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

};

