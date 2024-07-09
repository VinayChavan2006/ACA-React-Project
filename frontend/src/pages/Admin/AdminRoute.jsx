import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";
import { redirect } from "react-router";
const AdminRoute = () => {
  
  const {userInfo} = useSelector(state=>state.auth)
  const categorylist = [
    "Phone",
    "Clothes",
    "Laptop",
    "Earpods",
    "Drones",
    "Shoes",
    "Tablets",
    "Cameras",
  ]
  const [AllProduct,setAllProduct] = useState([{
    id:1,
    name:"MacBook Pro",
    price:890,
    category:'Laptop',
    brand:"Apple",
    description:"nice product...",
    imgUrl:'https://i.ytimg.com/vi/EWzjwsBevAk/maxresdefault.jpg',
  },{
    id:2,
    name:'Dell Inspiron touch',
    price:459,
    category:'Laptop',
    brand:'Dell',
    description:'Best in price laptops...',
    imgUrl:'https://i5.walmartimages.com/asr/00c86953-f835-4b7d-852c-59a158fe5a5c_1.553ace2ceb26958c255111f791725e60.jpeg',
  },{
    id:3,
    name:'IPhone 15',
    price:456,
    category:'Phone',
    brand:'Apple',
    description:'Best value for money...',
    imgUrl:'https://image-cdn.hypb.st/https://hk.hypebeast.com/files/2022/09/iphone-15-ultra-to-replace-pro-max-model-apple-rumors-00.jpg?w=960&cbr=1&q=90&fit=max',
  },{
    id:4,
    name:'Ipad',
    price:543,
    category:'Tablets',
    brand:'Apple',
    description:'Best tablets ever made...',
    imgUrl:'https://i.pinimg.com/originals/61/6e/e4/616ee4216d106506511d79e00132fe0b.jpg',
  },{
    id:5,
    name:'Earpods',
    price:35,
    category:'Earpods',
    brand:'Samsung',
    description:'The best earpods...',
    imgUrl:'https://th.bing.com/th/id/OIP.oCkT99j3aaQabe4zncRgrgAAAA?rs=1&pid=ImgDetMain',
  },{
    id:6,
    name:'Drones',
    price:23,
    category:'Drones',
    brand:'Drone',
    description:'The best drone ever...',
    imgUrl:'https://droneswatch.org/wp-content/uploads/2020/06/jason-blackeye-10ui0BryWK8-unsplash-scaled-e1591692866533.jpg',
  },{
    id:7,
    name:'Jeans',
    price:15,
    category:'Clothes',
    brand:'Denim',
    description:'Best jeans in the price range...',
    imgUrl:'https://image.harrods.com/saint-laurent-washed-denim-jeans_16413879_31522753_2048.jpg',
  },{
    id:8,
    name:'Sketchers',
    price:99,
    category:'Shoes',
    brand:'Sketchers',
    description:'Best shoes ever made...',
    imgUrl:'https://th.bing.com/th/id/OIP.RuxOBglcl_keiAoy-8TrUAAAAA?rs=1&pid=ImgDetMain',
  },{
    id:9,
    name:'Samsung S12 Ultra',
    price:234,
    category:'Phone',
    brand:'Samsung',
    description:'Best camera phone...',
    imgUrl:'https://luxuryparcel.com/wp-content/uploads/2021/07/maxresdefault-1024x576.jpg',
  },{
    id:10,
    name:'Sports Shoes',
    price:59,
    category:'Shoes',
    brand:'Adidas',
    description:'Best sport shoes...',
    imgUrl:'https://tiimg.tistatic.com/fp/1/007/555/adidas-sport-shoes-with-white-with-red-color-and-lace-closup-tpr-insole-materials-662.jpg',
  },{
    id:11,
    name:'Dronex',
    price:26,
    category:'Drones',
    brand:'Drone',
    description:'Best drones for playing and flying...',
    imgUrl:'https://c1.wallpaperflare.com/preview/33/422/367/drone-camera-tech-equipment.jpg',
  },{
    id:12,
    name:'Airpods',
    price:123,
    category:'Earpods',
    brand:'Apple',
    description:'Best wireless way of enjoying life...',
    imgUrl:'https://i.pinimg.com/736x/c1/c1/c4/c1c1c4796c1f681def2da032d202c608.jpg',
  },{
    id:13,
    name:'DSLR',
    price:159,
    category:'Cameras',
    brand:'Canon',
    description:'Best device to capture special moments...',
    imgUrl:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2017/02/Sigma-24mm-1.jpg?w=717&ssl=1',
  }])
  console.log("rendered AdminRopute");
  console.log(userInfo,userInfo.data.isAdmin)
  return (
    <>
      <div className="w-full min-h-full bg-slate-950">
        { userInfo&&userInfo.data.isAdmin?<Outlet context={{AllProduct,setAllProduct,categorylist}}/>:<Navigate to="/" replace />}
      </div>
    </>
  ) 
};

export default AdminRoute;
