import { createContext, useReducer } from 'react'
import axios from 'axios';

const initialState = {
    user: {},
    posts: [],
}

const reducer = (state, actions)=>{

    if(actions.type === "SET_USER"){
        return {...state, user: actions.payload }
    }
    return state
}

export const AuthUserContext = createContext({
  user: {},
  posts: [],
  getUserInfo: () => {},
});

const AuthUserProvider = ({ children })=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const getUserInfo = async() => {
        const accessToken = JSON.parse(localStorage.getItem("weConnect_user"));

        try {
            const detailResponse = await axios({
              url: "/users/my_details/",
              method: 'GET',
              headers: {
                authorization: `Bearer ${accessToken.access_token}`,
              },
            });

            if(detailResponse.status === 200){
                 dispatch({ type: "SET_USER", payload: detailResponse.data });
            }

            const postRes = await axios({
              url: "/posts/",
              method: "GET",
              headers: {
                authorization: `Bearer ${accessToken.access_token}`,
              },
            });

            if(postRes.status === 200){
              console.log(postRes.data)
            }
            
        } catch (error) {
            const err = {...error}
            console.log(err.response.data)
        }

    }

    const context = {
      user: state.user,
      posts: state.posts,
      getUserInfo,
    };

    return <AuthUserContext.Provider value={context}>
        { children }
    </AuthUserContext.Provider>
}

export default AuthUserProvider;