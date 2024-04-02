import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
   const auth = getAuth(app);
   console.log(app)
   const provider = new GoogleAuthProvider()

   const handleGoogleSignIn = () => {
      signInWithPopup(auth, provider)
      .then(result=> {
         const user = result.user;
         console.log(user)
      })
      .catch(error => {
         console.log('error', error.massage)
      })

   }

   return (
      <div>
         <button onClick={handleGoogleSignIn}
         className="btn" >Google Login</button>
      </div>
   );
};

export default Login;