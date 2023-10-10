import "./App.scss";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Form from "./pages/Form/Form";
import Success from "./pages/Success/Success";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="form">
          <Route index element={<Form />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
