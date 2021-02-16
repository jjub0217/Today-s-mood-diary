// export { loadedLocalStorage , saveData};



// 로컬스토리지에 저장된 데이터 불러오는 함수. (데이터가 없으면 빈배열 반환) 
export const loadedLocalStorage = () => {
    const allLocalStorage = JSON.parse(localStorage.getItem('dairy'));
    if (allLocalStorage === null || allLocalStorage.length === 0) {
        return [];
    }

    return allLocalStorage;
}


export const saveData = () => {
    localStorage.setItem('dairy', JSON.stringify(loadedLocalStorage()));
}


export const checkLength = () => {
    const founded = loadedLocalStorage();

    let CL = founded.length;
    return CL;
}

export const addDiary = () => {



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