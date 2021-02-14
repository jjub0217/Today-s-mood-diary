
import {loadedLocalStorage} from './export.js';

const writeTitle = document.querySelector('.writeTitle'); // input 태그
const createBtn = document.querySelector('.create'); // button 태그
const closeBtn = document.querySelector('.close'); // button 태그
const textarea = document.querySelector('textarea'); // 일기내용
const tags = document.querySelector('.write-tag') // <div></div>

let tag = document.querySelector('.write-tag  > input'); // [input]
// let no = 0;




// tag들
const saveTags = [];

// 일기장 제목
let contentTitle = [];

// loadedLocalStorage : 로컬스토리지에 저장된 데이터 불러오는 함수. (데이터가 없으면 빈배열 반환)
// 로컬스토리지 데이터 초기데이터 세팅 
const result = loadedLocalStorage();



// 일기제목 추가 함수
const addTitle = (title) => {

    // writeTitle.value = '';

    const newDairy = [{
        title
    }];
    contentTitle = contentTitle.concat(newDairy);
    console.log(contentTitle);
    textarea.focus();
}


// 제목 엔터 이벤트
const handleTitle = (e) => {
    e.preventDefault();


    if (e.key !== 'Enter' || writeTitle === '') return;
    console.log(e); // keyboardEvent
    console.log(e.key); // Enter
    console.log(e.target); // input 태그
    console.log(e.target.value); // input 값


    // 일기 추가 함수 (제목이 넘어간다.)
    addTitle(writeTitle.value);
}




// 태그 이벤트
let count = 0;

// 첫번째 input에 클릭 이벤트
const addTag1 = (e) => {
    tag.style.width = '90px';
    tag.value = '# ';

    // 첫번째 input 값에 엔터를 치는 이벤트
    tag.addEventListener('keyup', addTag2);

    count++;

    function addTag2(e) {
        if (count < 5) {

            if (e.key === 'Enter') {
                // console.log(e);  // keyBoardEvent
                saveTags.push(tag.value);

                const newInput = document.createElement('input');
                newInput.classList.add('inputTag');
                // console.log(newInput);
                // <input class="inputTag">
                tags.appendChild(newInput);


                newInput.style.width = '90px';
                newInput.focus();

                tag = document.querySelector('.write-tag .inputTag:last-child');

                addTag1();
            }
        }
    }
}



// 데이터가 있는지 없는지 확인하는 함수. (데이터가 없는 상태로 등록버튼 누르면 alert 함수 실행)
function checkEmptyText() {
    const title = writeTitle.value;
    const content = textarea.value;
    const tags = saveTags;
    console.log(tags);
    if (title.value === '' || content.value === '' || tags.length === 0) {
        alert('데이터를 입력하세요')
        return false;
    }
    return true;
}


// 로컬스토리지 데이터의 length 값 반환하는 함수
const checkLength = () => {
    const founded = loadedLocalStorage();

    let CL = founded.length;
    return CL;
}


// 일기 내용 작성 이벤트
const addDiary = () => {



    const arrLength = checkLength();
    const id = arrLength + 1;

    const title = writeTitle.value;
    const content = textarea.value;

    const tags = saveTags;

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();
    const hour = today.getHours();
    const minute = today.getMinutes();


    let dayString = '';



    switch (day) // switch 문에 우리가 확인하고 싶은 값을 넣는다. 
    { // 그다음에는 case 를 하나하나 정해줄거다.
        case 0:
            dayString = 'Sun';
            break; // 어~ 비교하는거 이제 끝났어~!
        case 1:
            dayString = 'Mon'
            break;
        case 2:
            dayString = 'Tue'
            break;
        case 3:
            dayString = 'Wed'
            break;
        case 4:
            dayString = 'Thu'
            break;
        case 5:
            dayString = 'Fri'
            break;
        case 6:
            dayString = 'Sat'
            break;
        default: // 아무것도 일치 하지 않았을 경우 실행할 코드를 콜론 뒤에 넣는다. 
    }



    const dairyInfo = {
        id,
        title,
        content,
        tags,
        year,
        month,
        date,
        dayString,
        hour,
        minute

    }

    result.push(dairyInfo);

    if (checkEmptyText()) {
        localStorage.setItem('dairy', JSON.stringify(result));
    }

    location.href = './detail.html'
}



// writeTitle.onkeyup = handleTitle();
writeTitle.addEventListener('keyup', handleTitle);
tag.addEventListener('click', addTag1);
createBtn.addEventListener('click', addDiary);