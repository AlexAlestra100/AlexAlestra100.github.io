function bigger() {
    var textarea = document.getElementById("textA");
    textarea.style.fontSize = "24pt";
}

function bolder() {
    var textarea = document.getElementById("textA");
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline";
    textarea.style.fontWeight = "bold";
}

function boring() {
    var textarea = document.getElementById("textA");
    textarea.style.fontWeight = "normal";
    textarea.style.color = "black";
    textarea.style.textDecoration = "none";
}

function moo() {
    var textarea = document.getElementById("textA");
    textarea.value = textarea.value.toUpperCase();

    length = textarea.value.length;
    for(var i = 0; i <= length; i++) {
        console.log("Index: " + i + " Value: " + textarea.value[i] + " Length: " + length);
        if(textarea.value[i] === "." || textarea.value[i] === "!" || textarea.value[i] === "?") {
            console.log("Found a punctuation mark!");
            textarea.value = textarea.value.slice(0, i) + "-Moo" + textarea.value.slice(i);
            i += 4;
            length += 4;
        }
    }
}