import { createContext, useReducer } from 'react'
import axios from 'axios';

const initialState = {
    user: {},
}

const reducer = (state, actions)=>{

    if(actions.type === "SET_USER"){
        return {...state, user: actions.payload }
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
            const response = await axios({
              url: "users/my_details/",
              method: 'GET',
              headers: {
                authorization: `Bearer ${accessToken.access_token}`,
              },
            });

            if(response.status === 200){
                 dispatch({ type: "SET_USER", payload: response.data });
            }
            
        } catch (error) {
            const err = {...error}
            console.log(err.response.data)
        }

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