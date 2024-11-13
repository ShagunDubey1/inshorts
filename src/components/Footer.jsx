function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center p-4 px-8">
        <div className="flex items-center space-x-4">
          <div>
            <h2 className="font-semibold text-lg">Inshorts Pte. Ltd.</h2>
            <p className="text-gray-400">©COPYRIGHT 2024</p>
          </div>
        </div>

        <div className="flex space-x-6 text-gray-400">
          <a href="/contact" className="hover:text-white">
            Contact Us
          </a>
          <a href="/terms" className="hover:text-white">
            Terms & conditions
          </a>
          <a href="/privacy" className="hover:text-white">
            Privacy Policies
          </a>
        </div>

        <div className="flex space-x-4">
          <a href="https://www.facebook.com" className="hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" className="hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
