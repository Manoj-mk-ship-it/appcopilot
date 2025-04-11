// src/components/HotelHomePage.jsx

import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const listings = [
    {
      id: 1,
      name: "Sunset View Hotel",
      image: "/hotel1.jpg",
      amenities: "Ocean View, Pool, Free Wi-Fi, Breakfast Included",
      rent: "$1,200",
      sqft: "850 sqft",
      lease: "01.01.2025",
      suggested: "$1,250/mo",
    },
    {
      id: 2,
      name: "Mountain Peak Resort",
      image: "/hotel2.jpg",
      amenities: "Mountain View, Fireplace, Hiking Trails, Spa",
      rent: "$980",
      sqft: "750 sqft",
      lease: "02.15.2025",
      suggested: "$1,000/mo",
    },
    {
      id: 3,
      name: "City Central Inn",
      image: "/hotel3.jpg",
      amenities: "City View, Gym, Restaurant, Free Parking",
      rent: "$1,350",
      sqft: "900 sqft",
      lease: "03.20.2025",
      suggested: "$1,400/mo",
    },
    {
      id: 4,
      name: "Lakeview Palace",
      image: "/hotel4.jpg",
      amenities: "Lake View, Balcony, Fishing Access, BBQ Area",
      rent: "$1,100",
      sqft: "780 sqft",
      lease: "04.10.2025",
      suggested: "$1,150/mo",
    },
    {
      id: 5,
      name: "Garden Escape Lodge",
      image: "/hotel1.jpg",
      amenities: "Garden View, Outdoor Pool, Yoga Classes, Breakfast",
      rent: "$1,050",
      sqft: "800 sqft",
      lease: "05.05.2025",
      suggested: "$1,100/mo",
    },
    {
      id: 6,
      name: "Coastal Breeze Hotel",
      image: "/hotel2.jpg",
      amenities: "Sea Breeze, Rooftop Bar, Lounge, Wi-Fi",
      rent: "$1,280",
      sqft: "920 sqft",
      lease: "06.18.2025",
      suggested: "$1,300/mo",
    },
    {
      id: 7,
      name: "The Heritage Stay",
      image: "/hotel3.jpg",
      amenities: "Historic Building, Library, Cultural Tours, AC",
      rent: "$990",
      sqft: "780 sqft",
      lease: "07.22.2025",
      suggested: "$1,020/mo",
    },
    {
      id: 8,
      name: "Skyline Tower Rooms",
      image: "/hotel4.jpg",
      amenities: "Skyline View, Elevator, Gym Access, Laundry",
      rent: "$1,400",
      sqft: "950 sqft",
      lease: "08.15.2025",
      suggested: "$1,450/mo",
    },
  ];
  

const Home = () => {
  return (
    <div className="home-container">
      {/* Sticky Navbar */}
      <nav className="navbar">
        <h2>Madison Seattle Rental Listings</h2>
      </nav>

      {/* Listings */}
      <div className="listings">
        {listings.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} className="card-img" alt="Property" />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.amenities}</p>
              <div className="details">
                <span>Rent: {item.rent}</span>
                <span>Sqft: {item.sqft}</span>
                <span>Lease Expiry: {item.lease}</span>
              </div>
              <div className="suggested">{item.suggested}</div>
              <button className="compare-btn">View Rental Comparisons</button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="load-more">
        <button>Load More</button>
      </div>
    </div>
  );
};

export default Home;
