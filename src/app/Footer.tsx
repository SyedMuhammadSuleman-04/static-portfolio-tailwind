import React from "react";

const Footer = () => {
  return (
    <footer className="text-slate-400 bg-slate-900">
      <section className="flex flex-col lg:flex-row justify-between items-center lg:items-start p-4 lg:p-10 gap-y-6 lg:gap-x-6">
        <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:gap-x-10">
          {/* More Section */}
          <div>
            <h3 className="font-bold text-3xl mb-6">More</h3>
            <ul className="space-y-5">
              <li>Web Development</li>
              <li>Ecommerce Website</li>
              <li>Portfolio</li>
              <li>Mobile App Development</li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="font-bold text-3xl mb-6">Address</h3>
            <ul className="space-y-5">
              <li>Madras Cooperative Housing</li>
              <li>Society Scheme 33</li>
              <li>Karachi</li>
              <li>sulemansyedmuhammad41@gmail.com</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="text-slate-500 flex justify-center m-12">
        <p>Copyright ©2024 Syed Muhammad Suleman</p>
      </div>
    </footer>
  );
};

export default Footer;
