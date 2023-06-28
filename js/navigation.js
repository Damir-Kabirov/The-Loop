import { renderAuth } from "./auth.js";
import { renderChild } from "./child.js";
import { renderHero } from "./hero.js";
import { renderMen } from "./men.js";
import { renderWoomen } from "./women.js";

const mainContainer = document.querySelector('.main')
const nav = document.querySelector('.nav')
const authBtn = document.querySelector('.auth-btn')

export function navigation(){
    nav.addEventListener('click',(event)=>{
        event.preventDefault()
       switch (event.target.text) {
        case 'Главная':
            renderHero()
            break;
        case 'Для мужчин':
            renderMen()
            break;
        case 'Для женщин':
            renderWoomen()
            break;
        case 'Для детей':
           renderChild()
            break;
        default:
            break;
       }
    })
    authBtn.addEventListener('click',()=>{
        renderAuth()
    })
    
}
