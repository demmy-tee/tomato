import { useState } from "react";
import Explore from "../../components/explore-menu/ExploreMenu";
import FoodDisplay from "../../components/Foodisplay/FoodDisplay";
import Header from "../../components/header";
import Navbar from "../../components/navbar";

export default function Homepage() {
  const[category, setCategory] = useState("All")
  return (
    <div>
      <Header />
      <Explore category={category } setCategory={setCategory} />
      <FoodDisplay category={category}/>
    </div>
  )
}