import React from "react";
import '../styling/FooterDetails.scss'
import EthanIceCream from '../assets/Ethan-icecream.jpeg';
import EthanHotDog from '../assets/Ethan-hotdog.jpeg'


const FooterDetails = () => {

  return (
    <section className="inspiration-page">
      <h3 className="header-tagline">Meet the man with very distinguishing tastes</h3>
      <section className="text-image">
        <img className="image-ethan-hot-dog" src={EthanHotDog} alt="A boy enjoying a giant hot dog" />
        <section className="paragraph">
          <p className="description">His name is Ethan. He is a very intelligent 8 year old with a curious mind but not a curious palate.  The way to get this little guy to eat is to challenge him to a take an adventure with food and find new recipes to cook and try on his own.</p>
          <p className="plead-from-mom">Note from his mom: PLEASE FOR THE LOVE OF ALL THINGS HOLY!!! EAT SOMETHING MAN!</p>
        </section>
         <img className="image-ethan-ice-cream" src={EthanIceCream} alt="A boy looking concerned at his cup of ice cream" />
      </section>
    </section>
  )
}

export default FooterDetails;