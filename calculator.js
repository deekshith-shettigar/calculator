function ClearScreen(){
    document.getElementById("result").value="";
}
function display(value){
    document.getElementById("result").value+=value;
}
function calculate(){
    var p=document.getElementById("result").value;
    var q=eval(p);
    document.getElementById("result").value=q;
}
function deleteLast(){
    var p=document.getElementById("result");
    p.value = p.value.slice(0, -1);
}

