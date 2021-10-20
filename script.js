function add(id){
    var element = document.querySelector(id);
    var count= parseInt(element.innerHTML);
    element.innerHTML=count+1;
}

function subtract(id){
    var element = document.querySelector(id);
    var count= parseInt(element.innerHTML);
    element.innerHTML=count-1;

}

function clearConnection(id){
    var element = document.querySelector(id);
    element.remove();
}

function editProfile(){
    var element = document.querySelector("h3");
    element.innerText = "New Title";
}