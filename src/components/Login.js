import { useState, useRef } from "react";
import Header from "./Header";
import { validateUser } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [showerror, setshowerror] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const onclicklistener = () => {
    const error = validateUser(email.current.value, password.current.value);

    setshowerror(error);

    if (error) {
      return;
    }

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {

            const { displayName, email, uid } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setshowerror(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className=" bg-black">
      <div className="absolute bg-black">
            <img
                className="h-screen w-screen object-cover"
                src={
                    "https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                }
                alt="logo"
            />
        </div>
      <Header />
      
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" smartphone:w-[390px]  absolute p-12 bg-black  my-[3rem]  desktop:my-[4rem] mx-12 smartphone:mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-2xl smartphone:text-3xl py-1 smartphone:py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 smartphone:p-4 smartphone:my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          value={"chetankandala2017@gmail.com"}
          type="text"
          placeholder="Email Address"
          className=" p-2 smartphone:p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          value={"Abcdgfbf@123"}
          type="password"
          placeholder="Password"
          className="p-2 smartphone:p-4 my-4 w-full bg-gray-700"
        />
        <p className="font-bold text-red-600">{showerror}</p>
        <button
          className=" p-2 smartphone:p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={() => {
            onclicklistener();
          }}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;
