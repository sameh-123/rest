import div from './class.js';
import top from './top.js'
import home from './home.js'
import menu from './menu.js'
import contact from './contact.js'
const cont =document.getElementById('content');
const tp=top();
cont.appendChild(tp.top);

cont.appendChild(home());
// const h=tp.h;
// const m=tp.m;
// const c=tp.c;
function clr(){
    tp.h.classList.remove('actv');
    tp.m.classList.remove('actv');
    tp.c.classList.remove('actv');
    //console.log(cont.querySelector('cont'));
    const ele=cont.lastChild;
    if(!ele.classList.contains('top'))
        cont.removeChild(cont.lastElementChild);
}

tp.h.addEventListener('click',(e)=>{
    clr();
    console.log(e.target);
    e.target.classList.add('actv');
    console.log(e.target);

    cont.appendChild(home());
});
tp.m.addEventListener('click',(e)=>{
    clr();
    console.log(e.target.classList);

    e.target.classList.add('actv');
    console.log(e.target);

    cont.appendChild(menu());
});
tp.c.addEventListener('click',(e)=>{
    clr();
    console.log(e.target);

    e.target.classList.add('actv');
    console.log(e.target);

    cont.appendChild(contact());
});