let menubtn=document.getElementById("menu-btn1");

function showmenu(){
    alert("All menu is Selected")

}
function display(){
   menubtn.innerHTML="All Menu selected"
}

menubtn.addEventListener("click",showmenu)
menubtn.addEventListener("click",display)


