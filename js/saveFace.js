const faces = document.querySelectorAll('input[type="radio"]');
const faceArray = [...faces];
let result = new Map();
let resultArr = [];

function saveFaceInfo(face) {
    const faceId = face.id;
    // const created = getTime();
    const created = '2021-02-14';
    // json에 저장 시킨다. 날자. 감정정보
    const faceInfo = {
        id: faceId,
        created: created
    };
    
    result.set(created, faceInfo);
    
    if (resultArr.length === 0) {
        resultArr.push(result.get(created));
        localStorage.setItem(`face`, JSON.stringify(resultArr));
        return ;
    }
    for (r of resultArr) {
        console.log(r);
        resultArr.push(result.get(created));
        localStorage.setItem(`face`, JSON.stringify(resultArr));
    }
    
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