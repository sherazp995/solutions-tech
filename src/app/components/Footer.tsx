import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="design-grid pt-16 text-white bg-accent-700">
      <div className="col-span-12 col-start-1">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-6/12 px-4 mb-8">
            <div className="footer-logo w-full md:w-1/2">
              <Link href={"/"}>
                <img alt="img" src="/images/logo.svg" className="h-8" />
              </Link>
              <p className="mt-4">
                Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis. Morbi in sem quis dui placerat ornare.
              </p>
            </div>
            <div className="icon-links mt-12 flex gap-3">
              <Link href={"https://facebook.com"} target="_blank">
                <Image
                  alt="facebook"
                  src={"/images/facebook.svg"}
                  height={30}
                  width={30}
                />
              </Link>
              <Link href={"https://linkedin.com"} target="_blank">
                <Image
                  alt="linkedin"
                  src={"/images/linkedin.svg"}
                  height={30}
                  width={30}
                />
              </Link>
              <Link href={"https://instagram.com"} target="_blank">
                <Image
                  alt="instagram"
                  src={"/images/instagram.svg"}
                  height={30}
                  width={30}
                />
              </Link>
              <Link href={"tel:+12345678910"} target="_blank">
                <Image
                  alt="tel"
                  src={"/images/phone-solid.svg"}
                  height={30}
                  width={30}
                />
              </Link>
              <Link href={"mailto:info@solution.tech"} target="_blank">
                <Image
                  alt="email"
                  src={"/images/envelope-solid.svg"}
                  height={30}
                  width={30}
                />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-8">
            <div className="links">
              <h6 className="text-lg font-semibold mb-4">Company</h6>
              <ul className="space-y-2">
                <li>
                  <Link href={"/home"} className="hover:text-gray-400">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href={"/services"} className="hover:text-gray-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href={"/portfolio"} className="hover:text-gray-400">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-8">
            <div className="links">
              <h6 className="text-lg font-semibold mb-4">Support</h6>
              <ul className="space-y-2">
                <li>
                  <Link href={"/contact"} className="hover:text-gray-400">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-8 pt-4 border-t border-gray-700 text-center lg:text-left">
          <p className="mb-4">© 2024 Solutions Tech - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
