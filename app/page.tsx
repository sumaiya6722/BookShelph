import Banner from './homepage/banner/Banner';
import FeaturedBooks from './homepage/featuredBooks/FeaturedBooks'
import ChooseFeature from './homepage/chooseFeature/ChooseFeature'
import Testimonial from './homepage/testimonial/Testimonial'

export default function Home() {
  return (
    <div>
      <main>
        <Banner></Banner>
        <FeaturedBooks></FeaturedBooks>
        <ChooseFeature></ChooseFeature>
        <Testimonial></Testimonial>
      </main>
    </div>
  );
}
