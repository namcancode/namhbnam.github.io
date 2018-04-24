var x = ""
function getid(bt) {
    return document.getElementById(bt)
}
function transform(input) {
    x += input.value;
    getid("input").value = x
}
function result(input) {
    if (getid("input").value != "") {
        x = eval(getid("input").value)
        return getid("input").value = x
    }
    else getid("input").value = ""

}
function square() {
    if (getid("input").value != "") {
        x = getid("input").value * getid("input").value
    }
    else reset()
    return getid("input").value = x
}
function factorial() {
    if (getid("input").value != "") {
        var rs = 1
        x = getid("input").value
        if (x > 0) {
            for (var i = 1; i <= x; i++) {
                rs = rs * i
            }
        }
        return getid("input").value = rs
    }
    else getid("input").value = ""
}

function squareroot() {
    if (getid("input").value != "" && getid("input").value >=0) {
    x = Math.sqrt(getid("input").value)
    }
    else reset()
    return getid("input").value = x;
}



function reset() {
    x = ""
    return getid("input").value = x;
}

function deleted(){
    x = getid("input").value;
    var x = x.slice(0,getid("input").value.length-1);
    return getid("input").value=x
}