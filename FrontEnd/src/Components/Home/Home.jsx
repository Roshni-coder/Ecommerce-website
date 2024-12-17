
import NavBar from './Navbar.jsx'
import Banner from './Banner'
import SliderBar from './SliderBar.jsx';
import {Box, styled } from '@mui/material'
import {useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getProducts } from '../../Redux/actions/productactions.js';
import Footer from './Footer/Footer.jsx';
import ProductsItem from './ProductsItem.jsx';

const Component = styled(Box)`
padding:14px 10px;
background:#F2F2F2;
`
const Home = () =>{
   const {products} = useSelector(state=>state.getProducts)

 const dispatch = useDispatch();
 useEffect (()=>{
  dispatch(getProducts())
 },[dispatch])

    return (
      <>
            <NavBar />
            <Component>
                <Banner />
                <SliderBar  products={products} title='Deal of the Day' timer={true}/>
                {/* <SliderBar  products={products} title='Deal of the Day' timer={true}/>
                <SliderBar  products={products} title='Deal of the Day' timer={true}/> */}
                <ProductsItem products={products}/>
                <Footer/>
            </Component>
      </>
   )
}

export default Home;