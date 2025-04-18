import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { Fade, Zoom } from "react-awesome-reveal";

const SocialMedia = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-700 to-pink-600 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <Fade bottom>
          <h2 className="text-4xl font-extrabold text-white mb-8 tracking-wide">
            Connect with Us ✨
          </h2>
        </Fade>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {[
            { icon: faFacebook, link: "https://facebook.com", color: "bg-blue-500", glow: "shadow-blue-400" },
            { icon: faTwitter, link: "https://twitter.com", color: "bg-blue-400", glow: "shadow-blue-300" },
            { icon: faInstagram, link: "https://instagram.com", color: "bg-pink-500", glow: "shadow-pink-400" },
            { icon: faPinterest, link: "https://pinterest.com", color: "bg-red-600", glow: "shadow-red-400" }
          ].map((social, index) => (
            <Zoom key={index}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative ${social.color} p-5 rounded-full bg-opacity-90 backdrop-blur-md 
                transition-transform transform hover:scale-110 hover:${social.glow} shadow-lg`}
              >
                <FontAwesomeIcon icon={social.icon} size="2x" className="text-white" />
                <span className="absolute inset-0 rounded-full bg-white opacity-10 transition-all duration-500 hover:opacity-20"></span>
              </a>
            </Zoom>
          ))}
        </div>

        {/* Community Message */}
        <Fade bottom>
          <p className="text-white text-lg font-light tracking-wide">
            Join our community and stay updated with our latest offers & trends!
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default SocialMedia;
