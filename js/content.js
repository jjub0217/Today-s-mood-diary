import {
    loadedLocalStorage
} from './export.js';


const $contentTime = document.querySelector('.contents-time_feeling');



function callDatas() {
    const datas = loadedLocalStorage();

    let titleHtml = '';

    datas.forEach(data => {

        titleHtml += `
        <span class="day contents-day">${data.dayString}</span>
        <span class="month contents-Month">${data.month < 10 ? `0${data.month}` : data.month}</span>
        <span class="date contents-date">${data.date}</span>
        <span class="year contents-year">${data.year}</span>
        <img src="./images/feeling/good-regular.png" alt="feeling" class="icon contents-icon" />`
    })

    $contentTime.innerHTML = titleHtml;
}
callDatas();