//1 HTML modification(Changing text to uppercase)
document.querySelector("h1").innerHTML = "<strong>DROWY CALCULATOR</strong>";

//2 HTML modification(Changing text by removing ":")
document.getElementById("edu").innerHTML = "Education level";

//1 CSS modification(Changing h1 color)
document.querySelector("h1").style.color = "rgb(241, 24, 61)";

//2 CSS modification(Changing button color)
document.getElementById("submit").style.background='rgb(241, 24, 61)';
document.getElementById("submit").style.border='rgb(252, 27, 94)';

//1 Event manipulation(Showing action of pressing in console)
var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function(){console.log("The button pressed!")});
//Give intial value for starting bid 100$
var sum = 100;

//three lengths of different input types
var dropdown_items = document.querySelectorAll("option");
var checkbox_items = document.querySelectorAll("input");
var ratio_items = document.querySelectorAll("input");

function calculation1(){
    for(var i = 0; i < dropdown_items.length; i++){
        if(a[i].textContent == 'Undergraduate degree'){
            sum = sum * 1.5;
        }else if(a[i].textContent == 'College degree'){
            sum = sum * 1.2;
        }else if(a[i].textContent == 'High school degree'){
            sum = sum * 1.05;
        }else if(a[i].textContent == 'Middle school degree'){
            sum = sum * 0.9;
        }

        if(a[i].textContent == 'More than 100,000$'){
            sum = sum * 2;
        }else if(a[i].textContent == 'Between 50,000$ and 100,000$'){
            sum = sum * 1.5;
        }else if(a[i].textContent == 'Less than 50,000$'){
            sum = sum * 1.2;
        }

        if(a[i].textContent == 'Brahmin'){
            sum += 100;
        }else if(a[i].textContent == 'Kshatriya'){
            sum += 50;
        }else if(a[i].textContent == 'Vaishya'){
            sum += 20;
        }else if(a[i].textContent == 'Shudra'){
            sum += 10;
        }else if(a[i].textContent == 'Varna - untouchable'){
            sum -= 50;
        }
    }
}

function calculation2(){
    for(var i = 0; i < checkbox_items.length; i++){
        if(a[i].textContent == "Playing on a musical instrument"){
            sum += 10;
        }else if(a[i].textContent == "Good cook"){
            sum += 20;
        }else if(a[i].textContent == "Easygoing character"){
            sum += 15;
        }else if(a[i].textContent == "Sings well"){
            sum += 10;
        }

        if(a[i].textContent == "Gossips about his/her parent's attitude"){
            sum = sum * 0.85;
        }else if(a[i].textContent == "Gossips about his/her character"){
            sum = sum * 0.9;
        }else if(a[i].textContent == "General gossips around his/her person"){
            sum - 20;
        }
    }
}

function calculation3(){
    for(var i = 0; i < ratio_items.length; i++){
        if(a[i].textContent == 'Between 18-23'){
            sum = sum * 1.5;
        }else if(a[i].textContent == 'Between 24-27'){
            sum = sum * 1.2;
        }else if(a[i].textContent == '28+'){
            sum = sum * 0.95;
        }
    }
}

function totalPrice(){
    console.log(sum);
}



