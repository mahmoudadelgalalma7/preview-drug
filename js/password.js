window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

function checkPassword() {
    var password = document.getElementById("pass"),
        passwordPage = document.getElementById("pass-page"), 
        label = document.getElementById("label"),
        main = document.getElementById("main");
        
    if (password.value === "Gdnc321") {
        passwordPage.classList.add("hide");
        main.classList.remove("hide");
    } else {
        label.classList.remove("hide");
    }
    
}