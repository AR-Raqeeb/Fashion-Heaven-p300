import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Mifta',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

    products: [
      {
      
        name: 'Adidas Unifornia Boot',
        category: 'Football',
        image: 'https://i.ibb.co/0XLCyQS/Adidas-Uniforia.jpg',
        price: 311,
        countInStock: 10,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Australia Cricket Premium Jersey',
        category: 'Cricket',
        image: 'https://i.ibb.co/SJ4JgxM/Australia-Premium-Jersey.jpg',
        price: 109,
        countInStock: 11,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Authentic Football Kit',
        category: 'Football',
        image: 'https://i.ibb.co/wMv5c2H/Authentic-Football-Kit.jpg',
        price: 99,
        countInStock: 7,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        
        name: 'Barcelona Premium Kit',
        category: 'Football',
        image: 'https://i.ibb.co/XCBZNzS/Barcelona-Premium-Replica.jpg',
        price: 129,
        countInStock: 6,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        
        name: 'Bangladesh Cricket WC2019 Premium',
        category: 'Cricket',
        image: 'https://i.ibb.co/3MbFrpS/BD-Cricket-Jersey.jpg',
        price: 65,
        countInStock: 13,
        brand: 'New Balance',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Nike Premium Boot',
        category: 'Football',
        image: 'https://i.ibb.co/bmw2HdQ/Best-Nike-Boot.jpg',
        price: 139,
        countInStock: 9,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        
        name: 'Burrusia Dortmund Premium Home Kit',
        category: 'Football',
        image: 'https://i.ibb.co/nwH41j7/Burrusia-Dortmond-Home-Kit.jpg',
        price: 135,
        countInStock: 0,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        
        name: 'Customized Cricket Jersey',
        category: 'Cricket',
        image: 'https://i.ibb.co/FYQtsmq/Customized-Jersey-Green.jpg',
        price: 139,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        
        name: 'Grey Nicols Kit',
        category: 'Cricket',
        image: 'https://i.ibb.co/yX5CKKN/GN-Premium-Cricket-Kit.jpg',
        price: 245,
        countInStock: 3,
        brand: 'Gray Nicols',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        
        name: 'New Balance Kit',
        category: 'Cricket',
        image: 'https://i.ibb.co/Mcw9dc1/NB-Premium-KIT-cricket.jpg',
        price: 189,
        countInStock: 2,
        brand: 'New Balance',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        
        name: 'Official New Zealand Jersey',
        category: 'Cricket',
        image: 'https://i.ibb.co/tCwWXTf/New-Zealand.jpg',
        price: 129,
        countInStock: 1,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        
        name: 'Nike Premium Boot(Pink Edition)',
        category: 'Football',
        image: 'https://i.ibb.co/VHFkCHq/Nike-Boot.jpg',
        price: 189,
        countInStock: 3,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        
        name: 'SG Cricket Kit',
        category: 'Cricket',
        image: 'https://i.ibb.co/cQyBmYK/SG-premium-cricket-kit.jpg',
        price: 210,
        countInStock: 0,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        
        name: 'New Balance Spike Boot White Edition',
        category: 'Cricket',
        image: 'https://i.ibb.co/x2xjR2F/NB-Cricket-Boot.jpg',
        price: 139,
        countInStock: 4,
        brand: 'New Balance',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        
        name: 'SS Cricket Kit',
        category: 'Cricket',
        image: 'https://i.ibb.co/nfhknxn/SS-Original-Master.jpg',
        price: 139,
        countInStock: 10,
        brand: 'SS',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;




