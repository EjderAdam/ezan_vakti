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


async function renderData() {
    let days = await getData2(9716);
    let html = '';
    let tarih = '';
    days.forEach(day => {
        let otherDate = new Date(day.MiladiTarihUzunIso8601);
        if (isDateToday(otherDate)) {
            tarih = 'Bugun'
            satirClass ='<tr class="bugun">'
        } else {
            satirClass ='<tr class="tr">'
            tarih = day.MiladiTarihKisaIso8601
        }

        let htmlSegment = `
            ${satirClass}
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
    let container = document.querySelector('.aylikTablo');
    container.innerHTML = htmlTemplateStart+html+htmlTemplateEnd;
}

renderData();