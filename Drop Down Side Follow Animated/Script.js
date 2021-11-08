
function Closed(){


document.querySelector("#DropButton div:nth-child(1)").style.transform = "scalex(0)";
document.querySelector("#DropButton div:nth-child(2)").style.transform = "rotate(-30deg)";
document.querySelector("#DropButton div:nth-child(3)").style.transform = "rotate(30deg)";
document.querySelector("#DropButton div:nth-child(4)").style.transform = "scalex(0)";
console.log(Dropped)
}

function Open(){


  document.querySelector("#DropButton div:nth-child(1)").style.transform = "scalex(1)";
  document.querySelector("#DropButton div:nth-child(2)").style.transform = "rotate(0deg)";
  document.querySelector("#DropButton div:nth-child(3)").style.transform = "rotate(0deg)";
  document.querySelector("#DropButton div:nth-child(2)").style.width = "50%";
  document.querySelector("#DropButton div:nth-child(3)").style.width = "50%";
  document.querySelector("#DropButton div:nth-child(3)").style.right = "0";
  document.querySelector("#DropButton div:nth-child(4)").style.transform = "scalex(1)";
  console.log(Dropped)
  }

  function Scrolled(){


    document.querySelector("#DropButton div:nth-child(1)").style.transform = "scalex(0)";
    document.querySelector("#DropButton div:nth-child(2)").style.width = "57%";
    document.querySelector("#DropButton div:nth-child(2)").style.left = "0";
    document.querySelector("#DropButton div:nth-child(2)").style.transform = "rotate(-30deg)";

    document.querySelector("#DropButton div:nth-child(3)").style.width = "57%";
    document.querySelector("#DropButton div:nth-child(3)").style.right = "0";
    document.querySelector("#DropButton div:nth-child(3)").style.transform = "rotate(30deg)";
    document.querySelector("#DropButton div:nth-child(4)").style.transform = "scalex(0)";
    console.log(Dropped)
    }

function Test(){
  Scrolled()
}

let Dropped = 0
let Scroller = window.pageYOffset
var navbar = document.getElementById("DropButton");
var sticky = navbar.offsetTop;

function DropDownSide(){   

  document.querySelector("#DropButton div:nth-child(2)").style.width = "100%";
  document.querySelector("#DropButton div:nth-child(3)").style.width = "100%";


    switch(Dropped) {
        case 0:
          Dropped = 1;
          Closed()
            console.log("opened")
          break;
        case 1:
          Dropped = 0;
          Open()
          console.log("Closed")

          break;
          case 2:
                window.scrollTo(0, 0);
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
    document.querySelector("#DropButton div:nth-child(1)").style.transform = "scalex(0)";
    document.querySelector("#DropButton div:nth-child(2)").style.width = "57%";
    document.querySelector("#DropButton div:nth-child(2)").style.left = "0";
    document.querySelector("#DropButton div:nth-child(2)").style.transform = "rotate(-30deg)";

    document.querySelector("#DropButton div:nth-child(3)").style.width = "57%";
    document.querySelector("#DropButton div:nth-child(3)").style.right = "0";
    document.querySelector("#DropButton div:nth-child(3)").style.transform = "rotate(30deg)";
    document.querySelector("#DropButton div:nth-child(4)").style.transform = "scalex(0)";
            Dropped = 2
            console.log(Dropped)
  
} else {
  document.querySelector("#DropButton div:nth-child(1)").style.transform = "scalex(1)";
  document.querySelector("#DropButton div:nth-child(2)").style.width = "50%";
  document.querySelector("#DropButton div:nth-child(3)").style.width = "50%";
  document.querySelector("#DropButton div:nth-child(2)").style.transform = "rotate(0deg)";
  document.querySelector("#DropButton div:nth-child(3)").style.transform = "rotate(0deg)";
  document.querySelector("#DropButton div:nth-child(4)").style.transform = "scalex(1)";
    Dropped = 0
    console.log(Dropped)
}
}
