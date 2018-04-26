var question0 = {
    quest: "Câu hỏi 0",
    answer1: "Đáp án 01",
    answer2: "Đáp án 02",
    answer3: "Đáp án 03",
    answer4: "Đáp án 04",
    answer: "Đáp án 01"
}
var question1 = {
    quest: "Câu hỏi 1",
    answer1: "Đáp án 11",
    answer2: "Đáp án 12",
    answer3: "Đáp án 13",
    answer4: "Đáp án 14",
    answer: "Đáp án 11"
}
var question2 = {
    quest: "Câu hỏi 2",
    answer1: "Đáp án 21",
    answer2: "Đáp án 22",
    answer3: "Đáp án 23",
    answer4: "Đáp án 24",
    answer: "Đáp án 22"
}
var question3 = {
    quest: "Câu hỏi 3",
    answer1: "Đáp án 31",
    answer2: "Đáp án 32",
    answer3: "Đáp án 33",
    answer4: "Đáp án 34",
    answer: "Đáp án 33"
}
var question4 = {
    quest: "Câu hỏi 4",
    answer1: "Đáp án 41",
    answer2: "Đáp án 42",
    answer3: "Đáp án 43",
    answer4: "Đáp án 44",
    answer: "Đáp án 44"
}
var question5 = {
    quest: "Câu hỏi 5",
    answer1: "Đáp án 51",
    answer2: "Đáp án 52",
    answer3: "Đáp án 53",
    answer4: "Đáp án 54",
    answer: "Đáp án 53"
}
function getid(bt) {
    return document.getElementById(bt)
}
function getcs(bt) {
    return document.getElementsByClassName(bt)
}

var question = [question0, question1, question2, question3, question4, question5];
var button1 = document.getElementById("bt1");
var button2 = document.getElementById("bt2");
var button3 = document.getElementById("bt3");
var button4 = document.getElementById("bt4");
var count = 0;
var checkbt1 = 0;
var checkbt2 = 0;
var checkbt3 = 0;
var checkbt4 = 0;
var score = 0;

function runquest() {
    count++;
    quest0();
}
function quest0() {
    if (count == 1) {
        quest1()
    }
    else if (count == 2) {
        quest2()
    }
    else if (count == 3) {
        quest3()
    }
    else if (count == 4) {
        quest4()
    }
    else if (count == 5) {
        quest5()
    }
}

function quest1() {
    getid("question").innerText = question1.quest;
    getid("bt1").innerText = question1.answer1;
    getid("bt2").innerText = question1.answer2;
    getid("bt3").innerText = question1.answer3;
    getid("bt4").innerText = question1.answer4;

}
function quest2() {
    getid("question").innerText = question2.quest;
    getid("bt1").innerText = question2.answer1;
    getid("bt2").innerText = question2.answer2;
    getid("bt3").innerText = question2.answer3;
    getid("bt4").innerText = question2.answer4;
}
function quest3() {
    getid("question").innerText = question3.quest;
    getid("bt1").innerText = question3.answer1;
    getid("bt2").innerText = question3.answer2;
    getid("bt3").innerText = question3.answer3;
    getid("bt4").innerText = question3.answer4;
}
function quest4() {
    getid("question").innerText = question4.quest;
    getid("bt1").innerText = question4.answer1;
    getid("bt2").innerText = question4.answer2;
    getid("bt3").innerText = question4.answer3;
    getid("bt4").innerText = question4.answer4;
}
function quest5() {
    getid("question").innerText = question5.quest;
    getid("bt1").innerText = question5.answer1;
    getid("bt2").innerText = question5.answer2;
    getid("bt3").innerText = question5.answer3;
    getid("bt4").innerText = question5.answer4;
}



// function quest1() {
//     getid("question").value = question1.quest;
//     getid("bt1").value = question1.answer1;
//     getid("bt2").value = question1.answer2;
//     getid("bt3").value = question1.answer3;
//     getid("bt4").value = question1.answer4;
// }
// function quest2() {
//     getid("question").value = question2.quest;
//     getid("bt1").value = question2.answer1;
//     getid("bt2").value = question2.answer2;
//     getid("bt3").value = question2.answer3;
//     getid("bt4").value = question2.answer4;
// }
// function quest3() {
//     getid("question").value = question3.quest;
//     getid("bt1").value = question3.answer1;
//     getid("bt2").value = question3.answer2;
//     getid("bt3").value = question3.answer3;
//     getid("bt4").value = question3.answer4;
// }
// function quest4() {
//     getid("question").value = question4.quest;
//     getid("bt1").value = question4.answer1;
//     getid("bt2").value = question4.answer2;
//     getid("bt3").value = question4.answer3;
//     getid("bt4").value = question4.answer4;
// }
// function quest5() {
//     getid("question").value = question5.quest;
//     getid("bt1").value = question5.answer1;
//     getid("bt2").value = question5.answer2;
//     getid("bt3").value = question5.answer3;
//     getid("bt4").value = question5.answer4;
// }

getid("bt1").addEventListener("click", check1);
getid("bt2").addEventListener("click", check2);
getid("bt3").addEventListener("click", check3);
getid("bt4").addEventListener("click", check4);

function loop(){
    
}

function check1() {
    if (getid("bt1").innerText == question[0].answer){
        score++
    }
        return checkbt1++
}
function check2() {
    if (getid("bt2").innerText == question[1].answer){
        score++
    }
    return checkbt2++
}
function check3() {
    if (getid("bt3").innerText == question[2].answer){
        score++
    }
    return checkbt3++
}
function check4() {
    if (getid("bt4").innerText == question[3].answer){
        score++
    }
    return checkbt4++
}
function score() {
    if (getid("question").value == "q0" && checkbt1 == 1) {
        return score++
    }
}