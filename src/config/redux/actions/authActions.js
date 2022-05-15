import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "../../firebase/firebaseConfig";

// login with google
export const LoginGoogle = () => {
    return async (dispatch) => {
        const data = await signInWithPopup(
            authentication,
            new GoogleAuthProvider()
        );
        dispatch({ type: 'SET_DATA_LOGIN',payload: data });
        return data;
    }
}

// login usually
export const LoginEmail = (email, password) => {
    return (dispatch) => {
        dispatch({ type: 'SET_DATA_LOGIN',payload:{ email, password }});
    }
}

// export const RegisterEmail = (email, password) => {
//     return async (dispatch) => {
//         try {
//             const user = await createUserWithEmailAndPassword(
//                 authentication,
//                 email,
//                 password
//             );
//             console.log(user);
//         } catch (error) {
//             console.log(error.message);            
//         }
//         dispatch({ type: 'SET_DATA_REGISTER',payload: user});

//     }
// }