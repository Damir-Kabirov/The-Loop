export function renderWoomen(){
    const main = document.querySelector('.main')
    main.innerHTML=''
    const html =`
    
    <scetion class="women">
    <div class="container">
      <div class="categori">
          <a href="#" class="category_card">
              <img src="img/catalog/short-women.jpg" alt="" class="category_img">
              <p class="category_name">Футболки</p>
          </a>
          <a href="#" class="category_card">
              <img src="img/catalog/trousers-women.jpg" alt="" class="category_img">
              <p class="category_name">Брюки</p>
          </a>
          <a href="#" class="category_card">
              <img src="img/catalog/skirt.jpg" alt="" class="category_img">
              <p class="category_name">Юбки</p>
          </a>
          <a href="#" class="category_card">
              <img src="img/catalog/jaket-women.webp" alt="" class="category_img">
              <p class="category_name">Верхняя одежда</p>
          </a>
          <a href="#" class="category_card">
              <img src="img/catalog/dres.jpg" alt="" class="category_img">
              <p class="category_name">Платья</p>
          </a>
          <a href="#" class="category_card">
              <img src="img/catalog/sport-women.jpg" alt="" class="category_img">
              <p class="category_name">Спорт</p>
          </a>
          <a href="#" class="category_card">
              <img src="img/catalog/boot-women.jpg" alt="" class="category_img">
              <p class="category_name">Обувь</p>
          </a>
          <a href="#" class="category_card">
              <img src="img/catalog/bag-women.jpg" alt="" class="category_img">
              <p class="category_name">Аксессуары</p>
          </a>

      </div>
  </div>
  </scetion>  
    `
    main.innerHTML= html


}