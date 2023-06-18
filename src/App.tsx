import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { RoutePath } from "./types";
import { Step1Page } from "./pages/Step1Page/Step1Page";
import { Step2Page } from "./pages/Step2Page/Step2Page";
import { Step3Page } from "./pages/Step3Page/Step3Page";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route element={<Step1Page />} path={RoutePath.Step1Page} />
          <Route element={<Step2Page />} path={RoutePath.Step2Page} />
          <Route element={<Step3Page />} path={RoutePath.Step3Page} />
          <Route element={<MainPage />} path={RoutePath.MainPage} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
