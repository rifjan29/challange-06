import iconHome from '../../assets/img/icon/fi_home.svg';
import logo from '../../assets/img/icon/logo.png';
import logo2 from '../../assets/img/icon/logo2.png';
import user from '../../assets/img/icon/user.png';
import '../Dashboard/Dashboard.css';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Dashboard = () =>  {
    const navigate = useNavigate();
    const { dataLogin } = useSelector((state) => state.auth)

    useEffect(() => {
        if(dataLogin?.email !== "admin@admin.com") {
            navigate("/");     
        }
        if (dataLogin?.email !== "admin@admin.com" && dataLogin !== null) {
            navigate("/landing-page");
        }
       
        //eslint-disable-next-line
    },[])
    const logout = () => {
        // localStorage.removeItem('persist:react-login');
        // if (dataLogin === null) {
        //     navigate("/");
        // }
        localStorage.clear();
        window.location.reload();
        navigate("/login");

    }
  return (
    <div className="wrapper">
        <nav id="sidebar">
            <div className="sidebar-header ">
                <img src={logo} className="img-fluid w-25" alt=""/>
            </div>
    
            <ul className="list-unstyled components ">
                <p className="px-5 my-4">DASHBOARD</p>
                <li className="active">
                    <a href="#">Dashboard</a>
                </li>
            </ul>
    
        </nav>
        <nav id="sidebar-second">
            <div className="sidebar-header">
                <img src={logo2} className="img-fluid w-50" alt=""/>
            </div>
    
            <ul className="list-unstyled components">
                <li>
                    <a href="index.html" className="">
                        <img src={iconHome} alt="" className="p-2" />
                        Dashboard
                    </a>
                </li>
            </ul>
        </nav>
        <div id="content">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" className="btn btn-default">
                        <i className="fas fa-bars"></i>
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item p-2">
                                <form className="d-flex">
                                    <div className="input-group has-search">
                                        <span className="fa fa-search form-control-feedback"></span>
                                        <input type="text" className="form-control" placeholder="Search"/>
                                    </div>
                                    <button className="btn btn-outline-success" type="button">
                                    Search
                                    </button>
                                </form>

                            </li>
                            <li className="nav-item dropdown align-self-center">
                                   
                                {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                </a> */}
                                <button  onClick={logout}>
                                    <img src={user} alt=""/>
                                    <strong>{dataLogin.email}</strong>
                                    <i className="fa fa-angle-down"></i>
                                </button>
                               {/* <button onClick={logout}>
                               </button> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="content px-5">
            {/* <nav style={{ --bs-breadcrumb-divider: '>'; }} aria-label="breadcrumb"> */}
                <h4 className="text-content my-4"><strong>Dashboard</strong></h4>
                <div className="text-content-second">
                    <h5 className=""> List Order</h5>
                </div>
                <div className="card p-4 my-4" style={{ border: "none" }}>
                    <div className="table-responsive">
                        <table className="table " id="example">
                            <thead className="bg-info-table">
                                <tr>
                                    <th>No</th>
                                    <th>Use Email</th>
                                    <th>Car</th>
                                    <th>Star Rent</th>
                                    <th>Finish Rent</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>User</td>
                                    <td>car</td>
                                    <td>star</td>
                                    <td>finish</td>
                                    <td>price</td>
                                    <td>status</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>User</td>
                                    <td>car</td>
                                    <td>star</td>
                                    <td>finish</td>
                                    <td>price</td>
                                    <td>status</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>User</td>
                                    <td>car</td>
                                    <td>star</td>
                                    <td>finish</td>
                                    <td>price</td>
                                    <td>status</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
