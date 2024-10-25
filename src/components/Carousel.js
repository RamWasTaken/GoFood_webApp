import React from 'react';

export default function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ height: '80vh' }}>
      <div className="carousel-inner" style={{ height: '100%' }}>
        {/* First Slide */}
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1567608285969-48e4bbe0d399?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            alt="Delicious Pasta"
            style={{ objectFit: 'cover', height: '100%', filter: 'brightness(80%)' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{ fontSize: '2rem', color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Delicious Pasta</h5>
            <p style={{ fontSize: '1.2rem', color: '#fff', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }}>
              Experience the taste of Italian cuisine.
            </p>
          </div>
        </div>

        {/* Second Slide */}
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            alt="Cheesy Pizza"
            style={{ objectFit: 'cover', height: '100%', filter: 'brightness(80%)' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{ fontSize: '2rem', color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Cheesy Pizza</h5>
            <p style={{ fontSize: '1.2rem', color: '#fff', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }}>
              The perfect bite every time.
            </p>
          </div>
        </div>

        {/* Third Slide */}
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            alt="Biryani"
            style={{ objectFit: 'cover', height: '100%', filter: 'brightness(80%)' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{ fontSize: '2rem', color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Tasty Biryani</h5>
            <p style={{ fontSize: '1.2rem', color: '#fff', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }}>
              Best Biryani of the place Here!!
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
