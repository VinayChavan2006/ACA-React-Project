import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useOutletContext, useParams } from "react-router";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import ProductCard from "./ProductCard";
import Product from "./Product";
const ProductTabs = () => {
  const rating = useRef()
  const comment = useRef()
  const {AllProduct} = useOutletContext()
  let AllProducts = AllProduct
  const {userInfo} = useSelector(state=>state.auth)
  const [selectedTab,setSelectedTab] = useState('comment');
  const params = useParams()
  const [reviews,setReviews] = useState([{userName:'Vinay Chavan',description:'Nice Product',rating:5}])
  function handleComment(e){
    e.preventDefault()
    setReviews([...reviews,{userName:"Vinay Chavan",description:comment.current.value,rating:rating.current.value}])
    setSelectedTab('review')
  }
  
  console.log("rendered ProductTabs");
  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-col gap-2 w-1/5 ml-10">
          <button
            onClick={() => setSelectedTab("comment")}
            className={`box-border p-3 ${
              selectedTab === "comment" && "bg-pink-600"
            } hover:bg-pink-600 text-white font-semibold rounded-md`}
          >
            Write Your Review
          </button>
          <button
            onClick={() => setSelectedTab("review")}
            className={`box-border p-3 ${
              selectedTab === "review" && "bg-pink-600"
            } hover:bg-pink-600 text-white font-semibold rounded-md`}
          >
            All reviews
          </button>
          <button
            onClick={() => setSelectedTab("moreProducts")}
            className={`box-border p-3 ${
              selectedTab === "moreProducts" && "bg-pink-600"
            } hover:bg-pink-600 text-white font-semibold rounded-md`}
          >
            Related Products
          </button>
        </div>
        {!userInfo && selectedTab === "comment" && (
          <div className="w-3/5 bg-slate-900 box-border p-3 rounded-lg ml-8">
            <div className="p-3 mb-4 bg-slate-800 flex justify-between">
              <p className="text-white font-semibold">
                Please Sign In to Write Review{" "}
                <Link to="/register" className="text-pink-600">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        )}

        {userInfo && selectedTab === "comment" && (
          <div className="w-3/5 bg-slate-900 box-border p-3 rounded-lg ml-8">
            <form>
              <label htmlFor="rating" className="text-white text-lg">
                Rating
              </label>
              <br />
              <select
                ref={rating}
                name="rating"
                id="rating"
                className="w-full rounded-md border-black border-2"
              >
                <option value="0">Select</option>
                <option value="1">Inferior</option>
                <option value="2">Decent</option>
                <option value="3">Great</option>
                <option value="4">Excellent</option>
                <option value="5">Exceptional</option>
              </select>
              <br />
              <label
                htmlFor="comment"
                className="text-white font-semibold text-lg"
              >
                Comment
              </label>
              <br />
              <textarea
                ref={comment}
                name="comment"
                id="comment"
                rows="4"
                className="w-full rounded-md"
              ></textarea>
              <button
                onClick={(e) => handleComment(e)}
                // type="submit"
                // value="Submit"
                className="box-border p-3 bg-pink-600 text-white font-semibold rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {/* My Review */}

        {selectedTab === "review" && (
          <div className="w-3/5 bg-slate-900 box-border p-3 rounded-lg ml-8">
            {reviews.map((review) => (
              <div className="p-3 mb-4 bg-slate-800 flex justify-between">
                <div>
                  <p className="text-white font-semibold">{review.userName}</p>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <FaStar style={{ color: "yellow" }} />
                    ))}
                  </div>
                  <p className="text-white font-semibold">
                    {review.description}
                  </p>
                </div>
                <p className="text-white font-semibold">22-06-2024</p>
              </div>
            ))}
          </div>
        )}

        {/* More products */}
        {selectedTab === "moreProducts" && (
          <div className="w-3/5 bg-slate-900 box-border p-3 rounded-lg ml-8">
            <div
              onClick={() => setSelectedTab("comment")}
              className="p-3 bg-slate-800 flex justify-around flex-wrap"
            >
              <div className="font-sans bg-gray-900 rounded-md box-border p-3 ml-1 mb-5 shadow-md w-2/5 h-[460px]">
                <ProductCard
                  product={AllProducts[(parseInt(params.id) + 1) % 13]}
                ></ProductCard>
              </div>
              <div
                onClick={() => setSelectedTab("comment")}
                className="font-sans bg-gray-900 rounded-md box-border p-3 ml-1 mb-5 shadow-md w-2/5 h-[460px]"
              >
                <ProductCard
                  product={AllProducts[(parseInt(params.id) + 2) % 13]}
                ></ProductCard>
              </div>
              <div className="font-sans bg-gray-900 rounded-md box-border p-3 ml-1 mb-5 shadow-md w-2/5 h-[460px]">
                <ProductCard
                  product={AllProducts[(parseInt(params.id) + 3) % 13]}
                ></ProductCard>
              </div>
              <div
                onClick={() => setSelectedTab("comment")}
                className="font-sans bg-gray-900 rounded-md box-border  ml-1 mb-5 shadow-md w-fit h-fit"
              >
                <ProductCard
                  product={AllProducts[(parseInt(params.id) + 4) % 13]}
                ></ProductCard>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductTabs;
