import Head from 'next/head';
import Link from 'next/link';
import Banner from '../components/Banner';
import FeaturedRooms from '../components/FeaturedRooms';
import Hero from "../components/Hero";
import Services from '../components/Services';

export default function Home() {
  return (
    <div>
      <Head>
        <title>HotelX</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <Banner title="Welcome to HotelX" subtitle="We are the best hotel in the world">
          <button className="btn-primary" >
            <Link href="/rooms" passHref>
              Our Rooms
            </Link>
          </button>
        </Banner>
      </Hero>

      <Services />

      <FeaturedRooms />

    </div>
  )
}