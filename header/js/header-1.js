function clickNavbarTop() {
    var TopNavbar = document.querySelector(".top-navbar");
   if(TopNavbar.style.display === 'none'  ) {
       TopNavbar.style.display = 'block';;
   }else {
    TopNavbar.style.display = 'none';;
   }
    console.log(TopNavbar);
}

