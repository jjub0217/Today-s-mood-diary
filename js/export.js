// 로컬스토리지에 저장된 데이터 불러오는 함수. (데이터가 없으면 빈배열 반환) 
export const loadedLocalStorage = () => {
    const allLocalStorage = JSON.parse(localStorage.getItem('dairy'));
    if (allLocalStorage === null || allLocalStorage.length === 0) {
        return [];
    }

    return allLocalStorage;
}
