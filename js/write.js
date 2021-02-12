
const writeTitle = document.querySelector('.writeTitle'); // input 태그
const createBtn = document.querySelector('.create'); // button 태그
const  closeBtn = document.querySelector('.close'); // button 태그
const textarea = document.querySelector('textarea'); // 일기내용
const tags = document.querySelector('.write-tag')  // <div></div>

let tag = document.querySelector('.write-tag  > input'); // [input]





// tag들
const saveTags = [];

// 일기장 제목
let contentTitle = [];






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
    // console.log(tags); // <div></div>
    // console.log(e); // MouseEvent
    // console.dir(tag);
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



function checkEmptyText() {
    const title = writeTitle.value;
    const content = textarea.value;
    const tags =  saveTags;
    console.log(tags);
    if( title.value === '' || content.value === '' || tags.length === 0){
        alert('데이터를 입력하세요')
        return false;
    }
    return true;
}


// 일기 내용 작성 이벤트
const addDiary = () => {

    const title = writeTitle.value;
    const content = textarea.value;

    const tags =  saveTags;
    console.log(tags);



    const result = {
        title,
        content,
        tags
    }

    if(checkEmptyText()){
        localStorage.setItem('dairy', JSON.stringify(result));
    }
}



writeTitle.addEventListener('keyup', handleTitle);
tag.addEventListener('click', addTag1);
createBtn.addEventListener('click', addDiary);
// closeBtn.addEventListener('click', closeContent);

