export function cartHandler(){
    const cart = document.querySelector('.cart')
    const btnClose = document.querySelector('.close')
    const btnOpen = document.querySelector('.cart-btn')
    const cartList = document.querySelector('.cart__body')
    const cardsContainer = document.querySelector('.cards__container')
    const cartbasket = document.querySelector('.basket__counter')
    
    btnOpen.addEventListener('click',()=>{
        cart.style.display='block'
        renderTask()
    })
    btnClose.addEventListener('click',()=>{
     cart.style.display='none'
    })

    

    if(document.querySelector('.cards__container')!==null){
        cardsContainer.addEventListener('click',(event)=>{
            if(event.target.classList.contains('btn_buy')){
                const card = event.target.closest('.card')
              const item = createCartItem(card)
              localStorageAppend(item)
              cartCounter()
            }
         })
     
    }

    if(cartList){
        cartList.addEventListener('click',(event)=>{
            const el = event.target
            if(el.parentElement.className==='product__delete'){
                const product = el.closest('.product-card')
                const idProduct = product.getAttribute('data-id')
                const items = getTask()
               const newItems = items.filter(item=>{
                  return  item.id!==idProduct
               })
               localStorageUpdate(newItems)
               renderTask()
               cartCounter()
            }
        })
    }

    function cartCounter(){
        const count = getTask()
        cartbasket.innerHTML = count.length
       
    }
    cartCounter()
    function createCartItem(card){
        const img = card.querySelector('.card_img').src
        const name = card.querySelector('.card_name').textContent
        const price = card.querySelector('.price').textContent
        const count = card.querySelector('.counter').value
        const id = randomId() 
        return {
            img,
            name,
            price,
            count,
            id
        }
    }

    function localStorageAppend(item){
        const arr = getTask()
            arr.push(item)
            localStorageUpdate(arr)
            renderTask()
        }
    
    


    function localStorageUpdate(arr){
        localStorage.setItem('task',JSON.stringify(arr))
    }

    function getTask(){
        return JSON.parse(localStorage.getItem('task')||'[]')
    }

    function renderTask(){
        cartList.innerHTML=''
        const arr = getTask()
        if(arr.length==0){
            cartList.innerHTML=`<p class="cart_text">Ваша коризина пуста</p>`
          
        }
        else{
            const html =arr.map(toCard).reverse().join('')
            cartList.innerHTML =html
        }
    }

    function toCard(task){
        return `
        <div class="product-card" data-id="${task.id}">
            <h3 class="product__name">${task.name}</h3>
            <p class="product__price">${task.price}&#8381;</p>
            <img src="${task.img}" alt="" class="product__img">
            <input type="number" min="1" class="counter cart__counter" value="${task.count}">
            <button class="product__delete"><img class="delet-img" src="img/delete-svgrepo-com (1).svg" alt=""></button>
        </div>
        `
    }

    const randomId = ()=>{
        return Math.random().toString(36).substring(2,15)+ Math.random().toString(36).substring(2,15)
    }


}

  
 



 