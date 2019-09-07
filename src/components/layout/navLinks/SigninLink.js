import React  from 'react';
import { NavLink } from 'react-router-dom';

/**REDUX STORE */
import {connect}  from "react-redux";
import {signOut}  from "../../../store/actions/authActions";

/**ICON */
import { FaPlus} from "react-icons/fa";

 

const SigninLink = (props)=>  {
 
    return ( 
    <React.Fragment>  

          <li>
            <NavLink to="/" className="nav-link">Dashboard</NavLink>
          </li> 

          <li>
            <NavLink to="/create" className="nav-link">
              <FaPlus/>create
            </NavLink>
          </li>    

          <li>
            <NavLink to="/" onClick={props.signOut}
            className="nav-link">logout</NavLink>
          </li>
      </React.Fragment>  
    )
  }


const mapDispatchToProps = (dispatch) =>{
 return {
    /**
   * dispatch action creator imported above
   * from "../../store/actions/authActions
   */
   signOut: ()=>{dispatch(signOut())}
 }
}
export default connect(null, mapDispatchToProps)(SigninLink);