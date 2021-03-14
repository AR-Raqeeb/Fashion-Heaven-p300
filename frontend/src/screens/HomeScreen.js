import React, { useEffect } from 'react';
import Product from '../components/Product';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';




export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000
  };


  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);
  return (
    <div>
      <div className="slider">
       <Slider {...settings}>
      <div className="slider-img">
       <div>
        <img src="https://i.ibb.co/99Q7wmg/carousel-2.jpg" alt=""></img>
       </div>
      </div>
      <div className="slider-img">
       <div>
        <img src="https://i.ibb.co/H2H7NYs/carousel-4.png" alt=""></img>
       </div>
      </div>
      <div className="slider-img">
       <div>
        <img src="https://i.ibb.co/jRTCQ5H/bag.jpg" alt=""></img>
       </div>
      </div>
      <div className="slider-img">
       <div>
        <img src="https://i.ibb.co/hdgXG0h/sock.webp" alt=""></img>
       </div>
      </div>
    </Slider>
    </div>
      <h2 className="featuredProduct">Featured Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </>
      )}
      </div>
  );
}
