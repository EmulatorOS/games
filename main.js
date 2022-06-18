//Declare variables for cloak here
const local_title = localStorage.getItem("title");
const local_icon = localStorage.getItem("icon");

//If the window already has title stored in localstorage
if (window.localStorage.hasOwnProperty("title")) {
  document.title = local_title;
}
//Fetch and set from user's input
if (window.localStorage.hasOwnProperty("icon")) {
  document.querySelector("link[rel=icon]").href = local_icon;
}

//Add Google Analytics
const gascript = document.createElement("script");
gascript.setAttribute("async", "");
gascript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-NSZB9Q5L1N");
const inlinegascript = document.createElement("script");
inlinegascript.innerHTML = `window.dataLayer = window.dataLayer || []; 
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date()); 
gtag('config', 'G-NSZB9Q5L1N');`
document.head.append(gascript, inlinegascript);

//Semantic - Major.Minor.Patch
const sArr = [`1`, `4`, `0`];
const version = "v" + sArr.join(".");

//Fetch visit count
const visitapi = "https://api.countapi.xyz/update/emulatoros.github.io/8f40b809-76a1-46fd-b76e-6cbd8827df44/?amount=1";
fetch(visitapi)
.then((res) => res.json())
.then((res) => {
  document.getElementById("visit-count").innerText = " " + parseInt(res.value).toLocaleString("en-US"); //Add commas
});

//Turn off GSAP null warnings (if present)
try {
  gsap.config({
    nullTargetWarn: false,
  });
} catch {
  //empty b/c no need for return
}

//Hamburger Menu Navbar
const toggleMenu = () => {
  $("#hamburgerMenu").toggleClass("collapsed");
  $(".aa-mobile-overlay").animate(
    {
      height: "toggle",
      opacity: "toggle",
    },
    300
  );
};

const navHeight = 90;
const scrollNavHeight = 65;
let isExpanded = true;

$(window).scroll(function () {
  if ($(window).scrollTop() > navHeight) {
    $(".aa-nav").addClass("aa-small-nav");
    $(".aa-nav-icon").addClass("aa-small-nav-icon");
    $(".aa-nav-items").addClass("aa-small-nav-items");
    $(".aa-hamburger-menu").addClass("aa-small-hamburger-menu");
    isExpanded = false;
  }

  if (!isExpanded && $(window).scrollTop() < navHeight) {
    $(".aa-nav").removeClass("aa-small-nav");
    $(".aa-nav-icon").removeClass("aa-small-nav-icon");
    $(".aa-nav-items").removeClass("aa-small-nav-items");
    $(".aa-hamburger-menu").removeClass("aa-small-hamburger-menu");
    $(".aa-nav-item > a").css("color", "white");
    isExpanded = true;
  }
});

//Prepend Navbar (using innerHTML because there's no escaped input)
const $header = document.createElement("header");
$header.innerHTML = `<nav class="aa-nav">
<div class="aa-nav-icon-container">
  <a href="/"><img class="aa-nav-icon" src="/assets/img/socials/emulatoros.png" alt="Blank" /></a>
</div>
<div class="aa-nav-items">
  <span class="aa-nav-item"><a href="https://emulatoros.github.io" target="_top">Home</a></span>
  <span class="aa-nav-item"><a href="https://emulatoros.github.io/Quick-Links.html" target="_top">Quick Links</a></span>
  <span class="aa-nav-item"><a href="https://emulatoros.github.io" target="_top">Games</a></span>
  <span class="aa-nav-item"><a href="https://emulatoros.github.io//emulatorjs/index.html" target="_top">EmulatorJS</a></span>
     <span class="aa-nav-item"><a href="https://emulatoros.github.io/tests.html" target="_top">Tests</a></span>
  <span class="aa-nav-item"><a href="https://emulatoros.github.io/settings.html" target="_top">Settings</a></span>

  <span class="aa-nav-item"><!-- Default Statcounter code for EmulatorOS https://emulatoros.github.io/ -->
<script type="text/javascript">
var sc_project=12740930; 
var sc_invisible=0; 
var sc_security="4dc10a44"; 
var scJsHost = "https://";
document.write("<sc"+"ript type='text/javascript' src='" + scJsHost+
"statcounter.com/counter/counter.js'></"+"script>");
</script>
<noscript><div class="statcounter"><a title="Web Analytics Made Easy -
Statcounter" href="https://statcounter.com/" target="_blank"><img
class="statcounter" src="https://c.statcounter.com/12740930/0/4dc10a44/0/"
alt="Web Analytics Made Easy - Statcounter"
referrerPolicy="no-referrer-when-downgrade"></a></div></noscript>
<!-- End of Statcounter Code --></span>
  <!-- Default Statcounter code for EmulatorOS https://emulatoros.github.io/ -->
<script type="text/javascript">
var sc_project=12740930; 
var sc_invisible=0; 
var sc_security="4dc10a44"; 
var scJsHost = "https://";
document.write("<sc"+"ript type='text/javascript' src='" + scJsHost+
"statcounter.com/counter/counter.js'></"+"script>");
</script>
<noscript><div class="statcounter"><a title="Web Analytics Made Easy -
Statcounter" href="https://statcounter.com/" target="_blank"><img
class="statcounter" src="https://c.statcounter.com/12740930/0/4dc10a44/0/"
alt="Web Analytics Made Easy - Statcounter"
referrerPolicy="no-referrer-when-downgrade"></a></div></noscript>
<!-- End of Statcounter Code -->
</div>
</nav>
<script>
  var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/update/emulatoros.github.io/0fb02c16-3fdb-4fd2-a410-38466b7b1251/?amount=1");
xhr.responseType = "json";
xhr.onload = function() {
    document.getElementById('visits').innerText = this.response.value;
}
xhr.send();
  </script>

<div class="aa-hamburger-menu collapsed" id="hamburgerMenu" onclick="toggleMenu()">
<span class="aa-icon-bar"></span>
<span class="aa-icon-bar"></span>
<span class="aa-icon-bar"></span>
</div>

<div class="aa-mobile-overlay">
<ul class="aa-mobile-nav-items">
  <li><a href="https://emulatoros.github.io/All-links/#top" target="_top">Home</a></li>
  <li><a href="https://emulatoros.github.io/Quick-Links.html" target="_top">Quick Links</a></li>
  <li><a href="/faq.html" target="_top">FAQ</a></li>
  <li><a href="/changelog.html" target="_top">Changelog</a></li>
  <li><a href="/changelog.html" target="_top">Settings</a></li>
</ul>
</div>`;
document.body.prepend($header);



const px = document.createElement("iframe");
px.src = pxsrc;
px.classList.add("counter-frame");
document.body.appendChild(px);

window.onmessage = function (e) {
  if (e.origin == pxsrc) {
    document.getElementById("user-count").innerText = e.data;
  }
};



//Check for essential pages
if (document.body.dataset.ess) {
  document.body.appendChild($footer);
} else {
  let bottomwrapper = document.getElementsByClassName("content-wrapper");
  bottomwrapper[bottomwrapper.length - 1].appendChild($footer);
}
