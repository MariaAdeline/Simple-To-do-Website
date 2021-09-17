var Li=document.getElementsByClassName("Lists")[0];
const input=document.getElementById("input");
const delicon=document.getElementById("trash");
input.addEventListener("keydown",function(event){
    if(event.key ==="Enter")
      addItem();
})
function addItem(){
    var list1=document.createElement("div");
    var list2=document.createElement("div");
    var doneicon=document.createElement("i");
    var delicon=document.createElement("i");
    var editicon=document.createElement("i");
    list1.className="list";
    list1.innerHTML='<div>'+input.value+'</div>';
    doneicon.className="fas fa-check";
    if(doneicon.style.color="lightgray")
      doneicon.addEventListener("click",function(){
         doneicon.style.color= "limegreen";
    if(doneicon.style.color="limegreen")
      doneicon.addEventListener("dblclick",function(){
         doneicon.style.color= "lightgray";
          })
    })
    list2.appendChild(doneicon);
    delicon.className="fas fa-times";
    delicon.style.color="lightgray";
    delicon.addEventListener("mouseover",function(){
        delicon.style.color="red";
    })
    delicon.addEventListener("mouseout",function(){
        delicon.style.color="lightgray";
    })
    delicon.addEventListener("click",function(){
        list1.remove();
    })
    list2.appendChild(delicon);
    list1.appendChild(list2);
    Li.appendChild(list1);
    input.value='';
}
