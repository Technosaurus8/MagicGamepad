var open = 1;
var mobile = window.innerWidth <= 750 ? 1 : 0;

function toggleNav() {
    if (open == 0) {
        openNav();
    } else {
        closeNav();
    }
}

function openNav() {
    if (mobile == 1) {
        openNavMob();
    } else {
        openNavDesk();
    }
}

function openNavDesk() {
    document.getElementById("mySidenav").style.width = "20%";
    document.getElementById("content").style.marginLeft = "20%";
    open = 1;
}

function openNavMob() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("content").style.marginLeft = "0%";
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
            // Add event listener to sidenav items after content is loaded
            document.getElementById('sidenav_items').addEventListener('click', function(event) {
                // Check if the clicked element is an <li>
                if (mobile == 1) {
                    closeNav();
                }
            });
        });

    // Ensure the correct width of sidenav based on initial screen width
    if (mobile == 1) {
        closeNav();
    } else {
        openNav();
    }
});

// Ensure the correct width of sidenav based on media query
window.addEventListener('resize', function() {
    if (window.innerWidth <= 750) {
        mobile = 1;
        closeNav();
    } else {
        mobile = 0;
        openNav();
    }
});
