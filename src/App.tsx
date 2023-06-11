import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { RoutePath } from "./types";
import { Step1Page } from "./pages/Step1Page/Step1Page";
import { Step2Page } from "./pages/Step2Page/Step2Page";
import { Step3Page } from "./pages/Step3Page/Step3Page";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainPage />} path={RoutePath.MainPage}></Route>
        <Route element={<Step1Page />} path={RoutePath.Step1Page}></Route>
        <Route element={<Step2Page />} path={RoutePath.Step2Page}></Route>
        <Route element={<Step3Page />} path={RoutePath.Step3Page}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
