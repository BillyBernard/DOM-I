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

navText1.style.color = "green";
navText2.style.color = "green";
navText3.style.color = "green";
navText4.style.color = "green";
navText5.style.color = "green";
navText6.style.color = "green";

const navText7 = document.createElement('a');
navText7.textContent = 'News'
navText7.href = '#';
document.querySelector('nav').appendChild(navText7);

const navText8 = document.createElement('a');
navText8.textContent = 'Blog'
navText8.href = '#';
document.querySelector('nav').prepend(navText8);

navText7.style.color = "green";
navText8.style.color = "green";

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

const featuresBlock = document.querySelector('.text-content:nth-of-type(1)');
const featuresHead = featuresBlock.querySelector('h4');
featuresHead.textContent = siteContent['main-content']['features-h4'];

const featuresBody = featuresBlock.querySelector('p');
featuresBody.textContent = siteContent['main-content']['features-content'];

const aboutBlock = document.querySelector('.text-content:nth-of-type(2)');
const aboutHead = aboutBlock.querySelector('h4');
aboutHead.textContent = siteContent['main-content']['about-h4'];

const aboutBody = aboutBlock.querySelector('p');
aboutBody.textContent = siteContent['main-content']['about-content'];

const mainImg = document.querySelector('.main-content');
const midImage = mainImg.querySelector("img");
midImage.setAttribute('src', siteContent['main-content']['middle-img-src']);



const servicesBlock = document.querySelector('.bottom-content .text-content:nth-of-type(1)');
const servicesHead = servicesBlock.querySelector('h4');
servicesHead.textContent = siteContent['main-content']['services-h4'];

const servicesBody = servicesBlock.querySelector('p');
servicesBody.textContent = siteContent['main-content']['services-content'];

const productBlock = document.querySelector('.bottom-content .text-content:nth-of-type(2)');
const productHead = productBlock.querySelector('h4');
productHead.textContent = siteContent['main-content']['product-h4'];

const productBody = productBlock.querySelector('p');
productBody.textContent = siteContent['main-content']['product-content'];

const visionBlock = document.querySelector('.bottom-content .text-content:nth-of-type(3)');
const visionHead = visionBlock.querySelector('h4');
visionHead.textContent = siteContent['main-content']['product-h4'];

const visionBody = visionBlock.querySelector('p');
visionBody.textContent = siteContent['main-content']['product-content'];



// const servicesBlock = document.querySelector('.bottom-content', 'text-content');
// const servicesHead = servicesBlock.querySelector('h4');
// servicesHead.textContent = siteContent['main-content']['services-h4'];

// const servicesBody = servicesBlock.querySelector('p');
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






