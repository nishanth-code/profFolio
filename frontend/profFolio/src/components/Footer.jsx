import Logo from "../assets/MAKERS_BRAND_LOGO.png";
import { FaBeer } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#350346] text-white">
      <div className="grid grid-cols-3  my-10">
        <div className="my-10 mx-16  ">
          <div className="h-10 w-10">
            <img src={Logo} />
          </div>
          <p>Connecting the Researchers</p>
          <p className="text-xl">Socials</p>
          <div className="flex">
            <Link to="#" className="text-3xl h-6 w-6 my-6 mr-4">
              <FaTwitter />
            </Link>
            <Link to="#" className="text-3xl h-6 w-6 my-6 mx-4">
              <FaFacebook />
            </Link>
            <Link to="#" className="text-3xl h-6 w-6 my-6 mx-4">
              <FaInstagram />
            </Link>
            <Link to="#" className="text-3xl h-6 w-6 my-6 mx-4">
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className="my-10 mx-10 grid">
          <p className="py-2"> Contact Information</p>

          <p className="py-2">80232 18534</p>
          <p className="py-2">99860 03865</p>
          {/* <div className="">
            <h2>Location:</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.511259234821!2d77.5060307!3d12.9636721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e9c40000001%3A0x2d368cebf691c5fb!2sDr.%20Ambedkar%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1690196167837!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
        </div>

        <div className="my-10 mx-10 grid">
          <p>Dr.AIT</p>
          <a href="">About Us</a>
          <a href="">FAQ</a>
          <a href="">Testimonials</a>
          <a href="">Support</a>
        </div>
      </div>
      <p className="text-center text-gray-400">
        © {year} Dr. Ambedkar Institute of Technology. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
