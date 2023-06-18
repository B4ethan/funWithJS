let s1;
let s2;
let s3;


document.getElementById("resultBtn").onclick = function(){
    s1 = document.getElementById("first").value;
    s2 = document.getElementById("second").value;
    s3 = document.getElementById("third").value; 

    document.getElementById("resultText").innerHTML = s1 + " " + s2 + " " +s3
}