function updateSliderPosition(activeButton) {
    const slider = document.querySelector('.rank-ntfs-button-slider');
    const container = document.querySelector('.rank-ntfs-button-container-left');

    const distance = activeButton.offsetLeft - container.offsetLeft;

    slider.style.width = (activeButton.offsetWidth - 4 )+ 'px';
    slider.style.transform = `translateX(${distance}px)`;
}

function updateButtonChoose(activeButton,way)
{
    if(way) {
        activeButton.classList.add("choose");
    }else{
        activeButton.classList.remove("choose");
    }
}

document.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', function() {
        updateSliderPosition(this);
        const allButtons = Array.from(document.querySelectorAll('.option'));
        const otherButtons = allButtons.filter(btn => btn !== this);
        for (const otherButton of otherButtons) {
            updateButtonChoose(otherButton, false);
        }
        updateButtonChoose(this,true);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const initialButton = document.getElementById('option-trending');

    updateSliderPosition(initialButton);
    updateButtonChoose(initialButton,true);
});
