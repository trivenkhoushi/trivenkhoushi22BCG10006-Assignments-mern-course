import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, image: 'https://via.placeholder.com/300', description: 'Premium wireless headphones with noise cancellation', features: ['30-hour battery life', 'Active Noise Cancellation', 'Bluetooth 5.0'] },
  { id: 2, name: 'Smart Watch', price: 199.99, image: 'https://via.placeholder.com/300', description: 'Feature-packed smartwatch with health monitoring', features: ['Heart rate monitor', 'Sleep tracking', 'Water resistant'] },
  { id: 3, name: 'Bluetooth Speaker', price: 79.99, image: 'https://via.placeholder.com/300', description: 'Portable speaker with 20-hour battery life', features: ['360° sound', 'IPX7 waterproof', 'Party mode'] },
  { id: 4, name: 'Laptop Backpack', price: 49.99, image: 'https://via.placeholder.com/300', description: 'Durable backpack with USB charging port', features: ['Anti-theft design', 'USB charging port', 'Water resistant'] },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container mx-auto px-6 py-12">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-blue-600 font-semibold mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <h3 className="text-xl font-semibold mb-3">Features:</h3>
          <ul className="list-disc pl-5 mb-6">
            {product.features.map((feature, index) => (
              <li key={index} className="mb-1">{feature}</li>
            ))}
          </ul>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;