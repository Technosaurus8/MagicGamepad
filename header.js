document.addEventListener("DOMContentLoaded", function() {
    fetch('common/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header-container').innerHTML = data);
});

function removeMenu() {
    var menu = document.getElementById('menu');
    if (menu) {
        var parentLi = menu.closest('li'); // Find the closest parent <li> element
        if (parentLi) {
            parentLi.remove();
        } else {
            menu.remove(); // Fallback in case there is no parent <li>
        }
    }
}