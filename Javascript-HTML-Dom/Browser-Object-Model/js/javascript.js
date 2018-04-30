var question0 = {
    quest: "[...[...'...']].length",
    answer1: "Khi click chuột",
    answer2: "Khi bắt đầu chương trình chạy",
    answer3: "Khi kết thúc một chương trình",
    answer4: "Khi di chuyển chuột qua",
    answer: "01"
}
var question1 = {
    quest: "var f = function g(){ return 23; }; typeof g()",
    answer1: "Error",
    answer2: "number",
    answer3: "undefined",
    answer4: "function",
    answer: "11"
}
var question2 = {
    quest: "(function(x){ delete x; return x;}) (1);",
    answer1: "null",
    answer2: "1",
    answer3: "undefined",
    answer4: "Error",
    answer: "22"
}
var question3 = {
    quest: "typeof `${{Object}}`.prototype",
    answer1: "function",
    answer2: "object",
    answer3: "undefined",
    answer4: "Error",
    answer: "33"
}
var question4 = {
    quest: "let x, { x: y = 1 } = { x }; y;",
    answer1: "undefined",
    answer2: "{ x: 1 }",
    answer3: "Error",
    answer4: "1",
    answer: "44"
}
var question5 = {
    quest: "typeof (new (class F extends (String, Array) { })).substring",
    answer1: "function",
    answer2: "object",
    answer3: "undefined",
    answer4: "Error",
    answer: "53"
}
function getid(bt) {
    return document.getElementById(bt)
}
function getcl(bt) {
    return document.getElementsByClassName(bt)
}


var count = 0;
var checkbt1 = 0;
var checkbt2 = 0;
var checkbt3 = 0;
var checkbt4 = 0;
var point = 0;
var x = 0;
function runquest1() {

    if (getid("question").value == question0.quest) {
        point++
    }
    else if (getid("question").value == question1.quest) {
        point++
    }
    count++;
    quest0();
    return getid("result").innerText = "Bạn được: " + point + " điểm"

    // score();

}


function runquest2() {

    if (getid("question").value == question2.quest) {
        point++
    }
    count++;
    quest0();
    return getid("result").innerText = "Bạn được: " + point + " điểm"
    // score();
}


function runquest3() {
    if (point < 6) {
        if (getid("question").value == question3.quest) {
            point++
            
        }
        else if (getid("question").value == question5.quest) {
            point++
            if (point == 6) {
                getid("box").style.display = "none";
                getid("reward").style.display = "block";
                getid("box1").style.display = "block"
                getid("result").addEventListener("click", restart)
                 return getid("result").innerText = "Bạn được đã trả lời đúng tất cả"
            }
            
        }
        count++;
        quest0();
         return getid("result").innerText = "Bạn được: " + point + " điểm"
        
    }
    else return (point);
    // score();
}


function runquest4() {
    if (getid("question").value == question4.quest) {
        point++
    }
    count++;
    quest0();
    return getid("result").innerText = "Bạn được: " + point + " điểm"
    // score();
}


function quest0() {
    if (count == 1) {
        quest1();
        getid("count").innerText = "Câu 2/6";

    }
    else if (count == 2) {
        quest2();
        getid("count").innerText = "Câu 3/6";

    }
    else if (count == 3) {
        quest3();
        getid("count").innerText = "Câu 4/6";

    }
    else if (count == 4) {
        quest4();
        getid("count").innerText = "Câu 5/6";
    }
    else if (count == 5) {
        quest5();
        getid("count").innerText = "Câu 6/6";
    }
    else if (getid("question").value == question5.quest && point < 6) {
        getid('box').style.display = "none";
        getid('box2').style.display = "block";
        getid("box1").style.display = "block"
         getid("result").addEventListener("click", restart)
    }
}


function quest1() {
    getid("question").innerText = question1.quest;
    getid("bt1").innerText = question1.answer1;
    getid("bt2").innerText = question1.answer2;
    getid("bt3").innerText = question1.answer3;
    getid("bt4").innerText = question1.answer4;
    getid("question").value = question1.quest;


}
function quest2() {
    getid("question").innerText = question2.quest;
    getid("bt1").innerText = question2.answer1;
    getid("bt2").innerText = question2.answer2;
    getid("bt3").innerText = question2.answer3;
    getid("question").value = question2.quest;
}
function quest3() {
    getid("question").innerText = question3.quest;
    getid("bt1").innerText = question3.answer1;
    getid("bt2").innerText = question3.answer2;
    getid("bt3").innerText = question3.answer3;
    getid("bt4").innerText = question3.answer4;
    getid("question").value = question3.quest;
}
function quest4() {
    getid("question").innerText = question4.quest;
    getid("bt1").innerText = question4.answer1;
    getid("bt2").innerText = question4.answer2;
    getid("bt3").innerText = question4.answer3;
    getid("bt4").innerText = question4.answer4;
    getid("question").value = question4.quest;
}
function quest5() {

    getid("question").innerText = question5.quest;
    getid("bt1").innerText = question5.answer1;
    getid("bt2").innerText = question5.answer2;
    getid("bt3").innerText = question5.answer3;
    getid("bt4").innerText = question5.answer4;
    getid("question").value = question5.quest;
}

function restart() {
    window.location.href = "index.html"
}