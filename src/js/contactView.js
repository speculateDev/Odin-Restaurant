import View from './view';

class ContactView extends View {
  generateMarkup() {
    return `
        <div class="contact">
            <h1 class="menu__header">Contact Us</h1>
            <p class="menu__subheader">
            We consider all the drivers of change gives you the components <br /> you need to change to
            create a truly happens.
        </p>

        
        <form class="form">
        <div class="form__fx">
        <div class="form__combo">
        <label class="form__label" for="name">Name</label>
        <input class="form__input" type="text" name="name" id="name" placeholder="Enter your name" />
        </div>
        
        <div class="form__combo mb-sm">
        <label class="form__label" for="mail">Email</label>
        <input class="form__input" type="email" name="mail" id="mail" placeholder="Enter your name" />
        </div>
        </div>
        
        <label class="form__label" for="subject" class="form__label">Subject</label>
        <input class="form__input mb-sm" type="text" id="subject" placeholder="Write a subject"/>

          <label class="form__label" for="message" class="form__label">Message</label>
          <textarea class="form__area mb-sm" rows="5" cols="33" type="text" id="message" placeholder="Write your message" ></textarea>
          
          <div class="form__btn-box ">
          <button class="form__btn btn__primary">Send</button>
          </div>
          </form>
        
          <div class="contact__info">
        <div class="contact__combo">
          <h2 class="contact__title">Call Us:</h2>
          <p class="contact__phone">+1-234-567-8900</p>
        </div>
        <div class="contact__combo">
          <h2 class="contact__title">Hours:</h2>
          <p class="contact__hours">Mon-Fri: 11am - 8pm</p>
          <p class="contact__hours">Sat, Sun: 9am - 10pm</p>
        </div>
        <div class="contact__combo">
          <h2 class="contact__title">Our Location:</h2>
          <p class="contact__address">123 Bridge Street</p>
          <p class="contact__address">Nowhere Land, LA 12345</p>
          <p class="contact__address">United States</p>
        </div>
        </div>
        </div>
      `;
  }
}

export default new ContactView();
