async function getData2(locationCode) {
    let url = "9716.json"
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
    days.forEach(day => {
        let htmlSegment = `
            <tr>
                <td>${day.MiladiTarihKisaIso8601}</td>
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
    container.innerHTML = htmlTemplateStart+html+htmlTemplateEnd;
}

renderData();