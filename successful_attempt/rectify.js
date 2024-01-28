imgs = document.getElementsByTagName("img");

replacement="https://miro.medium.com/v2/resize:fit:591/1*3OEaIFUdjcCzFWxAtl2ZVw.jpeg"

//replace all the attributes of img with replacement url
for (const i of imgs){
    i.src=replacement;
    i.srcset=replacement;
}

const all_text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

for (let i=0; i < all_text.length; i++) {
    if(all_text[i].innerHTML.includes('Tom Brady')) {
        all_text[i].innerHTML = all_text[i].innerHTML.replace('Tom Brady', '6-time Super Bowl champion Tom Brady')
    } else if (all_text[i].innerHTML.includes('Brady')) {
        all_text[i].innerHTML = all_text[i].innerHTML.replace('Brady', '6-time Super Bowl champion Tom Brady')
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
