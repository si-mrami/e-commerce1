
import styled from "styled-components";
import { categories } from "../Data";
import CategoriesItems from "./CategoriesItems";
import "./Style/Styling.scss";
import FilterCategories from "./FilterCategories";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  

  return (
    <>
      <FilterCategories/>
      <Container>
        {categories.map((item) => (
          <CategoriesItems item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
