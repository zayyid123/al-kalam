import Adzan from "../pages/adzan";
import Bookmark from "../pages/bookmark";
import DetailSurah from "../pages/detail-page";
import Home from "../pages/home";
import Profile from "../pages/profil";
import QuranPage from "../pages/quran-page";

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
    {
        path: "/al-kalam/quran",
        name: "QURAN",
        component: QuranPage,
    },
    {
        path: "/al-kalam/surah",
        name: "DETAIL-SURAH",
        component: DetailSurah,
    },
    {
        path: "/al-kalam/adzan",
        name: "ADZAN",
        component: Adzan,
    },
]

export default list;