const display=document.getElementById("display");

function insertTo(input){
    display.value +=input;
}

function clearAll(){
    display.value=""
}

function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="Error click C"
    }
}

function deletes(){
    display.value = display.value.slice(0, -1);
}