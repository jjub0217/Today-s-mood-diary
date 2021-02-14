const monthDates = document.querySelectorAll('.dates-day');
function loadFaceDate() {
    const result = JSON.parse(localStorage.getItem('face'));
    return result;
}

function extractDay() {
    const founced = loadFaceDate();
    const extracedDates = founced.map(f => f.created);
    const result = extracedDates.map(ed => ed.split('-')[2]);

    return result;
}

function drawFace() {
    const loadedData = loadFaceDate();
    monthDates.forEach(m => {
        // if (m.textContent === )
    });
}
extractDay();
loadFaceDate();