import Bookmark from "../pages/bookmark";
import Home from "../pages/home";
import Profile from "../pages/profil";

const list = [
    {
        path: "/",
        name: "HOME",
        component: Home,
    },
    {
        path: "/bookmark",
        name: "BOOKMARK",
        component: Bookmark,
    },
    {
        path: "/profile",
        name: "PROFILE",
        component: Profile,
    },
]

export default list;