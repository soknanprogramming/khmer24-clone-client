import TopBar from "./components/TopBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SubCategoryPage from "./pages/SubCategoryPage"
import useCategories from "./store/useCategories"
import BrandCategoryPage from "./pages/BrandCategoryPage"
import { useEffect } from "react"


const App = () => {
  const fetchCategories = useCategories((state) => state.fetchCategories);
  const categories = useCategories((state) => state.categories);
  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // debugging categories
    useEffect(() => {
      console.log(categories);
    }, [categories]);
  // end of debugging categories
  
  return (
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:subCategoriesName" element={<SubCategoryPage/>}/>
        <Route path="/:subCategoriesName/:brandName" element={<BrandCategoryPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
