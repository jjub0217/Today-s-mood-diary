const faces = document.querySelectorAll('input[type="radio"]');
const faceArray = [...faces];
const faceKey = 'face';

let saved = [];

function saveFaceInfo(face) {
    const faceId = face.id;
    const created = getTime();
    // const created = '2021-02-14';
    // json에 저장 시킨다. 날자. 감정정보
    const faceInfo = {
        id: faceId,
        created: created
    };
    
    saved = selectAllFaceInfo();
    saved.push(faceInfo);

    // localStorage 읽고, 거기에 push해서 저장
    localStorage.setItem(faceKey, JSON.stringify(saved));
}

function getTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
}

function setEventListener() {
    faceArray.forEach(arr => arr.addEventListener('click', () => saveFaceInfo(arr)));
}

function selectAllFaceInfo() {
    const founded = JSON.parse(localStorage.getItem(faceKey));
    if (founded === null){
        return [];
    }
    return founded;
}

setEventListener();