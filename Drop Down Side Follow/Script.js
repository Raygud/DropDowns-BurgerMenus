let Dropped = 0
let Scroller = window.pageYOffset
var navbar = document.getElementById("SideDropIcon");
var sticky = navbar.offsetTop;

function DropDownSide(){
   
    switch(Dropped) {
        case 0:
            document.getElementById("SideMenu").style.width = "100%"
            document.getElementById("SideDropIcon").style.transform = "rotate(-90deg)";
            console.log("Opened")
            Dropped = 1;
          break;
        case 1:
            document.getElementById("SideMenu").style.width = "0%"
            document.getElementById("SideDropIcon").style.transform = "rotate(90deg)";
            console.log("Closed")
            Dropped = 0;
          break;
          case 2:
                window.scrollTo(0, 0);
            console.log("Scrolled")
          break;
        default:
      }
    }


function DropDownSideClose(){

            document.getElementById("SideMenu").style.width = "0%"
            document.getElementById("SideDropIcon").style.transform = "rotate(90deg)";
            console.log("Closed")
            Dropped = 0;
      

}

window.onscroll = function() {myFunction()};


function myFunction() {
  if (window.pageYOffset >= sticky) {
            document.getElementById("SideDropIcon").style.transform = "rotate(180deg)";
            document.getElementById("SideMenu").style.width = "0%"
            Dropped = 2
            console.log(Dropped)
  
} else {
    document.getElementById("SideDropIcon").style.transform = "rotate(90deg)";
    Dropped = 0
    console.log(Dropped)
}
}
