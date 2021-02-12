const far_angry = document.querySelector('.far-angry');
const fas_angry = document.querySelector('.fas-angry');
const far_sad = document.querySelector('.far-sad');
const fas_sad = document.querySelector('.fas-sad');
const far_normal = document.querySelector('.far-normal');
const fas_normal = document.querySelector('.fas-normal');
const far_good = document.querySelector('.far-good');
const fas_good = document.querySelector('.fas-good');
const far_laugh = document.querySelector('.far-laugh');
const fas_laugh = document.querySelector('.fas-laugh');

const faces = document.querySelectorAll('.far');
const checkedFace = document.querySelector('input[type="radio"]:checked');
console.dir(checkedFace);
console.dir(far_angry);
function selectRadio() {
    const selected = faces.filter((f) => f.checked);
}

far_angry.addEventListener("click", function() {
    if (far_angry.hidden == false) {
        far_angry.hidden = true;
        fas_angry.hidden = false;
    } else {
        far_angry.hidden = false;
        fas_angry.hidden = true;
    }
});

fas_angry.addEventListener("click", function() {
    if (fas_angry.hidden === false) {
        fas_angry.hidden = true;
        far_angry.hidden = false;
    } else {
        fas_angry.hidden = false;
        far_angry.hidden = true;
    }
});

far_sad.addEventListener("click", function() {
    if (far_sad.hidden == false) {
        far_sad.hidden = true;
        fas_sad.hidden = false;
    } else {
        far_sad.hidden = false;
        fas_sad.hidden = true;
    }
});

fas_sad.addEventListener("click", function() {
    if (fas_sad.hidden === false) {
        fas_sad.hidden = true;
        far_sad.hidden = false;
    } else {
        fas_sad.hidden = false;
        far_sad.hidden = true;
    }
});

far_normal.addEventListener("click", function() {
    if (far_normal.hidden == false) {
        far_normal.hidden = true;
        fas_normal.hidden = false;
    } else {
        far_normal.hidden = false;
        fas_normal.hidden = true;
    }
});

fas_normal.addEventListener("click", function() {
    if (fas_normal.hidden === false) {
        fas_normal.hidden = true;
        far_normal.hidden = false;
    } else {
        fas_normal.hidden = false;
        far_normal.hidden = true;
    }
});

far_good.addEventListener("click", function() {
    if (far_good.hidden == false) {
        far_good.hidden = true;
        fas_good.hidden = false;
    } else {
        far_good.hidden = false;
        fas_good.hidden = true;
    }
});

fas_good.addEventListener("click", function() {
    if (fas_good.hidden === false) {
        fas_good.hidden = true;
        far_good.hidden = false;
    } else {
        fas_good.hidden = false;
        far_good.hidden = true;
    }
});

far_laugh.addEventListener("click", function() {
    if (far_laugh.hidden == false) {
        far_laugh.hidden = true;
        fas_laugh.hidden = false;
    } else {
        far_laugh.hidden = false;
        fas_laugh.hidden = true;
    }
});

fas_laugh.addEventListener("click", function() {
    if (fas_laugh.hidden === false) {
        fas_laugh.hidden = true;
        far_laugh.hidden = false;
    } else {
        fas_laugh.hidden = false;
        far_laugh.hidden = true;
    }
});