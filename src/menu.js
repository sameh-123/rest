import div from './class.js';
let a=['Ma7shi','Pizza','Shawarma','Koshari','Falafel','7awawshi'];
let p=[5,7,1.5,0.5,0.1,0.3];
export default function compo(){
    const img1=new Image();
    img1.src='./images/pizza.png';
    img1.alt='pizza';
    img1.classList.add('img3');
    const img2=new Image();
    img2.src='./images/pizza1.png';
    img2.alt='pizza';
    img2.classList.add('img3');
    const cont=div(['cont']);
    const menu=div(['menuecont']);
    for(let i=1;i<=6;i++){
        const item=div(['item']);
        const it=div([`item${i}`]);
        const txt=div(['txt']);
        txt.textContent=a[i-1];
        const sub=div(['subtxt']);
        sub.textContent=`${p[i-1]}$`;
        item.append(it,txt,sub);
        menu.appendChild(item);
    }
    cont.append(img1,menu,img2);
    return cont;
}