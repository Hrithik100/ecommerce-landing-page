import ProductCard from "./ProductCard";

const products = [
  {
    id: 0,
    img: "src/assets/headphone-1.png",
    category: "Headphones",
    title: "Gaming Headphones",
    price: "4000",
  },
  {
    id: 1,
    img: "src/assets/mobile-1.png",
    category: "Mobile Tablets",
    title: "Samsung Galaxy Tablet",
    price: "20000",
  },
  {
    id: 2,
    img: "src/assets/headphone-2.png",
    category: "Headphones",
    title: "Wireless Headphone",
    price: "3000",
  },
  {
    id: 3,
    img: "src/assets/headphone-3.png",
    category: "Headphones",
    title: "Wireless Headphones",
    price: "2000",
  },

  {
    id: 5,
    img: "src/assets/ipad-1.png",
    category: "Mobile Tablets",
    title: "Apple Ipad Air",
    price: "30000",
  },
  {
    id: 6,
    img: "src/assets/cpu-1.png",
    category: "CPU Heat Pipes",
    title: "Deepcool Air Cooler",
    price: "7000",
  },

];

const NewArrival = () => {
  return (
    <div className="container mt-32">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-4xl font-medium">New Arrival</h2>
        
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            img={product.img}
            category={product.category}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
