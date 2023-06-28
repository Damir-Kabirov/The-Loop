export function renderAuth(){
    const main = document.querySelector('.main')
    main.innerHTML=''
    const html =`
    
    <section class="auth">
        <div class="auth__card">
          <h4 class="auth__title">Авторизация</h4>
          <form action="#" class="auth__form">
            <input id="login" type="text" class="auth__input" placeholder="Ведите логин">
            <input id="password" type="password" class="auth__input" placeholder="Ведеите пароль">
            <button class="btn-auth">Войти</button>
          </form>
        </div>
      </section>

    `
    main.innerHTML= html


}