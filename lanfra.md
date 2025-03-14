// Show the button when scrolled down

// window.onscroll = function () {
//     if (window.scrollY > 300) {
//         backToTopBtn.classList.add("show");
//     } else {
//         backToTopBtn.classList.remove("show");
//     }
// };

// Scroll back to the top smoothly when clicked

// backToTopBtn.onclick = function () {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// };



Default styles Mobile-First Approach

/* Tablets (≥ 600px) */

/* @media(min-width: 600px) {
  .container {
    max-width: 540px;
    
    
  }
} */

/* Small Laptops (≥ 768px) */
/* 
@media (min-width: 768px) {

  .container {
    max-width: 720px;
    
    }
    .navbar {
      flex-direction: row;
    }
}
   */

/* Desktops (≥ 1024px) */

/* @media (min-width: 1024px) {
  .container {
    max-width: 960px;
    
  }
} */

/* Large Screens (≥ 1200px) */
/* @media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  
  }
} */

/* @media (max-width: 768px) {
  .nav-list {
    display: none;
    flex-direction: column;
    position: absolute;
    background-color: #333;
    width: 100%;
    top: 60px;
    left: 0;
    padding: 1rem 0;
  }
    .nav-list li {
      text-align: center;
      padding: 1rem;
    }

    
  .menu-toggle {
    display: block;
  }
} */


