import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import 'animate.css';
import Swal from 'sweetalert2';

const Login = () => {
  const { newUser, signInWithGoogle } = useContext(AuthContext);
  console.log(newUser);
  const navigate = useNavigate();

  const [user, setUser] = useState();
  const auth = getAuth();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          role: 'Donor',
        };
        console.log(userInfo);
        fetch(`http://localhost:5000/userCollection`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        });
        Swal.fire({
          title: 'Good job!',
          text: 'User Logged In Successfully!',
          icon: 'success',
        });
        console.log(result.user);
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    newUser(email, password)
      .then(result => {
        console.log(result.user);
        alert('Logged in successfully');
        e.target.reset();
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(result => {
        setUser(null);
        alert('Signed Out successfully');
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Bloodonors - Login</title>
        </Helmet>
        <div
          className="hero max-w-6xl mx-auto  lg:min-h-screen bg-base-200  rounded-lg"
          data-aos="zoom-in-up"
        >
          <div className="hero-content flex flex-col mt-24 lg:mt-0">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold mb-8 animate__animated animate__fadeInDownBig ">
                Login now!
              </h1>
            </div>
            <div className="w-full mt-3 md:mt-12 md:flex flex-row-reverse ">
              <div className="card shrink-0  w-full lg:w-[600px] max-w-sm shadow-2xl bg-base-100 animate__animated animate__fadeInRight">
                <form onSubmit={handleLogin} className="card-body">
                  <div className="form-control">
                    <label className="label">
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
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                  <p>
                    New here? Please
                    <Link className="text-green-600 ml-2" to="/register">
                      Register
                    </Link>
                  </p>

                  {}

                  {user ? (
                    <button
                      onClick={handleSignOut}
                      className="btn btn-secondary"
                    >
                      Sign Out
                    </button>
                  ) : (
                    <div>
                      <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-accent w-full"
                      >
                        Sign in with Google
                        <img
                          className="w-6 h-6"
                          src="https://i.ibb.co/tcXrSXm/Google-G-logo-svg.webp"
                          alt=""
                        />
                      </button>
                    </div>
                  )}
                </form>
              </div>
              <div className="w-[420px] animate__animated animate__fadeInLeft">
                <img
                  className=""
                  src="https://i.ibb.co/1dy2Jtj/3047747.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
