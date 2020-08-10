// Create the element

var script = document.createElement("script");

// Add script content

script.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-599PHZN');";

// Append

document.head.appendChild(script);

//Create the element

var script2 = document.createElement("noscript");

// Add script content
script2.innerHTML = "<iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-599PHZN\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>"

// Append

document.body.appendChild(script2);
document.getElementsByTagName('body').innerHTML = "<footer><p><a href='https://www.parliament.uk/site-information/accessibility/'>Accessibility Statement</a></p></footer>"
