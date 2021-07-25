import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ParamProps, IRestaurant } from "../../global/types";
import { Title, RestaurantHours } from "../index";
import { Image, HeaderWrapper, HeaderDescriptionWrapper } from "./style";
import { fetchRestaurant } from "../../reducers/RestaurantSelected.reducer";
import { RootState } from "../../store/configureStore.store";

export const RestaurantHeader = () => {
  const { name, image } = useSelector(
    (state: RootState) => state.RestaurantSelected.data
  ) as IRestaurant;

  const isLoading = useSelector(
    (state: RootState) => state.RestaurantSelected.loading
  );

  const [loading, setLoading] = useState(isLoading);
  const { id } = useParams<ParamProps>();

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    fetchRestaurant(dispatch, id);
  }, [dispatch, id]);

  return (
    <HeaderDescriptionWrapper>
      <Image src={image} />

      <HeaderWrapper>
        <Title isHome={false} text={name} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <RestaurantHours />
      </HeaderWrapper>
    </HeaderDescriptionWrapper>
  );
};
