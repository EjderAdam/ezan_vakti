const todayDate = new Date();
console.log(todayDate)


function isDateToday(date) {
    const otherDate = new Date(date);
    console.log(otherDate)

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

    let url1 = "https://ezanvakti.herokuapp.com/vakitler/" + locationCode
    let url = "apiData.json"
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderData() {
    let days = await getData2(9716);
    let html = '';
    let tarih = '';
    days.forEach(day => {
        let otherDate = new Date(day.MiladiTarihUzunIso8601);
        if (isDateToday(otherDate)) {
            tarih = 'Bugun'
        } else {
            tarih = day.MiladiTarihKisaIso8601
        }

        let htmlSegment = `
            <tr>
                <td>${tarih}</td>
                <td>${day.Imsak}</td>
                <td>${day.GunesDogus}</td>
                <td>${day.Ogle}</td>
                <td>${day.Ikindi}</td>
                <td>${day.Aksam}</td>
                <td>${day.Yatsi}</td>
            </tr>
            `;

        html += htmlSegment;
    });
    htmlTemplateStart = `
    <table>
        <tr>
        <td></td>
        <td>İmsak</td>
        <td>Güneş</td>
        <td>Öğle</td>
        <td>İkindi</td>
        <td>Akşam</td>
        <td>Yatsı</td>
        </tr>
    `
    htmlTemplateEnd = `</table>`
    let container = document.querySelector('.container');
    container.innerHTML = htmlTemplateStart + html + htmlTemplateEnd;
}

renderData();