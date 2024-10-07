import View from './view';

class AboutView extends View {
  generateMarkup() {
    return `
         <div class="about">
        <div class="about__img-box">
          <img class="about__img" src="./img/about-2.png" alt="Visit Us" />
          <div class="about__visit">
            <h2 class="about__visit-title">Come and visit us</h2>
            <ul class="about__contact">
              <li class="about__contact-item">
                <svg>
                  <use href="./img/icons.svg#icon-phone"></use>
                </svg>
                <p>(414) 857 - 0107</p>
              </li>
              <li class="about__contact-item">
                <svg>
                  <use href="./img/icons.svg#icon-mail"></use>
                </svg>
                <p>happytummy@restaurant.com</p>
              </li>
              <li class="about__contact-item">
                <svg>
                  <use href="./img/icons.svg#icon-gps"></use>
                </svg>
                <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="about__text-box">
          <h1 class="section__title about__title mb-sm">
            We provide healthy food for your family.
          </h1>
          <p class="section__description-dark about__description mb-sm">
            Our story began with a vision to create a unique dining experience that merges fine
            dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary
            culture, we aim to honor our local roots while infusing a global palate.
          </p>
          <p class="section__description about__description mb-md">
            At place, we believe that dining is not just about food, but also about the overall
            experience. Our staff, renowned for their warmth and dedication, strives to make
            every visit an unforgettable event.
          </p>
          <button class="btn btn__outline">More About Us</button>
        </div>
      </div>
      
      <div class="about2">
        <div class="about__text-box">
        <h1 class="section__title about__title mb-sm">
        A little information for our valuable guest
        </h1>
        
        <p class="section__description about__description mb-md">
        At place, we believe that dining is not just about food, but also about the overall
        experience. Our staff, renowned for their warmth and dedication, strives to make
        every visit an unforgettable event.
        </p>

                <div class="about__cards">
          <div class="about__card">
          <p class="about__card-value">
            3
          </p>
          <p class="about__card-title">
            Locations
          </p>
          </div>
          
          <div class="about__card">
          <p class="about__card-value">
            1995
          </p>

          <p class="about__card-title">
            Founded
          </p>

          </div>

          <div class="about__card">
          <p class="about__card-value">
            65+
          </p>

          <p class="about__card-title">
            Staff Members
          </p>

          </div>
          <div class="about__card">
          <p class="about__card-value">
            100%
          </p>

          <p class="about__card-title">
            Satisfied Customers
          </p>

          </div>
        </div>
      


        </div>        

        <div class="about2__img-box">
          <img class="about2__img" src="./img/about-3.png" alt="Visit Us" />
        </div>           
      </div>

      <div class="testimonials">
        <h1 class="section__title testimonials__header">What Our Customers Say</h1>
        <div class="testimonials__cards">
          <div class="testimonials__card">
            <h2 class="testimonials__title">“The best restaurant“</h2>
            <p class="testimonials__paragraph">
              Last night, we dined at place and were simply blown away. <br />
              From the moment we stepped in, we were enveloped in an inviting atmosphere and
              greeted with warm smiles.
            </p>
            <div class="testimonials__profile">
              <figure class="testimonials__img-box">
                <img
                  src="./img/profiles/1.jpg"
                  alt="Profile Picture"
                  class="testimonials__img"
                />
              </figure>
              <div class="testimonials__profile-text">
                <p class="testimonials__name">Sophire Robson</p>
                <p class="testimonials__address">Los Angeles, CA</p>
              </div>
            </div>
          </div>
          <div class="testimonials__card">
            <h2 class="testimonials__title">“Simply delicious“</h2>
            <p class="testimonials__paragraph">
              Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed,
              making it a perfect venue for our anniversary dinner. Each dish was prepared and
              beautifully presented.
            </p>
            <div class="testimonials__profile">
              <figure class="testimonials__img-box">
                <img
                  src="./img/profiles/2.jpg"
                  alt="Profile Picture"
                  class="testimonials__img"
                />
              </figure>
              <div class="testimonials__profile-text">
                <p class="testimonials__name">Matt Cannon</p>
                <p class="testimonials__address">San Diego, CA</p>
              </div>
            </div>
          </div>
          <div class="testimonials__card">
            <h2 class="testimonials__title">“One of a kind restaurant“</h2>
            <p class="testimonials__paragraph">
              The culinary experience at place is first to none. The atmosphere is vibrant, the
              food - nothing short of extraordinary. The food was the highlight of our evening.
              Highly recommended.
            </p>
            <div class="testimonials__profile">
              <figure class="testimonials__img-box">
                <img
                  src="./img/profiles/3.jpg"
                  alt="Profile Picture"
                  class="testimonials__img"
                />
              </figure>
              <div class="testimonials__profile-text">
                <p class="testimonials__name">Andy Smith</p>
                <p class="testimonials__address">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
  }
}

export default new AboutView();
