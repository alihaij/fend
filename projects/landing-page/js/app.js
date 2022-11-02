
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
const nav = document.getElementById('navbar__list');
const div = document.createElement('div');
const sections = document.querySelectorAll('section');




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewport(el) {
     const rect = el.getBoundingClientRect();
     return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)

     );
}


// const section3 = document.querySelector('#section3');
// const activeCalss = document.querySelector('');





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let i = sections.length; i > 0; i--) {
     const li = document.createElement('li');
     const a = document.createElement('a');
     a.classList.add("menu__link");
     a.innerHTML = ("Section" + i);
     a.setAttribute('id', 'section' + i + '-link');
     nav.append(li);
     a.setAttribute('data-link', 'section' + i);
     li.appendChild(a);
}



// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll('.menu__link');
// console.log(links);
links.forEach((item) => {
     item.addEventListener("click", () => {
          item.classList.toggle('active');
          const el = document.getElementById(item.getAttribute("data-link"));
          el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
     })

}
);

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', function () {
     sections.forEach(sec => {
          if (isInViewport(sec)) {
               el = document.getElementById(sec.getAttribute('id') + '-link'),
                    el.classList.add('active'),
                    sec.classList.add('your-active-class')
          }
          else {
               sec.classList.remove('your-active-class');
               el = document.getElementById(sec.getAttribute('id') + '-link'),
               el.classList.remove('active')    }
     });


}, {
     passive: true
});




/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


