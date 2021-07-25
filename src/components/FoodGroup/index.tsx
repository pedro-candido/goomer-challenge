import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { Collapse } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";

import { FoodGroupStyle } from "./style";

import { RootState } from "../../store/configureStore.store";

import { FoodCard } from "../index";

interface IFoodGroupProps {
  group: string;
}

export const FoodGroup = ({ group }: IFoodGroupProps) => {
  const { data } = useSelector((state: RootState) => state.RestaurantMenu);
  const [isOpen, setIsOpen] = useState(false);

  const filteredFoods = (foodGroup: string) => {
    return data.filter((item) => item.group === foodGroup);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <FoodGroupStyle onClick={handleClick}>
        <h3>{group}</h3>
        {isOpen ? <FiChevronDown /> : <FiChevronRight />}
      </FoodGroupStyle>

      {filteredFoods(group).map((item, index) => {
        return (
          <Collapse key={index} in={isOpen}>
            <p>{item.name}</p>
          </Collapse>
        );
      })}
    </>
  );
};
