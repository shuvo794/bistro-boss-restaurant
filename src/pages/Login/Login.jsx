import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'

function Login() {
  const captcaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const { signInUser } = useContext(AuthContext);

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
  title: "Custom animation with Animate.css",
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
    });
  };

  const hendelCaptca = () => {
    const user_captca = captcaRef.current.value;
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
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
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
                ref={captcaRef}
                type="text"
                placeholder="type text avobe"
                name="Captca"
                className="input input-bordered"
                required
              />
              <button
                onClick={hendelCaptca}
                className="btn btn-outline btn-xs mt-2"
              >
                Validet
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disable}
                className="btn btn-primary"
                type="submit"
                value="LogIn"
              />
            </div>
            <p>
              New here ? <Link to="/signup">Please Create Acount</Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Login;
