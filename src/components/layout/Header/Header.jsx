import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { BsPersonFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userAction";
import { toast } from "react-toastify";
// import AccountMenu from "./AccountMenu";


const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Campus<span>Mart</span>.
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const Header = () => {
  const { error, loading, isAuthentication, user } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  function hendellogout() {
    // localStorage.removeItem('token')
    try {
      dispatch(logout());
      toast.success("succesfully logout", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/products");
    } catch (error) {
      toast.error(error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <header style={{display:"flex",position:"fixed"}}>
      <div className={styles.header}>
        {logo}

        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
          ></div>

          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>

          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.avatar}>
              {isAuthentication && user.avatar && (
                <Link to="/account">
                <img
                  src={user.avatar.url}
                  alt="Avatar"
                  className={styles.avatarImage}
                />
                 </Link>
              )}
              {!isAuthentication && <BsPersonFill size={20} />}
            </span>
            <span className={styles.links}>
              {!isAuthentication ? (
                <Link to="/login">Login</Link>
              ) : 
              (
                <Link to="/" onClick={hendellogout}>
                  Logout
                </Link>
                
              )
              
              }

              {/* <Link to="/register">Register</Link> */}
              {/* <Link to="/order-history">My Orders</Link> */}
            </span>
            {/* {cart} */}
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
        <span style={{color:"white"}} className={styles.links}>
              {!isAuthentication ? (
                <Link to="/login" style={{color:"white"}}>Login</Link>
              ) : 
              (
                <Link to="/" style={{color:"white",alignSelf:"center"}} onClick={hendellogout}>
                  Logout
                </Link>
                
              )
              
              }

              {/* <Link to="/register">Register</Link> */}
              {/* <Link to="/order-history">My Orders</Link> */}
            </span>
        <span className={styles.avatar}>
              {isAuthentication && user.avatar && (
                <Link to="/account">
                <img
                  style={{borderRadius:"100%",height:"40px",width:"40px"}}
                  src={user.avatar.url}
                  alt="Avatar"
                  className={styles.avatarImage}
                />
                 </Link>
              )}
              {!isAuthentication && <BsPersonFill size={20} />}
            </span>
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;



// import { useState } from "react";
// import { Link,useNavigate } from "react-router-dom";
// import styles from "./Header.module.scss";
// import { FaShoppingCart, FaTimes } from "react-icons/fa";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import {FiSearch} from "react-icons/fi"
// import SearchBox from "../../Searchbox/SearchBox";
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from "../../../actions/userAction";
// import { toast } from "react-toastify";


// const logo = (
//   <div className={styles.logo}>
//     <Link to="/">
//       <h2>
//         Campus<span>Mart</span>.
//       </h2>
//     </Link>
//   </div>
// );


// const cart = (
//   <span className={styles.cart}>
//     <Link to="/cart">
//       Cart
//       <FaShoppingCart size={20} />
//       <p>0</p>
//     </Link>
//   </span>
// );

// const Header = () => {
//   const { error, loading, isAuthentication,user } = useSelector(state => state.user);
//   const navigate=useNavigate();
//   const [showMenu, setShowMenu] = useState(false);
//   const dispatch=useDispatch();

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const hideMenu = () => {
//     setShowMenu(false);
//   };
//   function hendellogout(){
//     // localStorage.removeItem('token')
//     try {
//       dispatch(logout());
//       toast.success("succesfully logout", {
//         position: "bottom-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//       navigate("/products");
      
//     } catch (error) {
//       toast.error(error, {
//         position: "bottom-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     }

//   }

//   return (
//     <header>
//       <div className={styles.header}>
//         {logo}

//         <nav
//           className={
//             showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
//           }
//         >
//           <div
//             className={
//               showMenu
//                 ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
//                 : `${styles["nav-wrapper"]}`
//             }
//             onClick={hideMenu}
//           ></div>

//           <ul onClick={hideMenu}>
//             <li className={styles["logo-mobile"]}>
//               {logo}
//               <FaTimes size={22} color="#fff" onClick={hideMenu} />
//             </li>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/products">Products</Link>
//             </li>
//           </ul>
          
//           <div className={styles["header-right"]} onClick={hideMenu}>
//             {/* <div className={styles.se}>
//             <input type="text"></input> 
//             <FiSearch size={22}  className={styles.search}></FiSearch>
//             </div> */}
//             {/* <SearchBox/> */}
//             <span className={styles.links}>
//               {!isAuthentication?<Link to="/login">Login</Link>:null}
//               {isAuthentication?<Link to="/" onClick={hendellogout}>Logout</Link>:null}
              
//               {/* <Link to="/register">Register</Link> */}
//               {/* <Link to="/order-history">My Orders</Link> */}
//             </span>
//             {cart}
            
//           </div>
//         </nav>

//         <div className={styles["menu-icon"]}>
//           {cart}
//           <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
//         </div>
        
//       </div>
//     </header>
//   );
// };

// export default Header;



// import { Link } from "react-router-dom"

// import styles from "./Header.module.scss"
// import { FiSearch } from "react-icons/fi"
// function Header() {

//   return (
//     <header>
//       <div className={styles.start}>
//         <Link to="/">
//           <h1>CampusMart</h1>
//         </Link>
//       </div>
//       <div className={styles.mid}>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </div>
//       <div className={styles.end}>
//         <div className={styles.search}>
//           <input type="text" />
          
//           <FiSearch size={20}></FiSearch>

//         </div>

//         <Link>Login</Link>
//         <Link>Logout</Link>
//         <img src="" alt="" />
//       </div>
//     </header>
//   )
// }

// export default Header
