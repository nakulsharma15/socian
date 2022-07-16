import { Route, Routes } from "react-router-dom";
import RequireAuth from "../utils/RequiresAuth";
import { Home,Profile,Login,Signup,BookmarksPage,Explore,MockMan } from "../Pages/index";

function RoutePaths() {

    return <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookmarks" element={<RequireAuth><BookmarksPage /></RequireAuth>} />
        <Route path="/explore" element={<RequireAuth><Explore /></RequireAuth>} />
        <Route path="/mockman" element={<MockMan/>}/>
    </Routes>
}

export default RoutePaths;
