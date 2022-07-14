import { Route, Routes } from "react-router-dom";
import RequireAuth from "../utils/RequiresAuth";
import { Home,Profile,Login,Signup,BookmarksPage,MockMan } from "../Pages/index";

function RoutePaths() {

    return <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="/mockman" element={<MockMan/>}/>
    </Routes>
}

export default RoutePaths;
