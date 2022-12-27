import Header from "./HomeComponents/Header";
import Footer from "./HomeComponents/Footer";
import Body from "./HomeComponents/Body";

function Home({ logout, ...rest }) {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
