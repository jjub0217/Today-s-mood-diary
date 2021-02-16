import {loadedLocalStorage, saveData, addDiary } from './export.js';
// import { addDiary } from './write.js';

const $content = document.querySelector('.content')
const $contentTime = document.querySelector('.contents-time_feeling');
const $contentTitle = document.querySelector('.contentTitle'); 
const $dairy = document.querySelector('.dairy-inner');
const $tags = document.querySelector('.inputTag');
const $modify = document.querySelector('.modify');
const $delete = document.querySelector('.delete');

let datas = loadedLocalStorage();


// 작성한 일기 랜더 하는 함수
function callDatas() {

    let timeHtml = '';
    let titleHtml  = '';
    let contentHtml = '';
    let tagHtml = '';

    datas.forEach(data => {

        $content.setAttribute('id', data.id);

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
    $dairy.innerHTML = contentHtml;

}
callDatas();



// 작성한 일기 삭제하는 함수
const deleted = (e) => {
    console.log(e); // MouseEvent
    console.log(e.target); // button

    // const dairyId = e.target.parentNode; // content-btn
    const dairyId = e.target.parentNode.previousElementSibling.id; // 2
    console.log(dairyId);
    console.log(typeof dairyId); // string
    console.log(typeof +dairyId); // number

    datas = datas.filter(data => data.id !== +dairyId);
    console.log(datas);
    
    
    saveData();
    location.href = './detail.html';

}



// const modified = () =>{
//     location.href = './write.html';
//     addDiary();

// }


// 작성한 일기 삭제하는 이벤트
$delete.addEventListener('click', deleted);

// 작성한 일기 수정하는 이벤튼
$modify.addEventListener('click', modified)