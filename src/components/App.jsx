import React, { useEffect } from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Home from './home/home'
import About from './about/about'
import Contact from './contact/contact'
import Phoneslist from './products/phonesList';
import AccessoriesList from './products/AccessoriesList';
import Labtopslist from './products/LabtopsList';
import TvList from './products/TvList';
import Headlist from './products/headList';
import WatchList from './products/WatchList';
import Salelist from './products/saleList';
import ProductDetails from './products/common/productDetails';
import Loader from "react-loader-spinner";
import Cart from './shoppingCart/cart';
import HelpCenter from './help/helpcenter';
import HelpWoman from './help/helpwoman';
import Footer from './FOOTER/footer'
import Payment from './FOOTER/payment';
import Terms from './FOOTER/terms';
import Return from './FOOTER/return';
import Nf404 from './nf404'
import { getProducts } from '../redux/products/products'
import { useDispatch, useSelector } from 'react-redux'
import './app.css'
export default function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    const { products } = useSelector(state => state.products)
    return (
        <BrowserRouter>
            <Navbar />
            <HelpWoman />
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                {/* <Route path='/login' exact>
                    <Login />
                </Route>
                <Route path='/signup'>
                    <Signup />
                </Route> */}
                <Route path='/phones' component={Phoneslist} />
                <Route path='/accessories' component={AccessoriesList} />
                <Route path='/labtops' component={Labtopslist} />
                <Route path='/tvs' component={TvList} />
                <Route path='/watches' component={WatchList} />
                <Route path='/headphones' component={Headlist} />
                <Route path='/sale' component={Salelist} />
                <Route path='/cart' component={Cart} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/help' component={HelpCenter} />
                <Route path='/terms' component={Terms} />
                <Route path='/payment' component={Payment} />
                <Route path='/return' component={Return} />
                <Route path='/details/:name/:id'>
                    {products ? <ProductDetails /> : <Loader type="TailSpin" color="#00BFFF" height={350} width={350} />}
                </Route>
                <Route path='/notfound404' component={Nf404} />
                <Redirect to='/notfound404' />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}