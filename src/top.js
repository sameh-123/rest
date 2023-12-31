import div from './class.js';
export default function top_element(){
    const top=div(['top']);
    const right=div(['right']);
    const sname=div(['sname']);
    const sam=div([]);
    sam.textContent="SAM07A";
    const sub=div(['sub']);
    sub.textContent="Resturant";
    sname.appendChild(sam);
    sname.appendChild(sub);
    right.appendChild(sname);
    const img1=new Image();
    img1.classList.add('img1');
    img1.src='./images/logo2.png';
    img1.alt='logo';
    right.appendChild(img1);
    top.appendChild(right);
    const btns=div(['btns']);
    const btn1=document.createElement('button');
    btn1.classList.add('btn','actv','home');
    btn1.textContent="Home";
    const btn2=document.createElement('button');
    btn2.classList.add('btn','menu');
    btn2.textContent="Menu";
    const btn3=document.createElement('button');
    btn3.classList.add('btn','contact');
    btn3.textContent="Contact";
    btns.append(btn1,btn2,btn3);
    top.appendChild(btns);
    return {'top':top , 'h':btn1 ,'m':btn2 ,'c':btn3};
}
