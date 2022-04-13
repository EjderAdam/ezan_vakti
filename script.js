async function getData2(locationCode) {
    let url = "https://ezanvakti.herokuapp.com/vakitler/" + locationCode
    let url2 = "https://www.javascripttutorial.net/sample/api/fetch/users.json"
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
        let htmlSegment = `<div class="day">
        <h2>${day.Aksam}</h2>
        <h2>${day.AyinSekliURL}</h2>
        <h2>${day.Gunes}</h2>
        <h2>${day.GunesBatis}</h2>
        <h2>${day.GunesDogus}</h2>
        <h2>${day.HicriTarihKisa}</h2>
        <h2>${day.HicriTarihUzun}</h2>
        <h2>${day.Ikindi}</h2>
        <h2>${day.Imsak}</h2>
        <h2>${day.KibleSaati}</h2>
        <h2>${day.Ogle}</h2>
        <h2>${day.MiladiTarihKisaIso8601}</h2>
        <h2>${day.Yatsi}</h2>
        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderData();