import div from './class.js'
export default function component(){
    //const cont =div(['cont']);
    const cont=document.createElement('div');
    cont.classList.add('cont');
    const img1=new Image();
    img1.src='./images/pngegg.png';
    img1.classList.add('img3')
    img1.alt='waiter';
    cont.appendChild(img1);
    const txt=div(['homecont']);
    txt.textContent="SAM07A Resturant makes the best Egyptian food and the most famous dishes in the world ."
    cont.appendChild(txt);
    return cont;
}