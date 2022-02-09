import { createContext, useReducer } from 'react'
import axios from 'axios';

const initialState = {
  isAuthenticated: false,
  refresh: 0,
  user: {},
  posts: [],
};

// REDUCER
const reducer = (state, action)=>{

    if (action.type === "AUTHENTICATE") {
      return { ...state, isAuthenticated: action.payload };
    }

    if(action.type === "SET_USER"){
        return {...state, user: action.payload }
    }

    if (action.type === "REFRESH") {
      return { ...state, refresh: Math.random() };
    }
    return state
}

// CONTEXT
export const AuthUserContext = createContext({
  isAuthenticated: false,
  refresh: 0,
  user: {},
  posts: [],
  getUserInfo: () => {},
  setIsAuthenticated: () => {},
  refreshUser: () => {},
});

// PROVIDER
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

    const refreshUser = () => {
      dispatch({type: 'REFRESH'});
    };

    const context = {
      isAuthenticated: state.isAuthenticated,
      refresh: state.refresh,
      user: state.user,
      posts: state.posts,
      getUserInfo,
      setIsAuthenticated,
      refreshUser,
    };

    return <AuthUserContext.Provider value={context}>
        { children }
    </AuthUserContext.Provider>
} // PROVIDER .//

export default AuthUserProvider;