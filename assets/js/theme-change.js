const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

function changeImage(){
    var image = document.getElementById("myImage");
    if(currentTheme === 'dark'){
        image.scr = "assets/images/full logo inline for white background 1.png";
    }
    else{
        image.scr = "assets/images/full logo inline for dark background 1.png";
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);