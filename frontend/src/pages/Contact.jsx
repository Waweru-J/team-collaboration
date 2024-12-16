import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 min-h-screen mt-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-800 mb-6 text-center">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-12 text-center">
          At Dealogic Africa Limited, we’re here to assist with your questions, solutions, or partnership inquiries.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Our Office Location</h2>
              <p className="flex items-center text-lg text-gray-700">
                <FaMapMarkerAlt className="mr-2 text-indigo-800" />
                Westpark Towers, Off Muthithi Road, Nairobi, Kenya
              </p>
              <p className="flex items-center text-lg text-gray-700">
                <FaPhone className="mr-2 text-indigo-800" />
                <a href="tel:+254723113398" className="text-indigo-800 hover:underline">+254 723 113 398</a>
              </p>
              <p className="flex items-center text-lg text-gray-700">
                <FaEnvelope className="mr-2 text-indigo-800" />
                <a href="mailto:info@dealogicafrica.com" className="text-indigo-800 hover:underline">info@dealogicafrica.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Business Hours</h2>
              <p className="text-lg text-gray-700">Monday to Friday: 9:00 AM – 6:00 PM</p>
              <p className="text-lg text-gray-700">Saturday: 10:00 AM – 4:00 PM</p>
              <p className="text-lg text-gray-700">Closed on Sundays and Public Holidays</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-indigo-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-lg text-gray-700">First Name</label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-lg text-gray-700">Last Name</label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Flex container for Email and Phone fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-lg text-gray-700">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="johndoe@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg text-gray-700">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="+254 723 113 398"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-800 text-white py-3 px-4 rounded-md font-semibold hover:bg-indigo-900 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
