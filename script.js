//Declare button first because we need to use "addEventListener"
const button = document.getElementById("submit");

//HTMLCollection (like an array of elements, but not an actual array) 
const education = document.getElementById("education");
const networth = document.getElementById("networth");
const caste = document.getElementById("caste");
const skills = document.getElementsByName("checkbox1");
const ages = document.getElementsByName("radiobtn");
const reputations = document.getElementsByName("checkbox2");
const priceTotal = document.getElementById("totalPrice");
let love_letter = document.getElementById("textarea").value;
let name = document.getElementById("name").value;

//Adding Event Listener to our button
button.addEventListener('click', () => {
    
    
    //turns our starting bid string into number
    let price = Number(startingBid.value);

    const bdEducSel = education.value;
    const famNet = networth.value;
    const briCas = caste.value;

    //create if statement to don't miss empty blanks 
    if(bdEducSel=="blank" || famNet=="blank" || briCas=="blank"){
        alert("Empty fiels!!!")
    }
    else{
        ///first dropdown list
        if(bdEducSel == "1.5"){
            price*=1.5;
        }
        else if(bdEducSel == "1.2"){
            price*=1.2;
        }
        else if(bdEducSel == "1.05"){
            price*=1.05;
        }
        else if(bdEducSel == "0.9"){
            price*=0.9;
        }

        ///second dropdown list
        if(famNet == "2"){
            price*=2;
        }
        else if(famNet == "1.5"){
            price*=1.5;
        }
        else if(famNet == "1.2"){
            price*=1.2;
        }

        ///third dropdown list
        if(briCas == "+100$"){
            price+=100;
        }
        else if(briCas == "+50$"){
            price+=50;
        }
        else if(briCas == "+20$"){
            price+=20;
        }
        else if(briCas == "+10$"){
            price+=15;
        }
        else if(briCas == "-50$"){
            price-=50;
        }

        ///first checkbox
        if(skills[0].checked){
            price+=10;
        }
        if(skills[1].checked){
            price+=20;
        }
        if(skills[2].checked){
            price+=15;
        }
        if(skills[3].checked){
            price+=10;
        }

        ///first ratio
        if(ages[0].checked){
            price*=1.5;
        }
        else if(ages[1].checked){
            price*=1.2;
        }
        else if(ages[2].checked){
            price*=0.95;
        }

        ///second checkbox 
        if(reputations[0].checked){
            price*=0.85;
        }
        if(reputations[1].checked){
            price*=0.9;
        }
        if(reputations[2].checked){
            price-=20;
        }

        //display our calculated sum 
        priceTotal.innerHTML = "Final price" + price.toFixed(3) + "$";
    }



    // let person = { 
    //     bride_name: name, 
    //     bride_price: price, 
    //     letter: love_letter 
    // } 
    
    // document.getElementById("result").innerHTML = "The price for " + name + "'s bride(or groom) is " + person.bride_price + "$. Your love letter is" + ":" + person.letter; 
    
})










