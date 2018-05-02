var question0 = {
    quest: "[...[...'...']].length",
    answer1: "Khi click chuột",
    answer2: "Khi bắt đầu chương trình chạy",
    answer3: "Khi kết thúc một chương trình",
    answer4: "Khi di chuyển chuột qua",
}
var question1 = {
    quest: "var f = function g(){ return 23; }; typeof g()",
    answer1: "Error",
    answer2: "number",
    answer3: "undefined",
    answer4: "function",
}
var question2 = {
    quest: "(function(x){ delete x; return x;}) (1);",
    answer1: "null",
    answer2: "1",
    answer3: "undefined",
    answer4: "Error",
}
var question3 = {
    quest: "typeof `${{Object}}`.prototype",
    answer1: "function",
    answer2: "object",
    answer3: "undefined",
    answer4: "Error",
}
var question4 = {
    quest: "let x, { x: y = 1 } = { x }; y;",
    answer1: "undefined",
    answer2: "{ x: 1 }",
    answer3: "Error",
    answer4: "1",
}
var question5 = {
    quest: "typeof (new (class F extends (String, Array) { })).substring",
    answer1: "function",
    answer2: "object",
    answer3: "undefined",
    answer4: "Error",
}
function getid(bt) {
    return document.getElementById(bt)
}
var questions = [question0, question1, question2, question3, question4, question5];
var count = 0;
var point = 0;
function runquest1() {

    if (getid("question").value == question0.quest) {
        point++
    }
    else if (getid("question").value == question1.quest) {
        point++
    }
    count++;
    loadquest();
    return getid("result").innerText = "Bạn được: " + point + " điểm"
}

function runquest2() {

    if (getid("question").value == question2.quest) {
        point++
    }
    count++;
    loadquest();
    return getid("result").innerText = "Bạn được: " + point + " điểm"
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
                getid("box1").style.display = "block";
                getid("result").addEventListener("click", restart)
                return getid("result").innerText = "Bạn đã trả lời đúng tất cả"
            }
        }
        count++;
        loadquest();
        return getid("result").innerText = "Bạn được: " + point + " điểm"
    }
    else return (point);
}
function runquest4() {
    if (getid("question").value == question4.quest) {
        point++
    }
    count++;
    loadquest();
    return getid("result").innerText = "Bạn được: " + point + " điểm"
}
function loadquest() {
    var run = questions[count];
    if (getid("question").value == question5.quest && point <= 6) {
        getid('box').style.display = "none";
        getid('box2').style.display = "block";
        getid("box1").style.display = "block";
        getid("result").addEventListener("click", restart);
    }
    else {
        getid("question").innerText = run.quest;
        getid("bt1").innerText = run.answer1;
        getid("bt2").innerText = run.answer2;
        getid("bt3").innerText = run.answer3;
        getid("bt4").innerText = run.answer4;
        getid("question").value = run.quest;
        getid("count").innerText = "Câu số " + (count + 1) + "/" + questions.length;
    }
}
function restart() {
    window.location.href = "index.html"
}
function changeThemes() {
    $("#box").css("background-color", "#eeff00");
}
function changeBackground() {
    $("html").css("background-color", "#000000");
    $("h1.shadow").css("background-color", "#000000")
}