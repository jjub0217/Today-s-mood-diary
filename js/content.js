import {
    loadedLocalStorage
} from './export.js';


const $contentTime = document.querySelector('.contents-time_feeling');
const $contentTitle = document.querySelector('.contentTitle'); 
const $content = document.querySelector('.dairy-inner');
const $tags = document.querySelector('.inputTag');



function callDatas() {
    const datas = loadedLocalStorage();
    console.log(datas);

    let timeHtml = '';
    let titleHtml  = '';
    let contentHtml = '';
    let tagHtml = '';

    datas.forEach(data => {

        timeHtml += `
        <span class="day contents-day">${data.dayString} </span>
        <span class="month contents-Month">${data.month < 10 ? `&nbsp;0${data.month}` : data.month} / </span>
        <span class="date contents-date">&nbsp;${data.date}&nbsp;</span>
        <span class="year contents-year">&nbsp;${data.year}</span>
        <img src="./images/feeling/good-regular.png" alt="feeling" class="icon contents-icon" />`

        titleHtml += `${data.title}`;

        contentHtml += `${data.content}`;

        console.log(data.tags);

        data.tags.forEach(tag => {
            $tags.value = `    ${tag}`
          })

    })

    $contentTime.innerHTML = timeHtml;
    $contentTitle.value = titleHtml;
    $content.innerHTML = contentHtml;

}
callDatas();