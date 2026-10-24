let fname="";
function greet() {
    let greetParagraph = document.getElementById("greet");
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname;
}
function changeBG(color) {
    document.body.style.background = color;
}
function truthandlie1() {
    let truthandlieAnswer = document.getElementById("truthandlie-answer");
    //getting values from the form. ".checked" indicates that it is set if the choice is chosen.
    let truth1Selected = document.getElementById("truth1").checked;
    let lieSelected = document.getElementById("lie").checked;
    let truth2Selected = document.getElementById("truth2").checked;
    //below gives result based on what is selected
    if (truth1Selected) {
        truthandlieAnswer.innerHTML = fname + ", that is incorrect. My mother is Indian (parents came from India) and my father is German (ancestors came to North Dakota in 1800s), though I do not speak Hindi or German fluently (I know some random phrases though. 'Hallo. Namaste. Ein moment bitte. Ap kahan pe rehte ho?')."
        changeBG('red');
    }
    else if (lieSelected) {
        truthandlieAnswer.innerHTML = fname + ", you are correct."
        changeBG('green');
    }
    else if (truth2Selected) {
        truthandlieAnswer.innerHTML = fname + ", that is incorrect. I have played it since 4th grade."
        changeBG('red');
    }
}
function truthandlie2() {
    let truthandlie2Answer = document.getElementById("truthandlie2-answer")
    let truth1_2Selected = document.getElementById("truth1_2").checked;
    let lie2Selected = document.getElementById("lie2").checked;
    let truth2_2Selected = document.getElementById("truth2_2").checked;
    if (truth1_2Selected && truth2_2Selected) {
        truthandlie2Answer.innerHTML = fname + ", you are correct";
        changeBG('green');
    }
    else {
        truthandlie2Answer.innerHTML = fname + ", you are wrong. You are a human who must learn geography extensively."
        changeBG('red');
    }
}