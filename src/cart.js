import CartBody from "./CartComponents/CartBody";
import Header from "./HomeComponents/Header";
import Footer from "./HomeComponents/Footer";
import { withRouter } from "react-router";

function Cart({ logout, ...rest }) {
  return (
    <div>
      <Header />
      <CartBody />
      <Footer />
    </div>
  );
}

export default withRouter(Cart);
