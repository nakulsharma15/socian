import { Route, Routes } from "react-router-dom";
import RequireAuth from "../utils/RequiresAuth";
import { Home,Profile,Login,Signup,BookmarksPage,MockMan } from "../Pages/index";

function RoutePaths() {

    return <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="/login" element={<RequireAuth><Login /></RequireAuth>} />
        <Route path="/signup" element={<RequireAuth><Signup /></RequireAuth>} />
        <Route path="/bookmarks" element={<RequireAuth><BookmarksPage /></RequireAuth>} />
        <Route path="/mockman" element={<MockMan/>}/>
    </Routes>
}

export default RoutePaths;
