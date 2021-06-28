let lang = document.createElement('lang');
lang.setAttribute =('lang', 'en');
document.head.appendChild(lang);

let title= document.createElement('title');
title.innerHTML='Choose Your Option';
document.head.appendChild(title);

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute =('charset', 'UTF-8');
document.head.appendChild(metaUtf8);

let div = document.createElement('div');
div.classList.add('block');
document.body.appendChild(div);


let div1 = document.createElement('div');
div1.classList.add('block1');
div.appendChild(div1);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
div1.appendChild(h1);

let h4 = document.createElement('h4');
h4.innerHTML = 'But i must explain to you how all this mistaken idea of denouncing';
div1.appendChild(h4);

let div2 = document.createElement('div');
div2.classList.add('block2');
div.appendChild(div2);

let div3 = document.createElement('div');
div3.classList.add('block3');
div2.appendChild(div3);


let h2div3 = document.createElement('h2');
h2div3.innerHTML = 'Frilancer';
div3.appendChild(h2div3);

let h3div3 = document.createElement('h3');
h3div3.innerHTML = 'Initially <br/> designed to';
div3.appendChild(h3div3);

let pdiv3 = document.createElement('p');
pdiv3.innerHTML = 'But i must explain to you how all this <br/> mistaken idea of denouncing';
div3.appendChild(pdiv3);

let button1 = document.createElement('button');
button1.innerHTML = 'Start here';
div3.appendChild(button1);

let div4 = document.createElement('div');
div4.classList.add('block4');
div2.appendChild(div4);


let h2div4 = document.createElement('h2');
h2div4.innerHTML = 'Studio';
div4.appendChild(h2div4);

let h3div4 = document.createElement('h3');
h3div4.innerHTML = 'Initially <br/> designed to';
div4.appendChild(h3div4);

let pdiv4 = document.createElement('p');
pdiv4.innerHTML = 'But i must explain to you how all this <br/> mistaken idea of denouncing';
div4.appendChild(pdiv4);

let button2 = document.createElement('button');
button2.innerHTML = 'Start here';
button2.getAttribute('type', 'button');
div4.appendChild(button2);

let style = document.createElement('style');
style.innerHTML=`
h1{
    font-family: sans-serif, Arvo;
    font-size: 36px;
    font-weight: 400;
    line-height: 0px;
}
h2{
    font-family: sans-serif, Monserrat;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color:#9FA3A7;
    letter-spaicing: 3px;
}

h3{
    font-family: sans-serif, Arvo;
    font-size: 36px;
    font-weight: 400;
    color:#212121;
    line-height: 46px;
}
h4{
    font-family: sans-serif, Open-Sans;
    font-size: 14px;
    font-weight: 400;
    color:#9FA3A7;
    line-height: 26px;
    padding-bottom: 30px;
 
}
p{
    font-family: sans-serif, Open-Sans;
    font-size: 12px;
    font-weight: 400;
    color:#9FA3A7;
    line-height: 22px;
    padding-bottom: 50px;
}


.block{
    weight: 800px;
    height: 630px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.block1{
    text-align: center;


}
.block2{
    weight: 800px;
    height: 480px;
    display:flex;
    flex-direction: row;
    border: 1px solid #E8E9ED;
    border-radius: 10px;

}
.block3{
    text-align: center;
    padding: 60px 90px;
 
      
}
.block4{
    text-align: center;
    background-color: #8F75BE;
    padding: 60px 90px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
      
}
.block4 h2{
    color: #FFC80A;
}
.block4 h3{
    color: #FFFFFF;
}
.block4 p{
    color: #FFFFFF;
}
.block4 button{
    background-color: #8F75BE;
    color: #FFFFFF;
}

button{
    
    border: 2px solid #FFC80A;
    border-radius: 30px;
    background-color: white;
    font-family: sans-serif, Monserrat;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    padding: 20px;
    text-align: center;
}
button:hover{
    background-color: #FFC80A;
}

`
document.head.appendChild(style)
