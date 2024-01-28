//imgs = document.getElementsByTagName("img");
imgs = document.querySelectorAll("img", "d2l-organization-image");

// replacement="https://miro.medium.com/v2/resize:fit:591/1*3OEaIFUdjcCzFWxAtl2ZVw.jpeg"

//replace all the attributes of img with replacement url
for (const i of imgs){
    // Randomly select a number between 1 and 99
    const random = Math.floor(Math.random() * 99) + 1;
    
    // Retrieve image from the local images folder
    replacement = chrome.runtime.getURL("images/mechanical_birds/" + random + ".jpg");

    // Replace the image
    i.src = replacement;
    i.srcset = replacement;
}

const all_text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

for (let i=0; i < all_text.length; i++) {
    if(all_text[i].innerHTML.includes('Earth')) {
        all_text[i].innerHTML = all_text[i].innerHTML.replace('Earth', 'Earth (which is flat)')
    }if (all_text[i].innerHTML.includes('globe')) {
        all_text[i].innerHTML = all_text[i].innerHTML.replace('globe', 'disk')
    }if (all_text[i].innerHTML.includes('round')) {
        all_text[i].innerHTML = all_text[i].innerHTML.replace('round', 'not round')
    }if (all_text[i].innerHTML.includes('bird')) {
        all_text[i].innerHTML = all_text[i].innerHTML.replace('bird', 'Government Surveillance Drone')
    }if (all_text[i].innerHTML.includes('around the world')) {
        all_text[i].innerHTML = all_text[i].innerHTML.replace('around the world', 'from Edge to Edge')
    }if (all_text[i].innerHTML.includes('sun')) {
        all_text[i].innerHTML = all_text[i].innerHTML.replace('sun', 'Big Sky Lamp')
    }if (all_text[i].innerHTML.includes('circumference')) {
        all_text[i].innerHTML = all_text[i].innerHTML.replace('circumference', 'diameter')
    }if (all_text[i].innerHTML.includes('trees')) {
        all_text[i].innerHTML = all_text[i].innerHTML.replace('trees', 'artificial air generators')
    }if (all_text[i].innerHTML.includes('global')) {
        all_text[i].innerHTML = all_text[i].innerHTML.replace('global', 'lateral')
    }if (all_text[i].innerHTML.includes('hemisphere')) {
        all_text[i].innerHTML = all_text[i].innerHTML.replace('hemisphere', 'hemisplane')
    }if (all_text[i].innerHTML.includes('atmosphere')) {
        all_text[i].innerHTML = all_text[i].innerHTML.replace('atmosphere', 'atmosplane')
    }
}

//const text=document.querySelectorAll("h1,h2,h3,h4,h5,p,li,td,caption,span,a")
//for(let i=0; i<text.length;i++){
  //  if(text[i].innerHTML.includes("Tom Brady")){
    //    text[i].innerHTML=text[i].innerHTML.replace("Tom Brady","6-time Suuper Bowl Chamption Tom Brady")
    //}else if(text[i].innerHTML.includes("Brady")){
      //  text[i].innerHTML=text[i].innerHTML.replace("Brady","6-time Super Bowl Champion Tom Brady")
    //}
//}