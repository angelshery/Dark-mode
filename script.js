// Find the theme button
const themeButton = document.getElementById("theme-toggle");

// Change the theme when the button is clicked
themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains('dark_mode')){
 localStorage.setItem('website_theme','dark_mode');
  }else{
    localStorage.setItem('website_theme','default');
  }
});

function retrieve_theme(){
  var theme = localStorage.getItem('website_theme');
  if(theme != null){
 document.body.classList.remove('default', 'dark_mode'); document.body.classList.add(theme);
  }
}

retrieve_theme();

window.addEventListener("storage",function(){
retrieve_theme();
},false);
