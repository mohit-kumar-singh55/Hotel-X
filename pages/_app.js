import '../styles/globals.css';
import Layout from "../components/Layout";
import { RoomProvider } from '../Context/context';

function MyApp({ Component, pageProps }) {
  return (
    <RoomProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RoomProvider>
  )
}

export default MyApp
