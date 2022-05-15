import background from '../../assets/img/background/image-2.png';
import { useDispatch, useSelector } from 'react-redux';
import { LoginGoogle, LoginEmail } from '../../config/redux/actions/authActions';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Login = () => {
    const {dataLogin} = useSelector((state) => state.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleLoginWithGoogle = async () => {
        const data = await dispatch(LoginGoogle());
        if (data) navigate('/landing-page');
    };

    const handleLoginEmail = () => {
        dispatch(LoginEmail(email, password));
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
    };

    useEffect(() => {
        if (dataLogin?.email === "admin@admin.com") navigate("/dashboard");
        if (dataLogin?.email !== "admin@admin.com" && dataLogin !== null) navigate('/landing-page');    
        // eslint-disable-next-line
    }, []);

    return (
        <div className="content-login">
            <div className="row container-fluid p-0 m-0">
                <div className="col-md-8 m-0 p-0"> 
                    <img src={background} className="img-fluid gambar-background" alt=""/>
                </div>
                <div className="col-md-4 p-5 align-self-center">
                    <img src="img/logo.png" className="img-fluid mb-3" alt=""/>
                    <h4 className="fw-bold mb-4">Welcome, Admin BCR</h4>
                        <div className="form-group mb-4">
                            <label className="form-label">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                className="form-control p-2" 
                                id="" 
                                placeholder="contoh : binar@gmail.com"/>
                        </div>
                        <div className="form-group mb-4">
                            <label className="form-label">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control p-2" 
                                id="" 
                                placeholder="6+ Karakter"/>
                        </div>
                        <div className="form-group mb-4">
                            <button type="submit" onClick={handleLoginEmail} className="btn btn-primary w-100 p-3 fw-bold">Sign In</button>
                        </div>
                        <div className="form-group mb-4">
                            <button type="submit" onClick={handleLoginWithGoogle} className="btn btn-primary w-100 p-3 fw-bold">Login with Google</button>
                        </div>
                        <div className='text-center'>
                        <p>Tidak punya akun ? <Link to={'/register'} >Register</Link> </p>
                        </div>
                </div>
                
            </div>
        </div>
    );
}

export default Login;