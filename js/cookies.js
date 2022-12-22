let cookieAlert = localStorage.getItem('cookies');

// localStorage.setItem('cookies', 'hidden');

function showCookieAlert() {
    cookies.style.display = "flex";
}

if (!cookieAlert) {
    showCookieAlert()
}

window.onstorage = event => { // також можна використовувати window.addEventListener('storage', event => {
    if (event.key != 'now') return;
    alert(event.key + ':' + event.newValue + " в " + event.url);
};

localStorage.setItem('now', Date.now());
