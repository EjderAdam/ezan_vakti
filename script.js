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

function strToDate(str) {
    var now = new Date()
    now1 = now.setHours(str.substring(0, 2))
    now2 = now.setMinutes(str.substring(3, 5))
    return now2
}
async function getData2(locationCode) {

    let url = "https://ezanvakti.herokuapp.com/vakitler/"+locationCode // Test json url i
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


