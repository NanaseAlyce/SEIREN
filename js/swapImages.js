let currentSetIndex = 1;
let autoSwapTimer = null;

function disableButton(button) {
    button.disabled = true;

    setTimeout(() => {
        button.disabled = false;
    }, 300);
}

function autoSwapImages() {
    swapImages('left');
}

function startAutoSwap() {
    stopAutoSwap();
    autoSwapTimer = setInterval(autoSwapImages, 5000);
}

function stopAutoSwap() {
    if (autoSwapTimer) {
        clearInterval(autoSwapTimer);
        autoSwapTimer = null;
    }
}

const imageContainer = document.querySelector('.top-nfts-container');

imageContainer.addEventListener('mouseenter', function() {
    stopAutoSwap();
});

imageContainer.addEventListener('mouseleave', function() {
    startAutoSwap();
});

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        startAutoSwap();
    } else {
        stopAutoSwap();
    }
});

startAutoSwap();

document.getElementById('left-arrow').addEventListener('click', function() {
    swapImages('right');
    disableButton(this);
});

document.getElementById('right-arrow').addEventListener('click', function() {
    swapImages('left');
    disableButton(this);
});



function swapImages(direction) {
    const sets = document.querySelectorAll('.top-nfts');
    const currentSet = sets[currentSetIndex - 1];
    const nextSetIndex = (currentSetIndex % sets.length) + 1;
    const nextSet = sets[nextSetIndex - 1];

    var banner = document.getElementById('banner');
    banner.classList.toggle('color');

    if (direction === 'left') {
        nextSet.style.transition = 'none';
        nextSet.style.transform = 'translateX(102%)';
        setTimeout(() => {
            requestAnimationFrame(() => {
                nextSet.style.transition = 'transform 0.5s ease';
                currentSet.style.transform = 'translateX(-102%)';
                nextSet.style.transform = 'translateX(0)';
            });
        }, 20);
    } else {
        nextSet.style.transition = 'none';
        nextSet.style.transform = 'translateX(-102%)';

        requestAnimationFrame(() => {
            nextSet.style.transition = 'transform 0.5s ease';
            currentSet.style.transform = 'translateX(102%)';
            nextSet.style.transform = 'translateX(0)';
        });
    }

    currentSetIndex = nextSetIndex;
}