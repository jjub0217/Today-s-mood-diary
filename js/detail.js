const $h2 = document.querySelector('.list-title');
const $ul = document.querySelector('.board-list');
const $time = document.querySelector('.time');


function loadHeaderDate() {
    // let html = '';
    const loadedHeaderDate = new Date();
    console.log(loadedHeaderDate);
    const year = loadedHeaderDate.getFullYear();
    const month = loadedHeaderDate.getMonth();
    const date = loadedHeaderDate.getDate();

    if(month <10){
        $time.innerHTML = `${year} 0${month} ${date}`;
    }else{
        $time.innerHTML = `${year} ${month} ${date}`;
    }
}

loadHeaderDate();




module.exports = function loadDairy() {
    const loadedDairy = localStorage.getItem('dairy');
    console.log(loadedDairy);

    if (loadedDairy !== null) {
        // 로컬스토리지에 저장된 데이터
        const parsedDairy = JSON.parse(loadedDairy);
        console.log(parsedDairy);

        let html = '';

        parsedDairy.forEach(dairy => {

            const id = dairy.id;
            const title = dairy.title;
            const tags = dairy.tags;
            const year = dairy.year;
            const month = dairy.month;
            const date = dairy.date;
            const day = dairy.dayString;
            const hour = dairy.hour;
            // console.log(hour);
            const minute = dairy.minute;
            // console.log(minute);

            let tagHtml = '';

            // console.log(tags); // [# 힘들어, #씻구와]
            tags.forEach(tag => {
                tagHtml += ` 
                <span>${tag}</span>`
            })
            console.log(tagHtml);


            html += `
            <li class="list" id=${id}>
          <a href="./contents.html">

            <div class="list-date">
              <span class="day">${day}</span>
              <span class="date">${date}</span>
            </div>


            <div class="contents">

              <div class="text">
                <div class="detail-time">
                  <span class="detail-date">${hour}:${minute}</span>
                </div>

                <h2 class="list-title">${title}</h2>

                <div class="tag">
                ${tagHtml}                  
                </div>
              </div>

              <img src="./images/feeling/good-regular.png" alt="feeling" class="icon feeling-icon" />

            </div>

          </a>
        </li>
            `
        });

        $ul.innerHTML = html;
    }
}

loadDairy();


// module.exports = loadDairy;