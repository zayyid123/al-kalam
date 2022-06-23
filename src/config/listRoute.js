import Adzan from "../pages/adzan";
import Bookmark from "../pages/bookmark";
import DetailSurah from "../pages/detail-page";
import Home from "../pages/home";
import Profile from "../pages/profil";
import QuranPage from "../pages/quran-page";

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
    {
        path: "/quran",
        name: "QURAN",
        component: QuranPage,
    },
    {
        path: "/surah",
        name: "DETAIL-SURAH",
        component: DetailSurah,
    },
    {
        path: "/adzan",
        name: "ADZAN",
        component: Adzan,
    },
]

export default list;