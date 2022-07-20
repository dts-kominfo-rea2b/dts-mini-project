import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFormInput from '/src/components/auth/login/FormInput';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { AuthContext } from '../../store/auth-context';

import Murat from '../../assets/profile/murat.svg';

const Login = () => {
  const navigate = useNavigate();
  const { setLogin } = useContext(AuthContext);
  const [isFailed, setIsFailed] = useState(false);

  const authDataHandler = (token, useremail) => {
    setLogin(token, useremail);
    localStorage.setItem('token', token);
    localStorage.setItem('useremail', useremail);
    navigate('/dts-movies/home');
  };

  const handleSubmit = async (emailData, passwordData) => {
    const email = emailData;
    const password = passwordData;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      authDataHandler(user.accessToken, user.email);
    } catch (error) {
      setIsFailed(true);
    }
  };

  // get screen widht
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    if (windowSize.innerWidth > 768) {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
  }, [windowSize.innerWidth]);

  return (
    <div className="relative flex flex-col md:flex-row w-full min-h-screen bg-black text-white">
      {isHide && (
        <div className="flex max-h-screen w-full md:w-3/4">
          <img src={Murat} alt="" className="w-full md:w-3/4 object-cover" />
        </div>
      )}
      <div className="absolute w-full h-full bg-gradient-to-l from-[#141414] via-[#141414]">
        <div className="flex w-full h-full justify-center md:justify-end items-center md:pr-36">
          <LoginFormInput submit={(email, password) => handleSubmit(email, password)} isNotValid={isFailed} changeValue={() => setIsFailed(false)} />
        </div>
      </div>
    </div>
  );
};

export default Login;
