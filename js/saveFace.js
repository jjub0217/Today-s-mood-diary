const faces = document.querySelectorAll('input[type="radio"]');
const faceArray = [...faces];
let result = new Map();

function saveFaceInfo(face) {
    const faceId = face.id;
    const created = getTime();
    // json에 저장 시킨다. 날자. 감정정보
    const faceInfo = {
        id: faceId,
        created: created
    };
    result.set(created, faceInfo);

    localStorage.setItem(`face`, JSON.stringify(result.get(created)));
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

setEventListener();