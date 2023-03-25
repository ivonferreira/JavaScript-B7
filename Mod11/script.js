const c = (el)=>document.querySelector(el);// Funcão para reduzir codigo transformando documente.querySelector na variavel c.
const cs =(el)=>document.querySelectorAll(el);// querySelectorAll em cs

pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener('click',(e)=>{
        e.preventDefault(); // Evita que faça a função Default de atualizar a pagina

        c('.pizzaWindowArea').style.opacity = 0;// Opacidade 0 Para criar animação
        c('.pizzaWindowArea').style.display = 'flex';//Aparece a janela modal
        setTimeout(()=>{c('.pizzaWindowArea').style.opacity = 1;},200)// apos 200 ms a opacidade muda para 100%.
        
    })
    
    c('.pizza-area').append(pizzaItem);
});