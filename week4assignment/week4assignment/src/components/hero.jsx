function Hero() {
  return (
    <div className="bg-blue-500 text-white py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-2">Welcome to ShopEase</h1>
        <p className="text-xl mb-8">Discover amazing products at unbeatable prices</p>
        <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hero;