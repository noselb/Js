"use strict";

let html = document.querySelector("html");
html.setAttribute("lang", "eu");
console.log(html);

let metaUtf8 = document.createElement("meta");
metaUtf8.setAttribute("charset", "UTF-8");
document.head.appendChild(metaUtf8);

let titlePage = document.createElement("title");
titlePage.innerHTML = "Home Work Eight";
document.head.appendChild(titlePage);

//body

let container = document.createElement("div");
container.className = "container";
document.body.prepend(container);

const header = document.createElement("header");
header.classList.add("header");
container.append(header);

const titleContainer = document.createElement("div");
titleContainer.classList.add("title-container");
header.append(titleContainer);

const h1 = document.createElement("h1");
h1.className = "title-container__title";
h1.innerHTML = "Choose Your Option";
titleContainer.appendChild(h1);

const span = document.createElement("span");
span.classList.add("title-container__text");
span.innerHTML =
  "But I must explain to you how all this mistaken idea of denouncing";
titleContainer.appendChild(span);

const main = document.createElement("main");
main.classList.add("main");
container.appendChild(main);

const divFreelancer = document.createElement("div");
divFreelancer.classList.add("block");
main.appendChild(divFreelancer);

let subtitleFreelancer = document.createElement("h3");
subtitleFreelancer.classList.add("subtitle");
subtitleFreelancer.innerHTML = "FREELANCER";
divFreelancer.appendChild(subtitleFreelancer);

let titleFreelancer = document.createElement("h2");
titleFreelancer.classList.add("title");
titleFreelancer.innerHTML = "Initially designed to ";
divFreelancer.appendChild(titleFreelancer);

let spanFreelancer = document.createElement("span");
spanFreelancer.classList.add("span");
spanFreelancer.innerHTML =
  "But I must explain to you how all this mistaken idea of denouncing ";
divFreelancer.appendChild(spanFreelancer);

let buttonFreelancer = document.createElement("button");
buttonFreelancer.classList.add("button");
buttonFreelancer.innerHTML = "START HERE";
divFreelancer.appendChild(buttonFreelancer);

let cloneDivFreelancer = divFreelancer.cloneNode(true);
main.append(cloneDivFreelancer);

cloneDivFreelancer.classList.remove("block");
cloneDivFreelancer.classList.add("studio-block");
cloneDivFreelancer.querySelector("h3").innerHTML = "STUDIO";

let style = document.createElement("style");
style.innerHTML = `

    .header{
        display: flex;
        justify-content: center;
    }

    .main{
        display: flex;
        justify-content: center;
    }

    .title-container{
        display:flex;
        flex-direction: column;
        align-items: center;
        width:464px;
        height:104px
    }

    .title-container__title{
        width:354px;
        height:48px
        font-size: 36px;
        font-weight: 400;
        text-align: center;
    }

    .title-container__text{
        color: #9FA3A7;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
    }

    .block{
        width:401px;
        height:480px;
        display:flex;
        flex-direction: column;
        align-items: center;
        background:#E8E9ED;
    }
    
    .subtitle{
        width:107px;
        height:15px;
        padding-top: 81px;
        color: #9FA3A7;
        font-size: 12px;
        font-weight: 700;
        text-align: center;
    }

    .title{
        width:210px;
        height:92px;
        text-align: center;
        font-size: 36px;
        font-weight: 400;
    }

    .span{
        width:210px;
        height:44px;
        padding-bottom: 56px;
        color: #9FA3A7;
        font-size: 12px;
        font-weight: 400;
        text-align: center;

    }
    


    .button{
        width:176px;
        height:73px;
        border-radius:45%;
        border:3px solid yellow;
        background:white;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
        
        
    }
    .button:hover{
        color:orange;
        cursor:pointer;

    }

    .button{
        opacity: 0;
        animation: ani 8s forwards;
      }
      @keyframes ani {
        0% {opacity: 0;}
        100% {opacity: 1;}
 
         }

         .studio-block{
            width:401px;
            height:480px;
            display:flex;
            flex-direction: column;
            align-items: center;
            background: #8F75BE;
        }

        .studio-block .subtitle{
            color:#FFC80A;
        }

        .studio-block .title{
            color:white;
        }

        .studio-block .span{
            color:white;
        }

        .studio-block .button{
            color:white;
            background: #8F75BE;
        }

`;
document.head.appendChild(style);
