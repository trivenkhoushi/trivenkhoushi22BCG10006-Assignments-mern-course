import ProductCard from './productcard';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, image: 'https://via.placeholder.com/300', description: 'Premium wireless headphones with noise cancellation' },
  { id: 2, name: 'Smart Watch', price: 199.99, image: 'https://via.placeholder.com/300', description: 'Feature-packed smartwatch with health monitoring' },
  { id: 3, name: 'Bluetooth Speaker', price: 79.99, image: 'https://via.placeholder.com/300', description: 'Portable speaker with 20-hour battery life' },
  { id: 4, name: 'Laptop Backpack', price: 49.99, image: 'https://via.placeholder.com/300', description: 'Durable backpack with USB charging port' },
];

function Products() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;