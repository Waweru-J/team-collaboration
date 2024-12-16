import { FaRegHandshake, FaChartLine, FaGlobe, FaLeaf, FaLightbulb, FaAward } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 min-h-screen mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At <strong>Dealogic Africa Limited</strong>, we are driven by a passion to transform Africa’s trading landscape. Founded with the vision of promoting economic growth and fostering sustainable development, we specialize in sourcing and delivering high-quality commodities across Africa and beyond.
          </p>
        </div>

        {/* Vision and Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="text-center bg-white p-8 shadow-md rounded-lg">
            <FaRegHandshake className="text-indigo-800 w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700">
              To be the leading trade partner in Africa, driving sustainable economic growth and fostering global connectivity.
            </p>
          </div>

          <div className="text-center bg-white p-8 shadow-md rounded-lg">
            <FaChartLine className="text-indigo-800 w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              To deliver exceptional trading solutions by leveraging innovation, sustainability, and strategic partnerships to connect businesses and markets across Africa.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaAward className="text-indigo-800 w-10 h-10 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-indigo-800">Integrity</h3>
              <p className="text-gray-700">We conduct our business with honesty, transparency, and accountability.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaLeaf className="text-indigo-800 w-10 h-10 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-indigo-800">Sustainability</h3>
              <p className="text-gray-700">We are committed to eco-friendly practices and contributing to the well-being of communities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaLightbulb className="text-indigo-800 w-10 h-10 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-indigo-800">Innovation</h3>
              <p className="text-gray-700">We embrace change and continuously seek new ways to deliver value to our clients.</p>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaGlobe className="text-indigo-800 w-10 h-10 mb-4" />
              <h3 className="text-2xl font-semibold text-indigo-800">Global Partnerships</h3>
              <p className="text-gray-700">
                Ensuring reliable sourcing and timely delivery of commodities through strong global alliances.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaLeaf className="text-indigo-800 w-10 h-10 mb-4" />
              <h3 className="text-2xl font-semibold text-indigo-800">Commitment to Sustainability</h3>
              <p className="text-gray-700">
                Promoting green solutions and ethical trade practices that drive eco-friendly initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Join Us on Our Journey</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            At Dealogic Africa Limited, we are more than just a trading company – we are your partners in progress. Join us on our journey to drive sustainable development, create opportunities, and connect Africa with the world.
          </p>
          <a
            href="/contact"
            className="bg-indigo-800 text-white py-2 px-6 rounded-md hover:bg-indigo-900"
          >
            Contact Us Today
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
