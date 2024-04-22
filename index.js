

const toggleButton = document.getElementsByClassName('navbarButton')[0];
const myList = document.getElementsByClassName('navigationLinks')[0];

toggleButton.addEventListener('click', function() {

    const computedStyle = window.getComputedStyle(myList);

    if (computedStyle.display === 'none') {
        myList.style.display = 'flex';
    } else {
        myList.style.display = 'none';
    }

});





