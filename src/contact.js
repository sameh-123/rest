import div from './class.js'
export default function expo(){
    const cont =div(['cont']);
    const conta =div(['conta']);
    const d1=div(['co1']);
    const img1=new Image();
    img1.src='./images/facebook.png';
    img1.classList.add('img4');
    img1.alt='facebook';
    const ln1=document.createElement('a');
    ln1.classList.add('ln');
    ln1.textContent='Facebook';
    ln1.href='#';
    d1.append(img1,ln1);
    const d2=div(['co1']);
    const img2=new Image();
    img2.src='./images/whats.png';
    img2.classList.add('img4');
    img2.alt='whatsapp';
    const ln2=document.createElement('a');
    ln2.classList.add('ln');
    ln2.textContent='Whatsapp';
    ln2.href='#';
    d2.append(img2,ln2);
    const d3=div(['co1']);
    const img3=new Image();
    img3.src='./images/phone.png';
    img3.classList.add('img4');
    img3.alt='phone';
    const ln3=document.createElement('a');
    ln3.classList.add('ln');
    ln3.textContent='01564852903';
    ln3.href='#';
    d3.append(img3,ln3);
    conta.append(d1,d2,d3);
    cont.appendChild(conta);
    return cont;
}