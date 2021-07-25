import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchMenu } from "../../reducers/RestaurantMenu.reducer";
import { RootState } from "../../store/configureStore.store";
import { ParamProps } from "../../global/types";
import { FoodGroup } from "../index";

export const Collapsible = () => {
  const { data } = useSelector((state: RootState) => state.RestaurantMenu);
  const dispatch = useDispatch();
  const { id } = useParams<ParamProps>();
  let foodGroups: string[] = [];

  useEffect(() => {
    fetchMenu(dispatch, id);
  }, [dispatch, id]);

  data.map((item, index) => {
    !foodGroups.includes(item.group) && foodGroups.push(item.group);
  });

  return (
    <>
      <ul>
        {foodGroups.map((group, groupIndex) => {
          return (
            <div key={groupIndex}>
              <FoodGroup group={group} />
            </div>
          );
        })}
      </ul>
    </>
  );
};
