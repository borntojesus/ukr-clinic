const valueCookie = getCookie("langPopUp")

let timeleft = 10;
let redirectTime = "10000";
let redirectURL = "http://localhost:4000/ua";


function funcRu() {
    document.cookie = "langPopUp=hide";
    clearTimeout(timer);
    hidePopup();
}

function funcUa() {
    document.cookie = "langPopUp=hide";
    clearTimeout(timer);
    location.href = redirectURL;
}


/////////////////////////
// Get the contentPopup
let contentPopup = document.getElementById('contentPopup');

// Get the <span> element that closes the contentPopup
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the contentPopup

function hidePopup() {
    contentPopup.style.display = "none";
    document.cookie = "langPopUp=hide";
}
function showPopup() {
    contentPopup.style.display = "block";
}

// When the user clicks on <span> (x), close the contentPopup
span.onclick = function() {
    hidePopup()
    clearTimeout(timer);
}

// When the user clicks anywhere outside of the contentPopup, close it
window.onclick = function(event) {
    if (event.target == contentPopup) {
        hidePopup()
        clearTimeout(timer);
    }
}

//////////
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

if (window.location.href === "http://localhost:4000/" && !valueCookie) {
    let timeleft = 10;
    let redirectTime = "10000";
    let redirectURL = "http://localhost:4000/ua";
    var downloadTimer = setInterval(function(){
        console.log("test")
        timeleft--;
        document.getElementById("countdowntimer").textContent = timeleft;
        if(timeleft <= 0) {
            clearInterval(downloadTimer);
        }
    },1000);
    var timer = setTimeout(function(){
        location.href = redirectURL;
        document.cookie = "langPopUp=hide";
    },redirectTime);
    showPopup();
    downloadTimer();
    console.log("doneeee")

}