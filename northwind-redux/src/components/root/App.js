import { Container } from "reactstrap";
import { Route, Routes } from "react-router-dom";

import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/product" element={<Dashboard />} />
        <Route path="/cart" element={<CartDetail />} />
        <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct />} />
        <Route element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
