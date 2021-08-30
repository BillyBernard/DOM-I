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
titleSectionOne.innerHTML = 'Dom <br> Is <br> Awesome';
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

const sectionThree = document.querySelector('.bottom-content');
const servicesHead = sectionThree.querySelector('h4');
servicesHead.textContent = siteContent['main-content']['services-h4'];

const servicesBody = sectionThree.querySelector('p');
servicesBody.textContent = siteContent['main-content']['services-content'];


// const sectionFour = document.querySelector('.bottom-content', 'text-content');
// const servicesHead = sectionFour.querySelector('h4');
// servicesHead.textContent = siteContent['main-content']['services-h4'];

// const servicesBody = sectionFour.querySelector('p');
// servicesBody.textContent = siteContent['main-content']['services-content'];


// const contentBlock3 = sectionThree.;
// const productHead = contentBlock3.querySelector('h4');
// productHead.textContent = siteContent['main-content']['product-h4'];




// contact section

const contactSection = document.querySelector('.contact');
const contactHead = contactSection.querySelector('h4');
contactHead.textContent = siteContent['contact']['contact-h4'];

const address = contactSection.querySelector('p');
address.textContent = siteContent['contact']['address'];
address.innerHTML = '123 Way 456 Street <br> Somewhere, USA';

const phone = address.nextElementSibling;
phone.textContent = siteContent['contact']['phone'];

const email = phone.nextElementSibling;
email.textContent = siteContent['contact']['email'];

// footer

const veryBottom = document.querySelector('footer');
const copyright = veryBottom.querySelector('p');
copyright.textContent = siteContent['footer']['copyright'];






