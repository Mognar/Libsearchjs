str = document.title;
if (document.location.href == "https://parliament.preview.summon.serialssolutions.com/#!/" && str.startsWith("Home")) {
document.body.style.height = '98%';

$('.footer').append("<a ng-href='https://www.parliament.uk/site-information/accessibility/' href='https://www.parliament.uk/site-information/accessibility/'>Accessibility Statement</a>");
}
