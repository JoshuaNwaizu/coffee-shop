
$('.ri-close-line').click(function () { 
   $('#navLinks').css('right', '-200px');
    
});

$('.ri-menu-5-line').click(function () { 
   $('#navLinks').css('right', '0');
    
});


 const sr = ScrollReveal ({
   distance: '65px',
   duration: 2600,
   delay: 450,
   reset: true
})


//sr.reveal('.header', {delay: 200, origin:'bottom'})
sr.reveal('.text-box', {delay: 100, origin:'bottom'})
sr.reveal('.coffee', {delay: 100, origin:'bottom'})
sr.reveal('.coffee-col', {delay: 100, origin:'bottom'})
sr.reveal('.coffee-shop', {delay: 100, origin:'bottom'})
sr.reveal('.coffeeshop-col', {delay: 100, origin:'bottom'})
sr.reveal('.facilities', {delay: 100, origin:'bottom'})
sr.reveal('.facilities-col', {delay: 100, origin:'bottom'})
sr.reveal('.testimonials', {delay: 100, origin:'bottom'})
sr.reveal('.testimonials-col', {delay: 100, origin:'bottom'})
sr.reveal('.cta', {delay: 100, origin:'bottom'})
sr.reveal('.p-btn', {delay: 100, origin:'left'})
sr.reveal('.footer', {delay: 100, origin:'bottom'})
sr.reveal('.logo', {delay: 100, origin:'top'})
sr.reveal('.container', {delay: 100, origin:'bottom'})
sr.reveal('.blog-left', {delay: 100, origin:'bottom'})
sr.reveal('.blog-right', {delay: 100, origin:'right'})
sr.reveal('.comment-box', {delay: 100, origin:'bottom'})





