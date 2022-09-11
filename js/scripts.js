let theme = localStorage.getItem('theme');

if (theme==null) {
    setTheme('light');
}else{
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (let index = 0; index < themeDots.length; index++) {
    themeDots[index].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log('Option clicked:', mode);
        setTheme(mode);
    })
    
}
function setTheme(mode) {
    if (mode=='light') {
        document.getElementById('theme-color').href='./styles/light.css';
    }else if(mode=='dark'){
        document.getElementById('theme-color').href='./styles/dark.css';
    }
    localStorage.setItem('theme',mode);
}
