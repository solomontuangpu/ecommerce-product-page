import "./App.css";

import NavBar from "./components/NavBar";
import ProductDescription from "./components/ProductDescription";
import ProductImage from "./components/ProductImage";

function App() {
  return (
    <div className='relative'>
      <NavBar />

      <section className='flex mobile:flex-col mobile:m-0 mobile:p-0 justify-between mx-20 p-20'>
        <ProductImage />
        <ProductDescription />
      </section>
    </div>
  );
}

export default App;
