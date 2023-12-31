import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
import authincation1 from '../../assets/others/authentication2.png';
import SocalSite from "../../Components/SocalSite/SocalSite";
function Login() {
  
  const [disable, setDisable] = useState(true);
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const hundelLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
  title: "user Log in successfully",
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
  
      });
       navigate(from, { replace: true });
    });
  };

  const hendelCaptca = (e) => {
    const user_captca = e.target.value;
    if (validateCaptcha(user_captca)) {
      setDisable(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss/Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card  md:w-1/2  max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={hundelLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={hendelCaptca}
                  type="text"
                  placeholder="type text avobe"
                  name="Captca"
                  className="input input-bordered"
                  
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={false}
                  className="btn btn-primary"
                  type="submit"
                  value="LOGIN"
                />
              </div>
              <p className="text-red-700">
                New here ? <Link to="/signup">Please Create Acount</Link>{" "}
              </p>
            </form>
            <SocalSite></SocalSite>
          </div>
          <div className="md:w-1/2  p-15 ">
            <img src={authincation1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
