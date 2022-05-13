import React from "react";
import "../../styles/About.scss";
import BookWidget from "../booking/BookWidget";
const About = () => {
  return (
    <div className="About">
      <header className='header-main'
        style={{
          background:
            ' no-repeat center/cover url("/img/about/about_header.jpg")',
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">About</h2>
          <p>Learn about our family owned resort</p>
        </div>

        <BookWidget />
      </header>
      <section className="desc">
        <h1 className="alt-font">Sooriya Resort Koggala</h1>
        <span></span>
        <p>Get to know one of Srilanka's best resort</p>
      </section>
      <section className="desc_photo">
        <div className="descLeft">
          <h1 className="alt-font">Only Local Ingredients</h1>
          <p>
            We use only locally sourced foods and ingredients grown here in
            Phuket. We ensure that our farmers and our customers get full
            satisfaction. We believe that by helping our local community grow we
            can create a harmonized environment that everyone can enjoy.
          </p>
        </div>
        <div className="descRight">
          <img src="/img/about/about_farmer.jpg" alt="about_farmer" />
        </div>
      </section>
      <section className="testimonials">
        <h1 className="alt-font">Testimonials</h1>
        <article className="testimonials-card">
          <div className="img-container">
            <img src="/img/about/about_family.jpg" alt="family_testimonial_1" />
          </div>
          <div className="quote-container">
            <p>
              <em>
                "My family and I visited Sri Lanka for the first time and chose the Sooriya Resort. We were completely revived and invigorated for the rest of the year, thanks to our pleasant time at the resort. The resort is just fantastic!
                We loved everything about the hotel, from the breakfast to the superb room service, as well as the cleanliness and extra amenities like dry cleaning and washing. In general, all of the hotel personnel were professional, polite, and gave outstanding service. We will undoubtedly return!"
              </em>
            </p>
            <span>Smith Family, Minneapolis, USA</span>
          </div>
        </article>
        <article className="testimonials-card reversed">
          <div className="img-container">
            <img src="/img/about/about-family2.jpg" alt="family_testimonial_2" />
          </div>
          <div className="quote-container">
            <p>
              <em>
                "We had been guests at the Sooriya Resort last weekend and we have
                nothing but praises for the resort. We have had a great time.
                and thats putting it mildly. The staff was extremely courteous,
                and when I say this I don't just mean the managerial level. The
                respect and the courtesy offered to us trickled down to the
                waiters and the the watchmen and even the trainees. This place
                was highly recommended to us by our friend, and true to his
                word, this was indeed an unforgettable experience."
              </em>
            </p>
            <span>Lopez Family, Los Angelas, USA</span>
          </div>
        </article>
      </section>
    </div>
  );
};

export default About;
