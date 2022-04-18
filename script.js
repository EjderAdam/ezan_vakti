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


async function getData2(locationCode) {

    let url = "apiData.json" // Test json url i
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


