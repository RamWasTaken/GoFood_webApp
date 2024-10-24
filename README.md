# For frontend folder

- npm install
- npm start

# For Backend
- cd backend
- npx nodemon .\index.js

why did u use 2 carousole , 1 as component and 1 defined inside Home page

## Previous carousel which was inside Home.js
``` javascript
<div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

          <div className="carousel-inner " id='carousel'>
            <div className=" carousel-caption  " style={{ zIndex: "9" }}>
              <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>X</button>
              </div>
            </div>
            <div className="carousel-item active" >
              <img src="https://www.google.com/imgres?q=food%20burger&imgurl=https%3A%2F%2Fwataburger.in%2Fwp-content%2Fuploads%2F2022%2F12%2Fburger.jpg&imgrefurl=https%3A%2F%2Fwataburger.in%2Fwhy-burgers-are-the-most-popular-fast-food%2F&docid=F2DWZsTHOjg--M&tbnid=rXvnP72zv4lJfM&vet=12ahUKEwjRiKbe0fmGAxVNkVYBHQHCA9kQM3oECBYQAA..i&w=1200&h=628&hcb=2&ved=2ahUKEwjRiKbe0fmGAxVNkVYBHQHCA9kQM3oECBYQAA" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://www.google.com/imgres?q=food%20burger&imgurl=https%3A%2F%2Fwataburger.in%2Fwp-content%2Fuploads%2F2022%2F12%2Fburger.jpg&imgrefurl=https%3A%2F%2Fwataburger.in%2Fwhy-burgers-are-the-most-popular-fast-food%2F&docid=F2DWZsTHOjg--M&tbnid=rXvnP72zv4lJfM&vet=12ahUKEwjRiKbe0fmGAxVNkVYBHQHCA9kQM3oECBYQAA..i&w=1200&h=628&hcb=2&ved=2ahUKEwjRiKbe0fmGAxVNkVYBHQHCA9kQM3oECBYQAA" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://www.google.com/imgres?q=food%20burger&imgurl=https%3A%2F%2Fwataburger.in%2Fwp-content%2Fuploads%2F2022%2F12%2Fburger.jpg&imgrefurl=https%3A%2F%2Fwataburger.in%2Fwhy-burgers-are-the-most-popular-fast-food%2F&docid=F2DWZsTHOjg--M&tbnid=rXvnP72zv4lJfM&vet=12ahUKEwjRiKbe0fmGAxVNkVYBHQHCA9kQM3oECBYQAA..i&w=1200&h=628&hcb=2&ved=2ahUKEwjRiKbe0fmGAxVNkVYBHQHCA9kQM3oECBYQAA" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
```

## Bcrypt - Authorization
- Password Hashing: Bcrypt is a password hashing algorithm that stores passwords securely. When a user creates an account, their password is hashed using Bcrypt, and the resulting hash is stored in the database.

- Password Verification: When the user attempts to log in, the provided password is hashed using Bcrypt, and the resulting hash is compared to the stored hash in the database. If they match, the user is authenticated.

## JWT - Authentication
After a user logs in, a JWT can be generated and sent back to the client. The client then includes this token in the header of subsequent requests, allowing the server to verify the user's identity.

