let currentSetIndex = 1;

document.getElementById('left-arrow').addEventListener('click', function() {
    swapImages('left');
});

document.getElementById('right-arrow').addEventListener('click', function() {
    swapImages('right');
});



function swapImages(direction) {
    const sets = document.querySelectorAll('.top-nfts');
    const currentSet = sets[currentSetIndex - 1];
    const nextSetIndex = (currentSetIndex % sets.length) + 1;
    const nextSet = sets[nextSetIndex - 1];

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

    // 更新当前显示的图像组
    currentSetIndex = nextSetIndex;
}