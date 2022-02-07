import { createContext, useReducer } from 'react'
import axios from 'axios';

const initialState = {
  isAuthenticated: false,
  user: {},
  posts: [],
};

const reducer = (state, action)=>{

    if (action.type === "AUTHENTICATE") {
      return { ...state, isAuthenticated: action.payload };
    }

    if(action.type === "SET_USER"){
        return {...state, user: action.payload }
    }
    return state
}

export const AuthUserContext = createContext({
  isAuthenticated: false,
  user: {},
  posts: [],
  getUserInfo: () => {},
  setIsAuthenticated: () => {},
});

const AuthUserProvider = ({ children })=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const setIsAuthenticated = (status) => {
      dispatch({type: 'AUTHENTICATE', payload: status});
    }

    const getUserInfo = async() => {
        const accessToken = JSON.parse(localStorage.getItem("weConnect_user"));

        try {
            const response = await axios({
              url: "/users/my_details/",
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
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      posts: state.posts,
      getUserInfo,
      setIsAuthenticated,
    };

    return <AuthUserContext.Provider value={context}>
        { children }
    </AuthUserContext.Provider>
}

export default AuthUserProvider;