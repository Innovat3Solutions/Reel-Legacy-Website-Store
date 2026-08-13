import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { FeaturedCollection } from '../components/FeaturedCollection';
import { NewArrivals } from '../components/NewArrivals';
import { Lifestyle } from '../components/Lifestyle';
import { Gallery } from '../components/Gallery';

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedCollection />
      <NewArrivals />
      <Lifestyle />
      <Gallery />
    </>
  );
}
