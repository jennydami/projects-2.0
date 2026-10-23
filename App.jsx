
import { useState } from "react";
import "./App.css";

const products = [
  {
    name: "The Heritage Edit",
    category: "Men",
    price: "₦85,000",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "The Muse Collection",
    category: "Women",
    price: "₦65,000",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "The Modern Classic",
    category: "Men",
    price: "₦55,000",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "The Signature Dress",
    category: "Women",
    price: "₦72,000",
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=700&q=80",
  },
];

export default function App() {
  const [category, setCategory] = useState("All");
  const [bag, setBag] = useState([]);

  const visibleProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="store">
      <div className="announcement">
        ROOTED IN CULTURE · MADE FOR TOMORROW
      </div>

      <header className="navbar">
        <a href="#home" className="logo">
          UNKOWN<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#story">Our Story</a>
        </nav>

        <button
          className="bag-button"
          onClick={() => alert(
            bag.length
              ? "Your bag: " + bag.join(", ")
              : "Your shopping bag is empty."
          )}
        >
          Bag ({bag.length})
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1800&q=85"
            alt="Fashion editorial"
            className="hero-image"
          />
          <div className="hero-shade" />

          <div className="hero-content">
            <p className="eyebrow">TRADITION, REIMAGINED</p>
            <h1>
              Our roots.
              <br />
              <em>Our identity.</em>
            </h1>
            <p>
              Discover timeless fashion inspired by heritage
              and created for the way we live today.
            </p>
            <a className="shop-button" href="#collections">
              EXPLORE THE COLLECTION ↗
            </a>
          </div>
        </section>

        <section className="story" id="story">
          <p className="eyebrow">THE WORLD OF UNKOWN</p>
          <h2>
            Tradition is our foundation.
            <br />
            <em>Style is our expression.</em>
          </h2>
          <p>
            Thoughtful designs, beautiful details and fashion
            that celebrates where we come from.
          </p>
        </section>

        <section className="collections" id="collections">
          <p className="eyebrow">CURATED FOR YOU</p>
          <h2>Discover the collection</h2>

          <div className="filters">
            {["All", "Women", "Men"].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={category === item ? "filter active" : "filter"}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {visibleProducts.map((product) => (
              <article className="product" key={product.name}>
                <img src={product.image} alt={product.name} />
                <p className="product-category">{product.category}'S WEAR</p>
                <h3>{product.name}</h3>
                <div className="product-bottom">
                  <span>{product.price}</span>
                  <button onClick={() => setBag([...bag, product.name])}>
                    ADD +
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="closing">
          <p className="eyebrow">THE UNKOWN SIGNATURE</p>
          <h2>Wear your heritage.</h2>
          <a href="#collections" className="shop-button">
            SHOP COLLECTIONS ↗
          </a>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">UNKOWN<span>.</span></a>
        <p>Rooted in culture. Made for tomorrow.</p>
        <p>© {new Date().getFullYear()} UNKOWN</p>
      </footer>
    </div>
  );
}
