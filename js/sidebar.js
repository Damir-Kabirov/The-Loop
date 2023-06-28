export function sidebar(){
if(document.querySelector('.hero')!==null){

    const downBtn = document.querySelector('.down-button')
    const upBtn = document.querySelector('.up-button')
    const sidebar = document.querySelector('.sidebar')
    const mainSlide = document.querySelector('.main-slide')
    const counterSlide = mainSlide.querySelectorAll('div').length
    const container = document.querySelector('.hero')
    let activeSladeIndex = 0
    sidebar.style.top=`-${(counterSlide-1)*100}vh`
    
    downBtn.addEventListener('click',()=>{
        changeSlide('down')
    })
    upBtn.addEventListener('click',()=>{
        changeSlide('up')
    })
    
    function changeSlide(derection){
        if(derection==='up'){
            activeSladeIndex++
            if(activeSladeIndex===counterSlide){
                activeSladeIndex=0
            }
        }
        if(derection==='down'){
            activeSladeIndex--
            if(activeSladeIndex<0){
                activeSladeIndex=counterSlide-1
            }
        }
        const hight = container.clientHeight
    
        mainSlide.style.transform=`translateY(-${activeSladeIndex*hight}px)`
        sidebar.style.transform=`translateY(${activeSladeIndex*hight}px)`
    }

}

}