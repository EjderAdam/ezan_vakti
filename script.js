function isDateToday(date) {
    const otherDate = new Date(date);
    const todayDate = new Date();

    if (
        otherDate.getDate() === todayDate.getDate() &&
        otherDate.getMonth() === todayDate.getMonth() &&
        otherDate.getYear() === todayDate.getYear()
    ) {
        return true;
    } else {
        return false;
    }
}
/*https://ezanvakti.herokuapp.com/ulkeler*/
function strToDate(str) {
    console.log("str :"+str)
    console.log("type :"+typeof(str))
    var now = new Date()
    var now1 = now.setHours(str.substring(0, 2))
    var now2 = now.setMinutes(str.substring(3, 5))
    return now2
}
async function getData2(locationCode) {

    let url = "https://ezanvakti.herokuapp.com/vakitler/"+locationCode 
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function sehirApi(step, code) {
    var url = ''
    if (step == 0) {
        url = 'https://ezanvakti.herokuapp.com/ulkeler'
    } else if (step == 1) {
        url = 'https://ezanvakti.herokuapp.com/sehirler/' + code
    } else if (step == 2) {
        url = 'https://ezanvakti.herokuapp.com/ilceler/' + code
    } else {
        return 'şehir seçiminde hata!'
    }

    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

function saveRegion(region,regionText) {
    setCookie('region',region,36500)
    setCookie('regionText',regionText,36500)
    
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
    let nationCode = getCookie("nation");
    console.log("cookie nation:"+nationCode)
    if (nationCode != "") {
        renderData(nationCode);
    } else {
        let alert = document.getElementById("noCookieAlert")
        alert.innerHTML = `<form action="sehirSecim.html">
        <input type="submit" value="Henüz şehir seçmediğiniz için İstanbulun namaz vakitlerini görüntülüyorsunuz değiştirmek için tıklayınız" />
    </form>
    `
        renderData(539);
    }
}




