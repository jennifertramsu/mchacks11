/*
KEYWORDS
earth --> The Flat Earth
globe --> The Disk
round --> Not Round
bird --> Government Surveillance Drone
moon --> "moon"
around the world --> from Edge to Edge
sun --> Big Sky Lamp
circumference --> diameter



// "content_scripts":[
//         {
//         "matches": ["*://*//*"],
//         "all_frames": true,
//         "js": ["edit_text.js"],
//         "run_at": "document_end"
//         }
//     ]

*/



//document.getElementById("p").innerHTML = "New text!";

const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

for (let i=0; i < text.length; i++) {
    if(text[i].innerHTML.includes('Tom Brady')) {
        text[i].innerHTML = text[i].innerHTML.replace('Tom Brady', '6-time Super Bowl champion Tom Brady')
    } else if (text[i].innerHTML.includes('Brady')) {
        text[i].innerHTML = text[i].innerHTML.replace('Brady', '6-time Super Bowl champion Tom Brady')
    }
}

