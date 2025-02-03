import React, { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState(""); // To handle the input state

  const footerSections = [
    {
      title: "INFORMATION",
      links: [
        { text: "Home", href: "/" },
        { text: "Gift Card", href: "/" },
        { text: "Store Locator", href: "/" },
        { text: "Blogs", href: "/" },
        { text: "Sitemap", href: "/" },
      ],
    },
    {
      title: "OUR POLICIES",
      links: [
        { text: "About Us", href: "/" },
        { text: "Return & Refund", href: "/" },
        { text: "Terms & Conditions", href: "/" },
        { text: "Privacy Policy", href: "/" },
        { text: "Delivery & Shipping", href: "/" },
      ],
    },
    {
      title: "CONTACT US",
      contactInfo: [
        { label: "Address", value: "B - 33, 325/5 Near, GT Road West, Saroop Nagar, Ludhiana, Punjab 141008" },
        { label: "Phone", value: "9915712012", link: "tel:+91923435466" },
        { label: "Email", value: "customercare.octave@gmail.com", link: "mailto:customercare.octave@gmail.com" },
      ]
    },
    {
      title: "SUBSCRIBE OUR NEWSLETTER"
    }
  ];

  // Handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail(""); // Clear the input field after submit
  }

  return (
    <>
      <footer className="bg-gray-800 text-white py-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Mapping over sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                {/* Check if there are links */}
                {section.links && (
                  <ul>
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.href} className="text-xl hover:text-yellow-400">{link.text}</a>
                      </li>
                    ))}
                  </ul>
                )}
                {/* Check if there are contact info */}
                {section.contactInfo && (
                  <address className="text-sm md:text-xl">
                    {section.contactInfo.map((info, idx) => (
                      <p key={idx} className="mt-2">
                        <strong>{info.label}:</strong>
                        {info.link ? (
                          <a href={info.link} className="hover:text-yellow-400">{info.value}</a>
                        ) : (
                          <span>{info.value}</span>
                        )}
                      </p>
                    ))}
                  </address>
                )}

                {/* For Newsletter Section */}
                {section.title === "SUBSCRIBE OUR NEWSLETTER" && (
                  <div className="mt-4">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full p-2 bg-white text-black rounded-md placeholder-gray-500"
                        required
                      />
                      <button
                        type="submit"
                        className="mt-2 w-full p-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Footer */}
          <div className="text-center text-sm mt-10 border-t border-gray-600 pt-4">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
