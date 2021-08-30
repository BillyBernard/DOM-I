const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// NavBar

// const anchorOne = document.querySelector("nav a");
// anchorOne.textContent = "Services";

// const anchorTwo = anchorOne.nextElementSibling;
// anchorTwo.textContent = "Product";

// const anchorThree = anchorTwo.nextElementSibling;
// anchorThree.textContent = "Vision";

// const anchorFour = anchorThree.nextElementSibling;
// anchorFour.textContent = "Features";

// const anchorFive = anchorFour.nextElementSibling;
// anchorFive.textContent = "About";

// const anchorSix = anchorFive.nextElementSibling;
// anchorSix.textContent = "Contact";

const navText1 = document.querySelector('nav a');
const navText2 = navText1.nextElementSibling;
const navText3 = navText2.nextElementSibling;
const navText4 = navText3.nextElementSibling;
const navText5 = navText4.nextElementSibling;
const navText6 = navText5.nextElementSibling;
//Creating variables for each Anchor tag to target
navText1.textContent = siteContent['nav']['nav-item-1'];
navText2.textContent = siteContent['nav']['nav-item-2'];
navText3.textContent = siteContent['nav']['nav-item-3'];
navText4.textContent = siteContent['nav']['nav-item-4'];
navText5.textContent = siteContent['nav']['nav-item-5'];
navText6.textContent = siteContent['nav']['nav-item-6'];

// header
const sectionOne = document.querySelector('.cta');
const titleSectionOne = sectionOne.querySelector('h1');
titleSectionOne.textContent = siteContent['cta']['h1'];
const buttonSectionOne = sectionOne.querySelector('button');
buttonSectionOne.textContent = siteContent['cta']['button'];

const headerImg = sectionOne.querySelector("img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

// main-content
const sectionTwo = document.querySelector('.text-content');
const featuresHead = sectionTwo.querySelector('h4');
featuresHead.textContent = siteContent['main-content']['features-h4'];

const featuresBody = sectionTwo.querySelector('p');
featuresBody.textContent = siteContent['main-content']['features-content'];

const contentBlock2 = sectionTwo.nextElementSibling;
const aboutHead = contentBlock2.querySelector('h4');
aboutHead.textContent = siteContent['main-content']['about-h4'];

const aboutBody = contentBlock2.querySelector('p');
aboutBody.textContent = siteContent['main-content']['about-content'];

const mainImg = document.querySelector('.main-content');
const midImage = mainImg.querySelector("img");
midImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// const contentBlock3 = contentBlock2.nextElementSibling;
// const servicesHead = contentBlock3.querySelector('h4');
// servicesHead.textContent = siteContent['main-content']['services-h4'];

