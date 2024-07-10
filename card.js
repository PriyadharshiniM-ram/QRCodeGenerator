let body=document.body;
body.style.margin="0px";
body.style.padding="0px";
body.style.boxSizing="border-box";

let section = document.createElement("section");
section.style.width="100%";
section.style.height="100vh";
section.style.background="linear-gradient(45deg , #8E44AD,#2471A3)"


let article = document.createElement("article");
article.style.width="80%";
article.style.height="100vh";
article.style.margin="0 auto"
article.style.display="flex"
article.style.alignItems="center"
article.style.justifyContent="center"


let main=document.createElement("main");
main.style.width="380px";
main.style.height="530px";
main.style.display="flex"
main.style.flexDirection="column"
main.style.alignItems="center"
main.style.justifyContent="center"

let divTop=document.createElement("div");
divTop.style.flexBasis="50%"
divTop.style.width="100%"
divTop.style.background="#4071F4"
divTop.style.borderRadius="50px 50px 0px 0px";
divTop.style.display="flex"
divTop.style.alignItems="center"
divTop.style.justifyContent="center"


let image = document.createElement("img");
image.setAttribute("src","https://cdn.pixabay.com/photo/2023/04/15/05/48/woman-7927039_1280.png");
image.style.width="170px";
image.style.height="170px";
image.style.objectFit="cover";
image.style.borderRadius="50%";
image.style.outline="4px solid #fff"
image.style.outlineOffset="5px"


let divBottom=document.createElement("div");
divBottom.style.flexBasis="50%"
divBottom.style.width="100%"
divBottom.style.background="#fff";
divBottom.style.borderRadius="0px 0px 50px 50px";
divBottom.style.boxSizing="border-box";
divBottom.style.padding="25px"


let h=document.createElement("h2");
h.innerText="PRIYA";
h.style.textAlign="center";
let p=document.createElement("p");
p.style.textAlign="center"
p.innerText=" Lorem ipsum dolor, sit amet consectetur  elit. Sed quia earum quisquam."
let btn=document.createElement("button");
btn.innerText="View More";
btn.style.padding="10px 30px"
btn.style.background="#4071F4";
btn.style.color="#fff"
btn.style.fontSize="16px";
btn.style.fontWeight="800"
btn.style.border="none"
btn.style.borderRadius="10px"
btn.style.position="relative";
btn.style.top="6px";
btn.style.left="86px";



divTop.appendChild(image)
main.appendChild(divTop);
divBottom.appendChild(h);
divBottom.appendChild(p);
divBottom.appendChild(btn);
main.appendChild(divBottom);
article.appendChild(main);
section.appendChild(article);
body.append(section)