function changeAnimationFirst() {
    const div = document.getElementById('first');

    if (div.classList[0] == 'left') {
        div.classList.remove('left');
        div.classList.add('spin');
    }else if (div.classList[0] == 'spin') {
        div.classList.remove('spin');
        div.classList.add('left');
    }
}

function changeAnimationSecond() {
    const div = document.getElementById('second');
    
    if (div.classList[0] == 'bottom') {
        div.classList.remove('bottom');
        div.classList.add('spin');
    }else if (div.classList[0] == 'spin') {
        div.classList.remove('spin');
        div.classList.add('bottom');
    }
}

function changeAnimationThird() {
    const div = document.getElementById('third');
    
    if (div.classList[0] == 'top') {
        div.classList.remove('top');
        div.classList.add('spin');
    }else if (div.classList[0] == 'spin') {
        div.classList.remove('spin');
        div.classList.add('top');
    }
}

function changeAnimationFourth() {
    const div = document.getElementById('fourth');
    
    if (div.classList[0] == 'right') {
        div.classList.remove('right');
        div.classList.add('spin');
    }else if (div.classList[0] == 'spin') {
        div.classList.remove('spin');
        div.classList.add('right');
    }
}