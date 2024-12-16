import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Overview */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dealogic Africa Limited</h3>
            <p className="text-sm text-gray-300">
              We specialize in driving sustainable trade and economic growth across Africa. From commodity trading to sustainable solutions, we empower businesses and communities to achieve long-term success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/services" className="hover:text-gray-400">Services</a></li>
              <li><a href="/sustainability" className="hover:text-gray-400">Sustainability</a></li>
              <li><a href="/global-partnerships" className="hover:text-gray-400">Global Partnerships</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Westpark Towers, Off Muthithi Road, Nairobi, Kenya</li>
              <li>Phone: <a href="tel:+254723113398" className="hover:text-gray-400">+254 723 113 398</a></li>
              <li>Email: <a href="mailto:info@dealogicafrica.com" className="hover:text-gray-400">info@dealogicafrica.com</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-xl hover:text-gray-400"><FaLinkedin /></a>
            <a href="#" className="text-xl hover:text-gray-400"><FaFacebook /></a>
            <a href="#" className="text-xl hover:text-gray-400"><FaTwitter /></a>
          </div>

          {/* Copyright Information */}
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Dealogic Africa Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
