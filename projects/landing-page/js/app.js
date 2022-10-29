
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
var nav = document.getElementById('navbar__list');
var div = document.createElement('div');
var sections = document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let i = sections.length; i > 0; i--) {
     var li = document.createElement('li');
     var a = document.createElement('a');
     a.classList.add("menu__link");
     a.innerHTML = ("Section" + i);
     nav.appendChild(li);
     a.setAttribute('data-link','section' + i)
     li.appendChild(a);
}




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll('.menu__link');
// console.log(links);
links.forEach((item) => {
     item.addEventListener("click", () => {
          const el = document.getElementById(item.getAttribute("data-link"));
          el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
     })

}
);


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


