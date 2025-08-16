import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WishlistProduct from "@/components/WishlistProduct";

const artworks = Array(6).fill({
  name: "Name of artwork",
  price: "₹1200",
  image: "/artwork-placeholder.jpg", // Replace with actual path
});

export default function WishlistPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Title */}
        <h1 className="text-[40px] font-serif mb-2">My Wishlist</h1>
        <hr className="border-t border-gray-300 mb-8" />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((art, index) => (
            <WishlistProduct
              key={index}
              name={art.name}
              price={art.price}
              image={art.image}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
