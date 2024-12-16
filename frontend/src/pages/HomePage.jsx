import {  FaLeaf,  FaGlobeAmericas, FaBuilding } from 'react-icons/fa'; // Icons for services
import { Swiper, SwiperSlide } from 'swiper/react'; // For the carousel
import 'swiper/css'; // For newer versions, the CSS import path has changed


const Home = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Chief Executive Officer',
      image: '/images/john.jpg',
      bio: 'John brings over 15 years of experience in international trade and has been instrumental in driving the company’s vision and growth.',
    },
    {
      name: 'Jane Smith',
      role: 'Head of Operations',
      image: '/images/jane.jpg',
      bio: 'Jane oversees the smooth execution of all operations, ensuring efficiency and excellence in every project.',
    },
    {
      name: 'Michael Brown',
      role: 'Director of Sustainability',
      image: '/images/michael.jpg',
      bio: 'Michael is passionate about driving sustainable practices and implementing eco-friendly solutions across our operations.',
    },
  ];

  return (
    <div className="bg-[#101820]">
      {/* bg-[#355E] */}
      {/* bg-[#2c5454ed] */}
      {/* Hero Section */}
      <section className="bg text-white text-center py-20">
        <h1 className="text-[#FEE715] text-4xl font-bold mb-4">Driving Sustainable Trade Across Africa and Beyond</h1>
        <p className="text-[#FEE715] text-lg mb-8">Empowering businesses, fostering growth, and connecting markets with high-quality commodities and innovative solutions.</p>
        <div className="space-x-4">
          <a href="/services" className="bg-white text-indigo-800 py-2 px-6 rounded-md hover:bg-indigo-100">Explore Our Services</a>
          <a href="/contact" className="bg-white text-indigo-800 py-2 px-6 rounded-md hover:bg-gray-100">Contact Us Today</a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#FEE715] mb-4">Who We Are</h2>
        <p className="text-lg text-[#FEE715] mb-8">
          Dealogic Africa Limited is a dynamic and forward-thinking trading company specializing in sourcing and delivering high-quality commodities across Africa. With a commitment to integrity, sustainability, and innovation, we are at the forefront of Africa’s evolving trade landscape, promoting trade into, out of, and within Africa.
        </p>
        <a href="/about" className="text-[#FEE715] underline hover:text-[#FEE715]">Learn More About Us</a>
      </section>

      {/* Meet Our Team Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#FEE715] mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-100 p-6 shadow-md rounded-md text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-indigo-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-700 mt-4">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">What We Offer</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our comprehensive services are designed to meet the diverse needs of businesses and industries across Africa. From agricultural products to renewable energy solutions, we ensure the efficient delivery of essential commodities.
          </p>

          {/* Carousel for service images */}
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mb-8"
          >
            <SwiperSlide>
              <img src="/images/service-1.jpg" alt="Service 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/service-2.jpg" alt="Service 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/service-3.jpg" alt="Service 3" className="w-full h-64 object-cover rounded-lg shadow-md" />
            </SwiperSlide>
          </Swiper>

          {/* Service List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-md">
              <div className="text-indigo-600 text-3xl mb-4"><FaGlobeAmericas /></div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">Commodity Trading</h3>
              <p className="text-gray-700">Connecting local producers with global markets.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <div className="text-indigo-600 text-3xl mb-4"><FaBuilding /></div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">Construction Materials</h3>
              <p className="text-gray-700">Supporting infrastructure development with high-quality supplies.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <div className="text-indigo-600 text-3xl mb-4"><FaLeaf /></div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">Energy Solutions</h3>
              <p className="text-gray-700">Enabling access to sustainable and renewable energy products.</p>
            </div>
          </div>
          <a href="/services" className="mt-8 inline-block bg-indigo-800 text-white py-2 px-6 rounded-md hover:bg-teal-900">Explore Our Services</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
