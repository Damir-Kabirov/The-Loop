import { cartHandler } from "./cart.js";
import { renderHero } from "./hero.js";
import { navigation } from "./navigation.js";
import { sidebar } from "./sidebar.js";
const main = document.querySelector('.main')
const btnBurger = document.querySelector('.burger-menu')
const nav = document.querySelector('.nav')



main.addEventListener('DOMSubtreeModified',()=>{
  cartHandler()
})

btnBurger.addEventListener('click',()=>{
  nav.classList.toggle('db')
})

const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
      sidebar()    
  });    
});
const options = {
  childList: true,
  subtree: true,
  attributes: true,
  characterData: true
};

observer.observe(document.documentElement, options)


renderHero()
sidebar()
navigation()