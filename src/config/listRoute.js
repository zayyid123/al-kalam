import Bookmark from "../pages/bookmark";
import Home from "../pages/home";
import Profile from "../pages/profil";

const list = [
    {
        path: "/al-kalam",
        name: "HOME",
        component: Home,
    },
    {
        path: "/al-kalam/bookmark",
        name: "BOOKMARK",
        component: Bookmark,
    },
    {
        path: "/al-kalam/profile",
        name: "PROFILE",
        component: Profile,
    },
]

export default list;