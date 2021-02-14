const datesBoxes = document.querySelectorAll('.dates-box');
const monthDates = document.querySelectorAll('.dates-day');

function loadUniqueFaceData() {
    const founded = JSON.parse(localStorage.getItem('face'));
    if (founded === null) {
        return [];
    }
   
    return founded;
}

function extractDay() {
    const founced = loadUniqueFaceData();
    const extracedDates = founced.map(f => f.created);
    const result = extracedDates.map(ed => ed.split('-')[2]);
    return result;
}

function selectFeeling() {
    const founced = loadUniqueFaceData();
    const extractFaces = founced.map(f => f.id);
    return extractFaces;
}

function selectFeelingImage(feeling) {
    switch(feeling) {
        case `angry`: 
            return './images/feeling/angry-regular.png';
        case `good`:
            return './images/feeling/good-regular.png'; 
        case `laugh`:
            return './images/feeling/laugh-regular.png';
        case `normal`:
            return './images/feeling/normal-regular.png';
        case `sad`:
            return './images/feeling/sad-regular.png';
    } 
}

function drawFace() {
    const loadedData = loadUniqueFaceData();
    const savedDays = extractDay();
    const feelings = selectFeeling();
    let html = '';
    for(let i = 0; i < loadedData.length; i++) {
        for (let j = 0; j < monthDates.length; j++) {
            if (monthDates[j].textContent === savedDays[i]) {
                html += `<div class="dates-day">${savedDays[i]}</div>
                <img src="${selectFeelingImage(feelings[i])}">`;
                datesBoxes[j].innerHTML = html;
                html = '';
            }
        }
    }
}
drawFace();
// loadFaceDate();