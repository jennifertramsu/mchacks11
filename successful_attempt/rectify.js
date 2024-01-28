

const all_text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

for (let i=0; i < all_text.length; i++) {
    if(all_text[i].innerHTML.includes('Earth')) {
        let regex1 = new RegExp("Earth","g")
        all_text[i].innerHTML = all_text[i].innerHTML.replace(regex1, 'Earth (which is flat)')
    }if (all_text[i].innerHTML.includes('globe')) {
        let regex2 = new RegExp("globe","g")
        all_text[i].innerHTML = all_text[i].innerHTML.replace(regex2, 'disk')
    }if (all_text[i].innerHTML.includes('round')) {
        let regex3 = new RegExp("round","g")
        all_text[i].innerHTML = all_text[i].innerHTML.replace(regex3, 'not round')
    }if (all_text[i].innerHTML.includes('bird')) {
        let regex5 = new RegExp("bird","g")
        all_text[i].innerHTML = all_text[i].innerHTML.replace(regex5, 'Government Surveillance Drone')
    }if (all_text[i].innerHTML.includes('around the world')) {
        let regex6 = new RegExp("around the world","g")
        all_text[i].innerHTML = all_text[i].innerHTML.replace(regex6, 'from Edge to Edge')
    }if (all_text[i].innerHTML.includes('sun')) {
        let regex7 = new RegExp("sun","g")
        all_text[i].innerHTML = all_text[i].innerHTML.replace(regex7, 'Big Sky Lamp')
    }if (all_text[i].innerHTML.includes('circumference')) {
        let regex8 = new RegExp("circumference","g")
        all_text[i].innerHTML = all_text[i].innerHTML.replace(regex8, 'diameter')
    }if (all_text[i].innerHTML.includes('trees')) {
        let regex9 = new RegExp("trees","g")
        all_text[i].innerHTML = all_text[i].innerHTML.replace(regex9, 'artificial air generators')
    }if (all_text[i].innerHTML.includes('global')) {
        let regex10 = new RegExp("global","g")
        all_text[i].innerHTML = all_text[i].innerHTML.replace(regex10, 'lateral')
    }if (all_text[i].innerHTML.includes('sphere')) {
        let regex4 = new RegExp("sphere","g")
        all_text[i].innerHTML = all_text[i].innerHTML.replace(regex4, 'splane')
    }
}
//imgs = document.getElementsByTagName("img");
imgs = document.querySelectorAll("img", "d2l-organization-image");

// replacement="https://miro.medium.com/v2/resize:fit:591/1*3OEaIFUdjcCzFWxAtl2ZVw.jpeg"

//replace all the attributes of img with replacement url
for (const i of imgs){
    // Randomly select a number between 1 and 99
    const random = Math.floor(Math.random() * 99) + 1;
    
    // Retrieve image from the local images folder
    replacement = chrome.runtime.getURL("images/flat_earth/" + random + ".jpg");

    // Replace the image
    i.src = replacement;
    i.srcset = replacement;
}
//const text=document.querySelectorAll("h1,h2,h3,h4,h5,p,li,td,caption,span,a")
//for(let i=0; i<text.length;i++){
  //  if(text[i].innerHTML.includes("Tom Brady")){
    //    text[i].innerHTML=text[i].innerHTML.replace("Tom Brady","6-time Suuper Bowl Chamption Tom Brady")
    //}else if(text[i].innerHTML.includes("Brady")){
      //  text[i].innerHTML=text[i].innerHTML.replace("Brady","6-time Super Bowl Champion Tom Brady")
    //}
//}