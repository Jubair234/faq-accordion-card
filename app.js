// make an array 1 2 3 4
// make an if statement to see if you can check for a button that 
// has the onlick event that has active class
// if it is active, does it has the id of 1? if it does, 
// can you display the div? inside this, add in the if clause if 
// the display is block, change display to none.


buttons.forEach(button => {
    button.addEventListener("click", function() {
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        button.classList.add("active");

    })
})


