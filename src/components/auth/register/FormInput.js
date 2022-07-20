import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const FormInput = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitForm = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    console.log("data email di form input", emailRef.current.value);
    const enteredPassword = passwordRef.current.value;
    console.log("data pw di form input", passwordRef.current.value);
    props.submit(enteredEmail, enteredPassword);
  };

  const [showSandi, setShowSandi] = useState(false);
  const showSandiHandler = () => {
    setShowSandi((prevState) => !prevState);
  };

  const valueChangeHandler = () => {
    props.changeValue();
  };

  return (
    <section>
      <form onSubmit={submitForm} className="flex flex-col px-11 md:px-0">
        <div className="flex flex-col gap-y-6">
          {/* input email */}
          <div>
            <input
              placeholder="EMAIL"
              ref={emailRef}
              onChange={valueChangeHandler}
              className={`text-[26px] w-full md:w-[522px] h-[100px] text-white px-4 font-medium bg-transparent outline-none border ${
                props.isNotValid ? "border-[#CB3A31]" : "border-[#FFFFFF]"
              }`}
              type="text"
            />
          </div>
          {/* input passsword */}
          <div>
            <div
              className={`relative flex text-[26px] w-full md:w-[522px] h-[100px] text-white font-medium outline-none border ${
                props.isNotValid ? "border-[#CB3A31]" : "border-[#FFFFFF]"
              }`}
            >
              <input
                placeholder="PASSWORD"
                ref={passwordRef}
                onChange={valueChangeHandler}
                className="px-4 w-full outline-none bg-transparent pr-7"
                type={showSandi ? "text" : "password"}
              />
              {showSandi && (
                <div
                  onClick={showSandiHandler}
                  className="absolute flex items-center right-0 h-full px-3 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              )}
              {!showSandi && (
                <div
                  onClick={showSandiHandler}
                  className="absolute flex items-center right-0 h-full px-3 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* login failed message */}
        <div className="mt-2 text-right">
          {props.isNotValid && (
            <p className="text-[#CB3A31] w-full h-[10px] text-xs font-normal">
              Email already taken
            </p>
          )}
          {!props.isNotValid && <p className="w-full h-[10px]"></p>}
        </div>
        <div className="text-center mt-6">
          <button className="text-white bg-[#E50913] font-bold w-full md:w-[522px] h-[100px]">
            SIGN IN
          </button>
        </div>
        {/* end of button */}
        <div className="flex mt-2 justify-end">
          <Link to="/login" className="text-[#757575] text-base font-normal">
            Already have an account?
          </Link>
        </div>
      </form>
    </section>
  );
};

export default FormInput;
