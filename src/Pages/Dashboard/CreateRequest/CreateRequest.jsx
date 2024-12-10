import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateRequest = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  // const DistrictForm = () => {
  const [formData, setFormData] = useState({
    district: '',
    upazila: '',
    time: '',
  });

  const [districts, setDistricts] = useState([
    'Dhaka',
    'Chittagong',
    'Sylhet',
    'Khulna',
  ]);
  const [upazilas, setUpazilas] = useState([]);

  console.log(districts, upazilas);

  // const districtData = {
  //   Dhaka: ['Dhanmondi', 'Gulshan', 'Mirpur'],
  //   Chattogram: ['Pahartali', 'Agrabad', 'Halishahar'],
  //   Khulna: ['Sonadanga', 'Khalishpur', 'Daulatpur'],
  // };

  useEffect(() => {
    if (formData.district === 'Dhaka') {
      setUpazilas(['Uttara', 'Banani', 'Mirpur', 'Dhanmondi']);
    } else if (formData.district === 'Chittagong') {
      setUpazilas(['Halishahar', 'Pahartali', 'Rangunia']);
    } else if (formData.district === 'Sylhet') {
      setUpazilas(['Beanibazar', 'Golapganj', 'Kanaighat']);
    } else if (formData.district === 'Khulna') {
      setUpazilas(['Rupsha', 'Dumuria', 'Fultala']);
    } else {
      setUpazilas([]);
    }
  }, [formData.district]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(handleChange);

  // console.log(DistrictForm);

  const handleAddForm = event => {
    event.preventDefault();
    const form = event.target;
    const requesterName = form.requesterName.value;
    const requesterEmail = form.requesterEmail.value;
    const recipientName = form.recipientName.value;
    const district = form.district.value;
    const upazila = form.upazila.value;
    const time = form.time.value;
    const deadline = form.deadline.value;
    const hospitalName = form.hospitalName.value;
    const address = form.address.value;
    const message = form.message.value;
    const newBloodRequest = {
      requesterName,
      requesterEmail,
      recipientName,
      district,
      upazila,
      time,
      deadline,
      hospitalName,
      address,
      message,
    };
    console.log(newBloodRequest);

    fetch('https://localhost:5000/bloodRequest', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newBloodRequest),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  const handleClick = () => {
    {
      Swal.fire({
        title: 'Success!',
        text: 'Post Added Successfully',
        icon: 'success',
        confirmButtonText: 'Thank you',
      });
    }
  };

  console.log(handleClick);

  return (
    <div>
      <div className="text-center py-5 md:py-10 text-3xl font-bold">
        Donation Request
      </div>
      <section className="p-6 rounded-xl shadow-lg mb-20 dark:bg-base-200 dark:text-gray-900 max-w-7xl mx-auto animate__animated animate__fadeInUp">
        <form
          onSubmit={handleAddForm}
          noValidate=""
          action=""
          className="max-w-full container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md text-center shadow-sm dark:bg-base-200">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4 ">
              <div className="col-span-full sm:col-span-3 items-center text-left mb-4">
                <label htmlFor="requesterName" className="font-medium">
                  Requester Name
                </label>
                <input
                  // id="requesterName"
                  type="text"
                  name="requesterName"
                  defaultValue={user.displayName}
                  readOnly
                  required
                  className="w-full h-full rounded-xl dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="requesterEmail" className="font-medium">
                  Requester Email
                </label>
                <input
                  // id="email"
                  type="text"
                  name="requesterEmail"
                  defaultValue={user.email}
                  readOnly
                  required
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="recipientName" className="font-medium">
                  Recipient Name
                </label>
                <input
                  // id="name"
                  type="text"
                  name="recipientName"
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              {/* <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="category" className="font-medium">
                  Category
                </label>
                <input
                  // id="category"
                  type="text"
                  name="category"
                  placeholder=""
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div> */}
              <div className=" mt-2 md:mt-6">
                <label htmlFor="district" className="font-semibold">
                  District:
                </label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select District</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
              <div className=" mt-2 md:mt-6">
                <label htmlFor="upazila" className="font-semibold">
                  Upazila:
                </label>
                <select
                  id="upazila"
                  name="upazila"
                  value={formData.upazila}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Upazila</option>
                  {upazilas.map((upazila, index) => (
                    <option key={index} value={upazila}>
                      {upazila}
                    </option>
                  ))}
                </select>
              </div>
              <div className=" mt-2 md:mt-6">
                <label htmlFor="time" className="font-semibold">
                  Donation Time:
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="hospitalName" className="font-medium">
                  Hospital Name
                </label>
                <input
                  // id="hospitalName"
                  type="text"
                  name="hospitalName"
                  placeholder=""
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="deadline" className="font-medium ">
                  Donation Date
                </label>
                <input
                  id="deadline"
                  type="text"
                  hidden
                  name="deadline"
                  placeholder=""
                  className=""
                />
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="dd/mm/yyyy"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="address" className="font-medium">
                  Full Address
                </label>
                <input
                  // id="address"
                  type="text"
                  name="address"
                  placeholder=""
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="message" className="font-medium">
                  Message
                </label>
                <input
                  // id="message"
                  type="text"
                  name="message"
                  placeholder=""
                  required
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              {/* {user ? (
                <>
                  <div className="col-span-full sm:col-span-6 text-left mb-4">
                    <label htmlFor="name" className="font-medium">
                      Full Address
                    </label>
                    <input
                      // id="name"
                      type="text"
                      name="name"
                      className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-6 text-left mb-4">
                    <label htmlFor="email" className="font-medium">
                      Email
                    </label>
                    <input
                      // id="email"
                      type="email"
                      name="email"
                      defaultValue={user.email}
                      className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                </>
              ) : (
                <>
                  {' '}
                  <div className="col-span-full sm:col-span-6 text-left mb-4">
                    <label htmlFor="name" className="font-medium">
                      Name
                    </label>
                    <input
                      // id="name"
                      type="text"
                      name="name"
                      placeholder=""
                      className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-6 text-left mb-4">
                    <label htmlFor="email" className="font-medium">
                      Email
                    </label>
                    <input
                      // id="email"
                      type="email"
                      name="email"
                      placeholder=""
                      className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                </>
              )}  */}
              <div className="col-span-full sm:col-span-6 my-4">
                <button
                  onClick={handleClick}
                  className="btn btn-success w-full"
                >
                  Request
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default CreateRequest;
