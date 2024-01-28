const all_text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

for (let i=0; i < all_text.length; i++) {
    if(all_text[i].innerHTML.includes('Tom Brady')) {
        all_text[i].innerHTML = all_text[i].innerHTML.replace('Tom Brady', '6-time Super Bowl champion Tom Brady')
    } else if (all_text[i].innerHTML.includes('Brady')) {
        all_text[i].innerHTML = all_text[i].innerHTML.replace('Brady', '6-time Super Bowl champion Tom Brady')
    }
}

