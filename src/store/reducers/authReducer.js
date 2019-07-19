// init state as default val
const initState ={
    authError:""
}

const authReducer =(state = initState, action)=>{
 switch(action.type){
    case "LOGIN_ERROR":
    return {...state, authError:`login failed`};
    case "LOGIN_SUCCESS":
    //console.log("login success")
    return {...state,  authError:""};
    case "SIGN_OUT_SUCCESS":
    console.log("sign out success")
    return state;
    case "SIGN_UP_SUCCESS":
    console.log("sign up success")
    return {...state , authError:""};
    case "SIGN_UP_ERROR":
    console.log("sign up failed")
    return { authError :action.err.message};
   

    default: return state;
 }


}

export default authReducer;