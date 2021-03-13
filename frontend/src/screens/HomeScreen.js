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
      <h2>Available Brands</h2>
      <div className="slider">
       <Slider {...settings}>
      <div className="slider-img">
       <div>
        <img src="https://i.ibb.co/zn656Qf/image.jpg" alt=""></img>
       </div>
      </div>
      <div className="slider-img">
       <div>
        <img src=" https://i.ibb.co/q5zL7vd/Iju3yC.jpg" alt=""></img>
       </div>
      </div>
      <div className="slider-img">
       <div>
        <img src="https://i.ibb.co/QM14y1z/7940d30574080f6f6abdc8c39b433ef7-w1920-h1080.jpg" alt=""></img>
       </div>
      </div>
      <div className="slider-img">
       <div>
        <img src="https://i.ibb.co/Rg1xMrr/images.png" alt=""></img>
       </div>
      </div>
    </Slider>
    </div>
      <h2>Featured Products</h2>
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
