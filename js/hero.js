export function renderHero(){
    const main = document.querySelector('.main')
    main.innerHTML=''
    const html =`
    <section class="hero">
            <div class="sidebar">
                <div
                  style="background: linear-gradient(90deg, rgba(9,22,18,1) 6%, rgb(201, 168, 86) 96%); ">
                  <h1>Compass of the Rising Gale</h1>
                  <p>Windranger</p>
                </div>
                <div
                  style="background: linear-gradient(90deg, rgb(192, 198, 190) 11%, rgb(127, 108, 103) 79%); ">
                  <h1>The Eminence of Ristul </h1>
                  <p>Queen of Pain</p>
                </div>
                <div style="background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(122,86,162,1) 100%, rgba(0,212,255,1) 100%); ">
                  <h1>Voidstorm Asylum</h1>
                  <p>Razor</p>
                </div>
                <div style="background: linear-gradient(90deg, rgb(197, 197, 101) 6%, rgb(118, 129, 85) 96%); ">
                  <h1>Bladeform Legacy</h1>
                  <p>Juggernaut</p>
                </div>
              </div>
              <div class="main-slide">
                <div
                  style="
                    background-image: url('https://image.nyigde.com/photos/board/38/board/1803_2_1024.jpg');
                    background-size: cover;
                  "
                ></div>
                <div
                  style="
                    background-image: url('https://1001zaponka.ru/wp-content/uploads/5/a/a/5aa867d9770b00bd275ca7eb04c1bff5.jpeg');
                  "
                ></div>
                <div
                  style="
                    background-image: url('http://malyshok-m.ru/image/data/dezda.jpg');
                  "
                ></div>
                <div
                  style="
                    background-image: url('https://goltune.com/wp-content/uploads/2019/07/6.29.16-Hala-Market-rose-to-425b-1024x683.jpg');
                  "
                ></div>
              </div>
              <div class="controls">
                <button class="down-button sidebar__btn">
                  <i class="fas fa-arrow-down"></i>
                </button>
                <button class="up-button sidebar__btn">
                  <i class="fas fa-arrow-up"></i>
                </button>
              </div>
        </section>
    `
    main.innerHTML= html
}