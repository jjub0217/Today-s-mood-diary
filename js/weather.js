// 1. API 에서 원하는 좌표라는 정보를 읽어서
// 2. 정보를 저장하고 
// 3. 저장값이 없다면, 
// 4.정보를 요청하고 
// 5. 저장값이 있다면 
// 6. 아무것도 안하면 된다.


// 특정 웹사이트로부터 데이터를 얻을 수 있는 키
const api_key = '3f2d660045d37c6f24863474173e68a5';
const $coords = document.querySelector('.coords');

const $headerRight = document.querySelector('.header-right');
const img = $headerRight.firstElementChild;

const $sunImg = './images/weather/sun.png'
const $cloudyImg = './images/weather/cloudy.png'
const $rainImg = './images/weather/rain.png'
const $snowImg = './images/weather/snow.png'










// 로컬스토리지에 저장된 coords 라는 키의 값을 가져오는 함수
function loadLocation() {
    // const loadedLocation = localStorage.getItem('dairy');
    const loadedLocation = localStorage.getItem('coords'); // <- 반드시 가져오는 키 이름이 coords 문자열이어야 한다.

    if (loadedLocation === null) { // 3번 : 로컬스토리지에 저장된 데이터가 없다면
        askLocation(); // 4번 : 장보(좌표)를 물어보고
    } else { // 5번 : 저장값(로컬스토리지에 저장된 coords 라는 키의 값)이 있다면 
        // 저장값을 가져와서 string 값을 객체로 변화해주는 메소드를 사용하여 해당 저장값을 
        const parseCoords = JSON.parse(localStorage.getItem('coords'))
        console.log(parseCoords); // { latitude : 37.641, longitude: 126.929 }

        // 인수로 전달하여 날씨를 가져온다.
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}
loadLocation();






// 좌표(정보)를 물어보는 함수
function askLocation() {
    // getCurrentPosition 은 2개의 인수가 필요하다. : 첫번째 인수는 좌표를 가져오는데 성공했을때의 함수. 두번째는 실패했을때 실행하는 함수
    navigator.geolocation.getCurrentPosition(success, errors);
}


// 좌표(정보)를 가져오는거에 성공하면 실행하는 함수
function success(location) {
    const latitude = location.coords.latitude // 위도
    const longitude = location.coords.longitude // 경도

    locationObj = {
        latitude,
        longitude
    }

    // 위도와 경도로 만든 객체를, coords 라는 키를 가진 데이터에 저장
    localStorage.setItem('coords', JSON.stringify(locationObj))

    // 날씨 정보 가져오는 함수(에 위도와 경도를 넣는다.)
    getWeather(latitude, longitude);

}

// 좌표(정조)를 가져오는거에 실패하면 실행하는 함수
function errors() {
    console.log('당신이 어디있는 지 모르겠어요');
}





// 날씨 물어보는 함수 
function getWeather(latitude, longitude) {

    // fetch : API 데이터를 얻게 해주는 메서드. 괄호 안에는 가져올 데이터의 API call 의 URL 이 들어가면 된다.
    // : 자바스크립트가, 보이지 않은 곳에서 계속 데이터를 가져온다. 그렇기 때문에 새로고침 없이 데이터를 가져올수 있다.
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`)

        // then : 인수로 들어온 함수를 호출하는 메서드.
        // : fetch 로 불러온 데이터가, 완전히 들어온 다음에 then 의 인수로 들어온 함수를 실행하려고 한다. 왜냐면, 데이터가 우리한테 넘어오는게 시간이 걸릴수도 있기 때문이다. 
        .then(function (res) { // res : response( 서버에서 들어온 json 데이터 )
            // console.log(res);
            // console.log(res.json()); // <- json 형식으로 되어있는 객체(fetch 로 가져온 데이터) 데이터를 가져와라.
            // Promise{<pending>} : 대기상태(가져온 데이터 처리중)라는 뜻
            return res.json();
        })
        // 서버에서 들어온 json 형식으로 되어있는 객체(fetch 로 가져온 데이터) 데이터를 가져오는게 끝나면 다음 함수를 실행해라.
        .then(function (j) { // <- j : fetch 로 가져온 데이터 (json 형식으로 되어있는 객체)

            const currentWeather = j.weather[0].description;

            if (currentWeather === 'clear sky') {
                img.setAttribute('src', $sunImg);
            } else if (currentWeather === 'scattered clouds') {
                img.setAttribute('src', $cloudyImg);
            } else if (currentWeather === 'rain') {
                img.setAttribute('src', $rainImg);
            } else if (currentWeather === 'snow') {
                img.setAttribute('src', $snowImg);
            }

        })



}