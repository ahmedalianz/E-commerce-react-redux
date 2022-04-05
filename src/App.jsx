import "./app.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import About from "./components/about/about";
import AccessoriesList from "./components/products/AccessoriesList";
import Cart from "./components/shoppingCart/cart";
import Contact from "./components/contact/contact";
import Footer from "./components/FOOTER/footer";
import Headlist from "./components/products/headList";
import HelpCenter from "./components/help/helpcenter";
import HelpWoman from "./components/help/helpwoman";
import Home from "./components/home/home";
import Labtopslist from "./components/products/LabtopsList";
import Loader from "react-loader-spinner";
import Navbar from "./components/navbar/Navbar";
import Nf404 from "./components/nf404";
import Payment from "./components/FOOTER/payment";
import Phoneslist from "./components/products/phonesList";
import ProductDetails from "./components/products/common/productDetails";
import Return from "./components/FOOTER/return";
import Salelist from "./components/products/saleList";
import Terms from "./components/FOOTER/terms";
import TvList from "./components/products/TvList";
import WatchList from "./components/products/WatchList";
import { getProducts } from "./redux/products";
import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const { products } = useSelector((state) => state.products);
  return (
    <BrowserRouter>
      <Navbar />
      <HelpWoman />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/phones" component={Phoneslist} />
        <Route path="/accessories" component={AccessoriesList} />
        <Route path="/labtops" component={Labtopslist} />
        <Route path="/tvs" component={TvList} />
        <Route path="/watches" component={WatchList} />
        <Route path="/headphones" component={Headlist} />
        <Route path="/sale" component={Salelist} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/help" component={HelpCenter} />
        <Route path="/terms" component={Terms} />
        <Route path="/payment" component={Payment} />
        <Route path="/return" component={Return} />
        <Route path="/details/:name/:id">
          {products ? (
            <ProductDetails />
          ) : (
            <Loader type="TailSpin" color="#00BFFF" height={350} width={350} />
          )}
        </Route>
        <Route path="/notfound404" component={Nf404} />
        <Redirect to="/notfound404" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
