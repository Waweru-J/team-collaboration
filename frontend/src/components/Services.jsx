import { Link } from 'react-router-dom';
import { FaRegLightbulb, FaTools, FaBuilding, FaLeaf, FaWarehouse, FaIndustry, FaGlobeAmericas } from 'react-icons/fa'; // Import icons

const services = [
  {
    id: 1,
    title: "Commodity Trading",
    image: "/images/commodity-trading.jpg", // Replace with actual image path
    description: "Connecting local producers with global markets.",
    route: "/services/commodity-trading",
    icon: <FaGlobeAmericas className="text-indigo-600" />,
  },
  {
    id: 2,
    title: "Construction Materials",
    image: "/images/construction-materials.jpg", // Replace with actual image path
    description: "Supporting infrastructure development with high-quality supplies.",
    route: "/services/construction-materials",
    icon: <FaBuilding className="text-indigo-600" />,
  },
  {
    id: 3,
    title: "Agricultural Products",
    image: "/images/agricultural-products.jpg", // Replace with actual image path
    description: "Promoting food security through exports and imports.",
    route: "/services/agricultural-products",
    icon: <FaLeaf className="text-indigo-600" />,
  },
  {
    id: 4,
    title: "Machinery & Equipment",
    image: "/images/machinery-equipment.jpg", // Replace with actual image path
    description: "Supplying advanced tools for industrial growth.",
    route: "/services/machinery-equipment",
    icon: <FaTools className="text-indigo-600" />,
  },
  {
    id: 5,
    title: "Energy Solutions",
    image: "/images/energy-solutions.jpg", // Replace with actual image path
    description: "Enabling access to sustainable and renewable energy products.",
    route: "/services/energy-solutions",
    icon: <FaRegLightbulb className="text-indigo-600" />,
  },
  {
    id: 6,
    title: "Raw Materials & Finished Goods",
    image: "/images/raw-materials.jpg", // Replace with actual image path
    description: "Supplying essential raw materials and finished goods.",
    route: "/services/raw-materials",
    icon: <FaWarehouse className="text-indigo-600" />,
  },
  {
    id: 7,
    title: "Logistics and Supply Chain",
    image: "/images/logistics.jpg", // Replace with actual image path
    description: "Ensuring efficient delivery of goods with logistics solutions.",
    route: "/services/logistics",
    icon: <FaIndustry className="text-indigo-600" />,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen mt-12 text-black">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-800 mb-6">Our Services</h1>
        <p className="text-lg text-gray-700 mb-12">
          At Dealogic Africa Limited, we specialize in providing a wide range of high-quality commodities and services to businesses across Africa and beyond. Our expertise and strategic partnerships enable us to deliver value-driven solutions that meet the unique needs of our clients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link to={service.route} key={service.id} className="group">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="bg-indigo-600 p-4">
                  {service.icon}
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
