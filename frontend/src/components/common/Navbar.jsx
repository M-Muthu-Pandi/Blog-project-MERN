import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import auth from '../../config/firebase';
import { signOut } from 'firebase/auth';
function Navbar() {
  const navigate = useNavigate();
  const [log, setLog] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLog(true);
      } else {
        setLog(false);
      }
    })
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  }

  return (
    <div className='py-5 flex justify-between items-center'>
      <h2 className='text-2xl font-bold'>Personal</h2>
      <div className='flex items-center'>
        <Link className='list-none px-5' to={"/home"}>Home</Link>
        <Link className='list-none px-5' to={"/blogs"}>Blogs</Link>
        <Link className='list-none px-5' to={"/about"}>About</Link>
        {
          log ? <button className='button-style hidden md:block' onClick={logOut}>Logout</button> : <button className='button-style hidden md:block' onClick={() => navigate("/login")}>Login</button>
        }

      </div>
    </div>
  )
}

export default Navbar