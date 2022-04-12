function setCookie(cname, cvalue, exdays, directory) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"+directory+"/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

function getData(locationCode) {
    let url = "https://ezanvakti.herokuapp.com/vakitler/" + locationCode
    let testUrl = "https://thunderous-nasturtium-cbcfe9.netlify.app/test.json"
    fetch(testUrl)
        .then(response => {
            return response.json();
        })
        .then(jsondata => console.log(jsondata));

}

function reload(locationCode) {
    let list = getData(locationCode)
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]) ;
    }

}