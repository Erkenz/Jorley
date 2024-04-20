 /**
   * Mobile nav toggle
   */

 document.addEventListener('click', function(e) {
   // Check if the clicked element has the class 'mobile-nav-toggle'
   if (e.target.classList.contains('mobile-nav-toggle')) {
     // Select the element with id 'navbar'
     var navbar = document.querySelector('#navbar');
     // Toggle the class 'navbar-mobile' on the 'navbar' element
     navbar.classList.toggle('navbar-mobile');
     // Toggle the class 'bi-list' and 'bi-x' on the clicked element
     e.target.classList.toggle('bi-list');
     e.target.classList.toggle('bi-x');
   }
 });
/**
 * Mobile nav dropdowns activate
 */
document.addEventListener('click', function(e) {
  // Check if the clicked element has the class 'navbar' and is an anchor tag inside a dropdown
  if (e.target.classList.contains('navbar') && e.target.parentNode.classList.contains('dropdown') && e.target.tagName === 'A') {
    // Prevent the default anchor tag behavior
    e.preventDefault();
    // Select the next sibling of the clicked anchor tag
    var dropdownContent = e.target.nextElementSibling;
    // Toggle the class 'dropdown-active' on the dropdown content
    dropdownContent.classList.toggle('dropdown-active');
  }
}, true)






/**
   * Navbar links active state on scroll
   */
let navbarlinks = select('#navbar .scrollto', true)
const navbarlinksActive = () => {
  let position = window.scrollY + 200
  navbarlinks.forEach(navbarlink => {
    if (!navbarlink.hash) return
    let section = select(navbarlink.hash)
    if (!section) return
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('active')
    } else {
      navbarlink.classList.remove('active')
    }
  })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)

/**
 * Scrolls to an element with header offset
 */
const select = (selector) => {
  return document.querySelector(selector)
}

/**
 * Scrolls to the element with the specified selector.
 * @param {string} el - The selector of the element to scroll to.
 */
const scrollto = (el) => {
  let header = select('#header')
  let offset = header.offsetHeight

  if (!header.classList.contains('header-scrolled')) {
    offset -= 16
  }

  let element = select(el)
  if (element) {
    let elementPos = element.offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }
}



// Handles the scroll event and adds/removes the 'header-scrolled' class accordingly.
const headerScrolled = () => {
  let selectHeader = select('#header');
  if (window.scrollY > 100) {
    selectHeader.classList.add('header-scrolled');
  } else {
    selectHeader.classList.remove('header-scrolled');
  }
}

// Attaches the scroll event listener to the 'load' and 'scroll' events.
window.addEventListener('load', headerScrolled);
window.addEventListener('scroll', headerScrolled);