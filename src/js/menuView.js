import view from './view';

class MenuView extends view {
  generateMarkup() {
    return `
    <div class="menu">
    <h1 class="menu__header">Our Menu</h1>
      <p class="menu__subheader">
        We consider all the drivers of change gives you the components <br /> you need to change to
        create a truly happens.
      </p>

      <div class="menu__cards">
        <div class="menu__card">
          <figure class="menu__img">
            <img src="./img/menu/1.png" alt="Food" />
          </figure>

          <div class="menu__text">
            <p class="menu__price">$ 5.89</p>
            <h2 class="menu__title">Mint Lemonade</h2>
            <p class="menu__description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
        
        </div>  
        <div class="menu__card">
          <figure class="menu__img">
            <img src="./img/menu/2.png" alt="Food" />
          </figure>

          <div class="menu__text">
            <p class="menu__price">$ 9.99</p>
            <h2 class="menu__title">Fried Eggs</h2>
            <p class="menu__description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
        </div>
        
        <div class="menu__card">
          <figure class="menu__img">
            <img src="./img/menu/3.png" alt="Food" />
          </figure>

          <div class="menu__text">
            <p class="menu__price">$ 15.99</p>
            <h2 class="menu__title">Hawaiian Pizza</h2>
            <p class="menu__description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
        </div>
        
        <div class="menu__card">
          <figure class="menu__img">
            <img src="./img/menu/4.png" alt="Food" />
          </figure>

          <div class="menu__text">
            <p class="menu__price">$ 7.25</p>
            <h2 class="menu__title">Martinez Cocktail</h2>
            <p class="menu__description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
        </div>
        
        <div class="menu__card">
          <figure class="menu__img">
            <img src="./img/menu/5.png" alt="Food" />
          </figure>

          <div class="menu__text">
            <p class="menu__price">$ 12.99</p>
            <h2 class="menu__title">Classic Waffles</h2>
           <p class="menu__description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
        </div>
        
        <div class="menu__card">
          <figure class="menu__img">
            <img src="./img/menu/6.png" alt="Food" />
          </figure>

          <div class="menu__text">
            <p class="menu__price">$ 12.55</p>
            <h2 class="menu__title">Cheese Burger</h2>
            <p class="menu__description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
        </div>
        
        <div class="menu__card">
          <figure class="menu__img">
            <img src="./img/menu/7.png" alt="Food" />
          </figure>

          <div class="menu__text">
            <p class="menu__price">$ 18.05</p>
            <h2 class="menu__title">Chocolate Icecream</h2>
            <p class="menu__description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
        </div>
        
        <div class="menu__card">
          <figure class="menu__img">
            <img src="./img/menu/8.png" alt="Food" />
          </figure>

          <div class="menu__text">
            <p class="menu__price">$ 20.99</p>
            <h2 class="menu__title">Butterscotch Cake</h2>
            <p class="menu__description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
          </div>
        </div>
      </div>
      </div>
    </div>

      `;
  }
}

export default new MenuView();
