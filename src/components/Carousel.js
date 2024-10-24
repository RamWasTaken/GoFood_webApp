import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function ImageCarousel() {
  return (
    <Carousel controls responsive>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1552913902-366e726db79e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1655195672061-90c23e3e8026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzdCUyMGZvb2R8ZW58MHwwfDB8fHww"
          alt="Image 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1660715683691-d1614d1dd361?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image 3"
        />
      </Carousel.Item>
    </Carousel>
  );
}
// import React from 'react';

// export default function Carousel() {
//     return (
//         <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
//             <div class="carousel-inner">
//                 <div class="carousel-item active">
//                     <img src="https://images.unsplash.com/photo-1660715683691-d1614d1dd361?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" style={{ width: 500, height: 300, objectFit: 'cover' }} alt="..." />
//                 </div>
//                 <div class="carousel-item">
//                     <img src="https://images.unsplash.com/photo-1660715683691-d1614d1dd361?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" style={{ width: 500, height: 300, objectFit: 'cover' }} alt="..." />
//                 </div>
//                 <div class="carousel-item">
//                     <img src="https://images.unsplash.com/photo-1660715683691-d1614d1dd361?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" style={{ width: 500, height: 300, objectFit: 'cover' }} alt="..." />
//                 </div>
//             </div>
//         </div>

//     );
// }

// import React from 'react'

// export default function Carousel() {
//     return (
//         <div>

//             <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

//                 <div className="carousel-inner " id='carousel'>
//                     <div className=" carousel-caption  " style={{ zIndex: "9" }}>
//                         <form className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
//                             <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Type in..." aria-label="Search" />
//                             <button className="btn text-white bg-success" type="submit">Search</button>
//                         </form>
//                     </div>
//                     <div className="carousel-item active" >
//                         <img src="C:\Users\welov\OneDrive\Desktop\Gofood-main\public\food2.jpg" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="C:\Users\welov\OneDrive\Desktop\Gofood-main\public\food2.jpg" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="C:\Users\welov\OneDrive\Desktop\Gofood-main\public\food2.jpg" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>


//         </div>
//     )
// }
