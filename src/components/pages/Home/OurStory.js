import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
         At Little Lemon, our story is a journey of passion for crafting culinary experiences that delight the senses. Inspired by the zest of fresh ingredients, we embarked on a mission to create a haven for food enthusiasts. From our humble beginnings, we've grown into a place where flavors come alive, offering a harmonious blend of creativity and tradition. Join us on this culinary adventure as we continue to weave stories through every dish, making dining at Little Lemon an unforgettable experience.
      </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
