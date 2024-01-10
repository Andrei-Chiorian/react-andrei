import { createBrowserRouter } from "react-router-dom";
import ShoppingCart from "../views/ShoppingCart/ShoppingCart";
import Users from "../views/Users/Users";
import { BASE_PATH, USERS_PATH, EVERYTHING_PATH, SHOPPING_CART_PATH } from "../constants/path";
import {Error404} from "../components/errorPages/404"
import Main from '../components/layout/Main'
import Home from "../views/Home/Home";

export const router = createBrowserRouter([
    {
        path: BASE_PATH,
        element: <Main/>,
        children: [            
            {
                path: BASE_PATH,
                element: <Home/>
            },
            {
                path: USERS_PATH,
                element: <Users/>
            },
            {
                path: SHOPPING_CART_PATH,
                element: <ShoppingCart/>
            },
            {
                path: EVERYTHING_PATH,
                element: <Error404/>
            }             
        ]
    }   
])