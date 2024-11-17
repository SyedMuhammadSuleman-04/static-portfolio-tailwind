import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <main
      id="contact"
      className="flex flex-col lg:flex-row justify-between items-center lg:items-start p-4 lg:p-10 gap-x-6"
    >
      {/* Contact Links Section */}
      <div className="order-2 lg:order-1 lg:w-1/2">
        <section className="space-y-8 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-red-600 my-8 whitespace-nowrap">
            GET IN TOUCH
          </h2>
          <ul className="space-y-12 md:space-y-11">
            <li>
              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/li.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
                <a
                  href="https://www.linkedin.com/in/syed-muhammad-suleman-a3784b2ab/"
                  className="text-white text-lg hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/github.png"
                  alt="GitHub"
                  className="bg-slate-400 rounded-lg"
                  width={40}
                  height={40}
                />
                <a
                  href="https://github.com/SyedMuhammadSuleman-04"
                  className="text-white text-lg hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/fb.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
                <a
                  href="https://www.facebook.com/people/Muhammad-Suleman/pfbid027Ckhbnx5LicYrHeiRw66nEAws4hknEFSAoLT5u9xjoBrqgmwMkzbb6dzLf8QiYuJl/?mibextid=ngobeXctTp5pD3Zm"
                  className="text-white text-lg hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/wa.png"
                  alt="WhatsApp"
                  width={40}
                  height={40}
                />
                <a
                  href="https://wa.me/923378425680"
                  className="text-white text-lg hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/mail.png"
                  alt="email"
                  width={40}
                  height={40}
                />
                <a
                  href="https://email.me/sulemansyedmuhammad41@gmail.com"
                  className="text-white text-lg hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/insta.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
                <a
                  href="https://www.instagram.com/syedmuhammadsuleman_04/#"
                  className="text-white text-lg hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </li>
          </ul>
        </section>
      </div>

      {/* Contact Form Section */}
      <div className="order-1 lg:order-2 lg:w-1/2">
        <section className="p-6 border-4 border-blue-700 rounded-lg max-w-full md:max-w-sm mx-auto my-10 md:mx-4">
          <h1 className="font-extrabold text-3xl text-center border-4 border-gray-500 bg-blue-50 text-blue-900 px-4 py-2 mb-6 rounded-lg">
            Feel Free To Contact Us
          </h1>

          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-blue-500 dark:text-white">
                Enter Your Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2.5 border-4 rounded-lg border-gray-500 text-sm text-gray-900 dark:text-white"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-blue-500 dark:text-white">
                Enter Your Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2.5 border-4 rounded-lg border-gray-500 text-sm text-gray-900 dark:text-white"
                placeholder="name@gmail.com"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-blue-500 dark:text-white">
                Enter Your Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="ABCabc123#@!"
                className="w-full p-2.5 border-4 border-gray-500 rounded-lg text-sm text-gray-900 dark:text-white"
                required
              />
            </div>

            <div className="flex items-start mb-5">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border-4 border-gray-500 rounded focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-blue-700"
                required
              />
              <label className="ml-2 text-sm font-medium text-blue-500 dark:text-gray-300">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-purple-800 to-blue-700 hover:bg-slate-200 text-white"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Contact;
