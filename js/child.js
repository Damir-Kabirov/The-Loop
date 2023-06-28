export function renderChild(){
    const main = document.querySelector('.main')
    main.innerHTML=''
    const items =  fetch('js/item.json').then(res=>res.json()).then((data)=>{return data.children.arr })
 items.then(arr=>{
    let itemsHtml = ''
       arr.forEach(el => {
            itemsHtml+=`
            <div class="card">
            <span class="benefit">Выгодно</span>
            <img src="${el.img}" alt="" class="card_img">
            <button class="like">
                <svg fill="currentColor" class="ali-icons_SvgIcon__icon__75ocax ali-icons_SvgIcon__size_M__75ocax SnowHeaderIconLike_SnowHeaderIconLike__icon__14ikt" viewBox="0 0 32 32"><path d="M30 9.5a12.64 12.64 0 01-1.72 5.57 42.99 42.99 0 01-4 6 92.666 92.666 0 01-7.6 8.55 1 1 0 01-.7.29 1 1 0 01-.7-.29 90.393 90.393 0 01-7.6-8.53 41.598 41.598 0 01-4-6A12.67 12.67 0 012 9.5a7.47 7.47 0 0114-3.65A7.47 7.47 0 0130 9.5zM9.47 4A5.49 5.49 0 004 9.5a11 11 0 001.49 4.66 39.816 39.816 0 003.79 5.74A88.64 88.64 0 0016 27.52a87.916 87.916 0 006.71-7.64c1.43-1.8 2.702-3.72 3.8-5.74A11 11 0 0028 9.5a5.47 5.47 0 00-10.25-2.68 2 2 0 01-3.5 0A5.48 5.48 0 009.47 4z"></path></svg>
            </button>
            <div class="info">
                <p class="articul">
                    Арт.86013446
                </p>
                <a href="#" class="star">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="j5e"
                     style="color: rgb(255, 184, 0);">
                        <path fill="currentColor" d="M8 2a1 1 0 0 1 .87.508l1.538 2.723 2.782.537a1 1 0 0 1 
                        .538 1.667L11.711 9.58l.512 3.266A1 1 0 0 1 10.8 13.9L8 12.548
                         5.2 13.9a1 1 0 0 1-1.423-1.055l.512-3.266-2.017-2.144a1 1 
                         0 0 1 .538-1.667l2.782-.537 1.537-2.723A1 1 0 0 1 8 2Z"></path></svg>
                    <span>3.7</span>
                </a>
                <a href="#" class="coment">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="j5e" style="color:
                     rgb(112, 127, 141);"><path fill="currentColor" d="M8 4C5.803 4 4 5.803 4 8c0 
                     .731.226 1.41.608 2.034a1 1 0 0 1 .147.522c0 .506-.07.934-.19 1.338.431-.069.76-.167.964-.276a1 
                     1 0 0 1 .888-.027C6.984 11.851 7.464 12 8 12c2.197 0 4-1.803 4-4s-1.803-4-4-4ZM2 8c0-3.301 2.699-6
                      6-6s6 2.699 6 6-2.699 6-6 6c-.757 0-1.41-.176-1.998-.41a6.23 6.23 
                    0 0 1-1.265.3c-.593.086-1.208.113-1.743.11a1 1 0 0 1-.888-1.447c.429-.859.6-1.248.64-1.745A5.769 
                    5.769 0 0 1 2 8Z"></path></svg>
                    <span>12</span>
                </a>
            </div>
            <p class="card_name">${el.name}</p>
            <span class="available">В наличии</span>
            <span class="last_price">${el.price}&#8381;</span>
            <strong class="price">${el.lastPrice}&#8381;</strong>
            <div class="sum">
                <div class="sum_text">
                    <span class="sum__price">Сумма 1400&#8381;</span>
                    <span class="sum__benefit"> Выгода ${el.lastPrice-el.price}&#8381;</span>
                </div>
                <input type="number" min="1" class="counter" placeholder="1" value="1">
            </div>
            <button class="btn_buy btn_shop">В корзину</button>
        </div>
            `
        });
        return itemsHtml
    })
    .then(html=>{
        const HTML = `
        <section class="child">
        <div class="collection">
          <div class="collection_card collection_men">
              <div class="collection_info">
                  <h4 class="collection_title"><strong>Мужская</strong> КОЛЛЕКЦИЯ</h4>
                  <p class="collection_text">Обувь, полуверы, костюмы</p>
                  <a href="#" class="collection_btn">&rarr;</a>
              </div>
              <img src="img/catalog/men.png" alt="" class="collection_img">
          </div>
          <div class="collection_card collection_women">
              <div class="collection_info">
                  <h4 class="collection_title"><strong>Женская</strong> КОЛЛЕКЦИЯ</h4>
                  <p class="collection_text">Обувь, полуверы, костюмы</p>
                  <a href="#" class="collection_btn">&rarr;</a>
              </div>
              <img src="img/catalog/women.png" alt="" class="collection_img">
          </div>
      </div>
      <div class="container">
        <div class="catalog">
          <h2 class="catalog__title">Детская одежда</h2>
          <div class="cards__container">
            ${html}
          </div>
          </div>
        </div>
      </div>
      </section>
        `
        main.innerHTML= HTML
    })
    
    


}