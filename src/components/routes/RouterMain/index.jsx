import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import { News } from "../../pages/News";
import { About } from "../../pages/About";

export const RouterMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/news" element={<News />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
    )
}