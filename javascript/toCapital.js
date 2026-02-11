const input=document.getElementById("firstname");
input.addEventListener("keydown",function(e){
    if (e.key=="Tab"){
        this.value=this.value.toUpperCase();
    }
});