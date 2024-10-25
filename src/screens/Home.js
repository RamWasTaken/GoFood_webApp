import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState('');

  const loadFoodItems = async () => {
    let response = await fetch("http://localhost:5000/api/auth/foodData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    response = await response.json();
    setFoodItems(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadFoodItems();
  }, []);

  const cardsPerView = 3; // Number of cards to display at a time

  return (
    <div>
      <Navbar />

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Carousel />
      </div>

      <div className='container mt-4' style={{ marginTop: '20px' }}>
        {foodCat.length > 0 ? foodCat.map((data, index) => (
          <div key={data.id} className="mb-5">
            <h3 className='fs-3 m-3 text-light'>{data.CategoryName}</h3>

            <div id={`carouselCategory${index}`} className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {/* Calculate number of items and split into carousel items */}
                {Array.from({ length: Math.ceil(foodItems.filter(item => item.CategoryName === data.CategoryName).length / cardsPerView) }, (_, i) => (
                  <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                    <div className="row">
                      {foodItems.filter(item => item.CategoryName === data.CategoryName)
                        .slice(i * cardsPerView, (i + 1) * cardsPerView)
                        .map(item => (
                          <div key={item.id} className="col-4 d-flex justify-content-center">
                            <Card
                              foodName={item.name}
                              item={item}
                              options={item.options[0]}
                              ImgSrc={item.img}
                            />
                          </div>
                        ))}

                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target={`#carouselCategory${index}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#carouselCategory${index}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
          </div>
        )) : ""}
      </div>

      <Footer />
    </div>
  );
}
