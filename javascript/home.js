document.getElementById("button-1").onclick = function() {
    location.href = "./pages/about.html";
};

document.getElementById("button-2").onclick = function() {
    alert("Hello world!");
};

document.getElementById("button-3").onclick = function() {
    document.getElementById("content").style.color = "blue";
};
const pages = {
    0: function() {
        document.getElementById("speech").innerText = "Hello what is your name?"
    }
}