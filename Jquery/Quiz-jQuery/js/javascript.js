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
var questions = [question0, question1, question2, question3, question4, question5];
var count = 0;
var point = 0;
function runquest1() {
    if ($("#question").val() == question0.quest) {
        point++
    }
    else if ($("#question").val() == question1.quest) {
        point++
    }
    count++;
    loadquest();
    return $("#result").html("Bạn được: " + point + " điểm")
}

function runquest2() {
    if ($("#question").val() == question2.quest) {
        point++
    }
    count++;
    loadquest();
    return $("#result").html("Bạn được: " + point + " điểm")
}
function runquest3() {
    if (point < 6) {
        if ($("#question").val() == question3.quest) {
            point++

        }
        else if ($("#question").val() == question5.quest) {
            point++
            if (point == 6) {
                $("#box").css("display", "none");
                $("#reward").css("display", "block");
                $("#box1").css("display", "block");
                $("#result").bind("click", restart);
                return $("#result").html("Bạn đã trả lời đúng tất cả");
            }
        }
        count++;
        loadquest();
        return $("#result").html("Bạn được: " + point + " điểm")
    }
    else return (point);
}
function runquest4() {
    if ($("#question").val() == question4.quest) {
        point++
    }
    count++;
    loadquest();
    return $("#result").html("Bạn được: " + point + " điểm")
}
function loadquest() {
    var run = questions[count];
    if ($("#question").val() == question5.quest && point <= 6) {
        $("#box").css("display", "none");
        $("#box2").css("display", "block");
        $("#box1").css("display", "block");
        $("#result").bind("click", restart);
    }
    else {
        $("#question").html(run.quest);
        $("#bt1").html(run.answer1);
        $("#bt2").html(run.answer2);
        $("#bt3").html(run.answer3);
        $("#bt4").html(run.answer4);
        $("#question").val(run.quest);
        $("#count").html("Câu số " + (count + 1) + "/" + questions.length)
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