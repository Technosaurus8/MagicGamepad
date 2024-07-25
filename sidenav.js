var open = 1;

function toggleNav() {
    if (open == 0) {
        openNav();
    } else {
        closeNav();
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "20%";
    document.getElementById("content").style.marginLeft = "20%";
    open = 1;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("content").style.marginLeft = "0%";
    open = 0;
}

// Adjust the margin of the content based on screen width on initial load
document.addEventListener("DOMContentLoaded", function() {
    // Load sidenav content
    fetch('common/sidenav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidenav-placeholder').innerHTML = data;
        });
});

// Ensure the correct width of sidenav based on media query
window.addEventListener('resize', function() {
    if (window.innerWidth <= 750) {
        closeNav();
    }
    else{
        openNav();
    }
});
