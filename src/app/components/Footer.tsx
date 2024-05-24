export default function Footer() {
  return (
    <footer className="py-16 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="footer-logo">
              <a href="index.html">
                <img alt="img" src="assets/img/logo.png" />
              </a>
              <p className="mt-4">
                Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis. Morbi in sem quis dui placerat ornare.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="links">
              <h6 className="text-lg font-semibold mb-4">Additional links</h6>
              <ul className="space-y-2">
                <li>
                  <a href="about.html" className="hover:text-gray-400">
                    About us
                  </a>
                </li>
                <li>
                  <a href="services.html" className="hover:text-gray-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="team.html" className="hover:text-gray-400">
                    Team
                  </a>
                </li>
                <li>
                  <a href="blog-grid.html" className="hover:text-gray-400">
                    News
                  </a>
                </li>
                <li>
                  <a href="contacts.html" className="hover:text-gray-400">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="latest-news">
              <h6 className="text-lg font-semibold mb-4">Latest news</h6>
              <ul className="space-y-6">
                <li>
                  <p>
                    Quisque volutpat mattis eros. Nullam malesuadarat ut turpis.
                  </p>
                  <span className="text-sm text-gray-400">
                    Dec 10, 2019 / 0 comments
                  </span>
                </li>
                <li>
                  <p>Aliquam porttitor mauris sit amet orci.</p>
                  <span className="text-sm text-gray-400">
                    Dec 10, 2019 / 0 comments
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="subscribe">
              <h6 className="text-lg font-semibold mb-4">Subscribe</h6>
              <p className="mb-4">
                Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
                diam.
              </p>
              <form className="flex space-x-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
                />
                <button className="px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-500 focus:outline-none">
                  Go
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-8 pt-4 border-t border-gray-700 text-center lg:text-left">
          <p className="mb-4">
            © 2024 Solutions Tech - All Rights Reserved
          </p>
          <ul className="flex justify-center lg:justify-start space-x-4">
            <li>
              <a href="#" className="text-xl hover:text-gray-400">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#" className="text-xl hover:text-gray-400">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="text-xl hover:text-gray-400">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="text-xl hover:text-gray-400">
                <i className="fab fa-medium" />
              </a>
            </li>
            <li>
              <a href="#" className="text-xl hover:text-gray-400">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
