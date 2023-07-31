function showCircle(){
    document.getElementById("jointhecircle").style.display = 'none';
    document.getElementById("circle").style.display = 'flex';
}

document.getElementById("jointhecircle").onclick = showCircle;

document.getElementById("email-form").onsubmit = function (e) {
    e.preventDefault(); 
    document.getElementById("lead-form").style.display = 'none';
    document.getElementById("thanks").style.display = 'flex';
}