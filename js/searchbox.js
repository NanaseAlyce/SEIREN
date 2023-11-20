document.addEventListener('DOMContentLoaded', function() {
    var searchBox = document.getElementById('searchBox');

    if (searchBox) {
        searchBox.addEventListener('focus', function() {
            this.placeholder = 'Search';
            var slash = document.getElementById('slash');
            slash.textContent = 'esc';
        });

        searchBox.addEventListener('blur', function() {
            this.placeholder = '';
            var slash = document.getElementById('slash');
            slash.textContent = '/';
        });

        searchBox.addEventListener('input', function() {
            if (this.value.length > 0) {
                this.classList.add('expanded');
            } else {
                this.classList.remove('expanded');
            }
        });
    }
});

document.getElementById('clearButton').addEventListener('click', function() {
    var searchBox = document.getElementById('searchBox');
    searchBox.value = '';
    searchBox.focus();
});

document.addEventListener('keydown', function(event) {
    if (event.key === '/' && event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        var searchBox = document.getElementById('searchBox');
        searchBox.focus();
        event.preventDefault();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        var searchBox = document.getElementById('searchBox');
        if (document.activeElement === searchBox) {
            searchBox.blur();
        }
    }
});
