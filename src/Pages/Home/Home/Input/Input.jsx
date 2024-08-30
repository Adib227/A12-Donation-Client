import { FaCalendar, FaClock } from 'react-icons/fa';

const Input = () => {
  return (
    <section id="donate" className="my-10 md:my-40  dark:text-gray-900">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <form
          noValidate=""
          className="flex flex-col py-6 space-y-14 md:py-0 md:px-6  "
        >
          <label className="block">
            <input
              type="text"
              placeholder="Your Name"
              className="block w-full p-3 mt-3 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-50"
            />
          </label>
          <label className="block">
            <input
              type="email"
              placeholder="Your Email"
              className="block w-full p-3 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-50"
            />
          </label>
          <label className="block">
            <input
              type="phone"
              placeholder="Phone Number"
              className="block w-full p-3 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-50"
            />
          </label>
          <label className="block">
            <textarea
              rows="3"
              placeholder="Your Message"
              className="block w-full p-3 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-50"
              data-gramm="false"
              wt-ignore-input="true"
            ></textarea>
          </label>
          <button
            type="button"
            className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600"
          >
            Submit
          </button>
        </form>
        <div className="py-6 md:py-0 md:px-6 space-y-8">
          <div>
            <h1 className="text-[#cb404c] font-medium mb-2">Registration</h1>
            <h1 className="text-4xl font-bold">
              Your Donation Can Make Someone’s Life Better
            </h1>
          </div>
          <div>
            <p className="">
              <p className="font-bold"> Donate Blood, Save Lives!</p>
              <p>
                Each donation can make a profound difference, with the potential
                to save up to three lives. By giving just a little of your time
                and blood, you provide hope and healing to patients in need.
                Join us today – your act of kindness is vital for a healthier
                community.
              </p>
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-6">Opening Hours</h1>
            <hr />
            <div className="flex justify-between py-4">
              <h1 className="flex">
                <p className="p-1">
                  <FaCalendar></FaCalendar>
                </p>
                <p> Sunday - Saturday</p>
              </h1>
              <h1 className="flex">
                <p className="p-1">
                  <FaClock></FaClock>
                </p>
                <p> 08.00 AM - 15.00 PM</p>
              </h1>
            </div>
            <hr />
          </div>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Fake address, 9999 City</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>123456789</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>contact@business.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Input;
