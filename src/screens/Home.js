import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  const [foodCat, setFoodCat] = useState([])
  const [foodItems, setFoodItems] = useState([])
  const [search, setSearch] = useState('')

  // THis line is fetching the data from server. with function fetch().
  const loadFoodItems = async () => {
    let response = await fetch("http://localhost:5000/api/auth/foodData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    });
    response = await response.json()
    // console.log(response[1][0].CategoryName)
    setFoodItems(response[0])
    setFoodCat(response[1])
  }

  useEffect(() => {
    loadFoodItems()
  }, [])

  return (
    <div >
      <div><Navbar /></div>
    
      <div style={{
          maxWidth: '800px', // Set your desired maximum width
          margin: '0 auto', // Center the carousel
          overflow: 'hidden' // Ensure the carousel doesn't overflow
        }}>
        <div style={{
          height: '400px' // Set a fixed height for the carousel container
        }}>
          <Carousel />
        </div>
      </div>

      {/* Below we display food according to there categories */}
      <div className='container'> {/* boootstrap is mobile first */}
        {
          foodCat.length > 0

            ? foodCat.map((data) => {
                return (
                  <div className='row mb-3'> {/*creating rows of category*/}
                    <div key={data.id} className='fs-3 m-3'>
                      {data.CategoryName}
                    </div>

                    <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} /> {/*A big stylish Line */}

                    {foodItems.length > 0 
                        ? foodItems.filter(
                          (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                          .map(filterItems => {
                            return (
                              <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                                {console.log(filterItems.url)}
                                <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
                              </div>
                            )
                          })
                        : <div> No Such Data </div>}
                  </div>
                )
              })
            : ""}
      </div>
      <Footer />
    </div>
  )
}
