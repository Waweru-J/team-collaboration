import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const serviceDetails = {
  "commodity-trading": {
    title: "Commodity Trading",
    image: "/images/commodity-trading-large.jpg",
    description: "Detailed description about commodity trading...",
    features: [
      "Wide range of agricultural products",
      "Minerals and energy trading",
      "Intra-Africa trade facilitation",
    ],
  },
  "construction-materials": {
    title: "Construction Materials",
    image: "/images/construction-materials-large.jpg",
    description: "Detailed description about construction materials...",
    features: [
      "Steel, cement, and aggregates",
      "Timely delivery and high standards",
      "Eco-friendly building solutions",
    ],
  },
  // Add more service details here
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <div className="text-center text-red-500 min-h-screen mt-12">Service not found.</div>;
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen mt-12 text-black">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)} // Navigate to the previous page
          className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
        >
          <FaArrowLeft className="mr-2" /> Back to Services
        </button>

        {/* Service Details */}
        <h1 className="text-4xl font-bold text-indigo-800 mb-6">{service.title}</h1>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <p className="text-lg text-gray-700 mb-8">{service.description}</p>
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Key Features</h2>
        <ul className="list-disc pl-5">
          {service.features.map((feature, index) => (
            <li key={index} className="text-lg text-gray-700">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetails;
