import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import 'animate.css';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  // const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const handleRegister = async e => {
    e.preventDefault();
    // const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.files[0];
    const role = e.target.role.value;

    const formData = new FormData();
    formData.append('image', photo);

    console.log(name, email, password, photo, role);
    let userinfo = {
      name,
      email,
      password,
      photo,
      role,
    };
    console.log(userinfo);

    try {
      const { data: imageData } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_HOSTING_KEY
        }`,
        formData
      );

      const displayURL = imageData.data.display_url;

      const result = await registerUser(email, password);
      console.log('User registered successfully:', result.user);

      const userinfo = { name, email, password, photo: displayURL, role };
      console.log(userinfo);

      fetch('http://localhost:5000/UserCollection', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userinfo),
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            toast.success('Registered and Stored!');
            navigate(location?.state ? location?.state : '/');
          } else {
            toast.error('Failed to register user');
          }
        });

      console.log(userinfo);

      setRegisterError('');
      setSuccess('');

      if (password.length < 6) {
        setRegisterError('Password should contain 6 characters');
        return;
      } else if (!/[A-Z]/.test(password)) {
        setRegisterError(
          'Your password should contain at least one uppercase character'
        );
        return;
      } else if (!/[a-z]/.test(password)) {
        setRegisterError(
          'Your password should contain at least one lowercase character'
        );
        return;
      }

      registerUser(email, password)
        .then(result => {
          console.log(result.user);
          Navigate('/');
        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Bloodonors - Register</title>
      </Helmet>{' '}
      <div>
        <div className="hero max-w-6xl mx-auto lg:min-h-screen bg-base-200  rounded-lg">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl mb-8 font-bold mt-24 md:mt-0 animate__animated animate__fadeInDownBig ">
                Register now!
              </h1>
            </div>
            <div className="card shrink-0 w-full lg:w-[700px] max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />

                  <div className="w-3">
                    <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </span>
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Photo URL</span>
                  </label>
                  <input
                    type="file"
                    name="photo"
                    className="file-input file-input-bordered  text-black"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Select The Role
                    </span>
                  </label>
                  <select
                    name="role"
                    className="select select-bordered w-full rounded-md p-2 border text-black"
                    required
                  >
                    <option value="Donor">Donor</option>
                    <option value="Volunteer">Volunteer</option>
                  </select>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                {registerError && (
                  <p className="text-red-500 mx-auto"> {registerError} </p>
                )}
                {success && <p className="text-green-500"> {success}</p>}
                <p>
                  Already have account? Please
                  <Link className="text-green-600 ml-2" to="/login">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
