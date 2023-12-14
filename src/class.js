export default function creatdiv(a){
    const div=document.createElement('div');
    for(let i=0;i<a.length;i++){
        div.classList.add(a[i]);
    }
    return div;
}