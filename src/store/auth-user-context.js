import { createContext, useReducer } from 'react'
import axios from 'axios';

const initialState = {
    user: {name: 'Maya', email: 'maya@company.com'},
}

const reducer = (state, actions)=>{

    if(actions.type === "SET_USER"){
    }
    return state
}

export const AuthUserContext = createContext({
  user: {},
  getUserInfo: () => {},
});

const AuthUserProvider = ({ children })=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const getUserInfo = async() => {
        const accessToken = JSON.parse(localStorage.getItem("weConnect_user"));

        try {
            const response = axios({
              url: "users/my_details/",
              method: 'GET',
              headers: {
                authorization: `Bearer ${accessToken.access_token}`,
              },
            });
           console.log(response)
        } catch (error) {
            const err = {...error}
            console.log(err.response.data)
        }

        dispatch({ type: "SET_USER", payload: accessToken.access_token });
    }

    const context = {
      user: state.user,
      getUserInfo,
    };

    return <AuthUserContext.Provider value={context}>
        { children }
    </AuthUserContext.Provider>
}

export default AuthUserProvider;