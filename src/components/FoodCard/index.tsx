import { CardContainer, CardData } from "./style";

interface FoodCardProps {
    food: string
}

export const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <CardContainer>
      <CardData>
        <h2>{food}</h2>
        <p>Teste</p>
      </CardData>
    </CardContainer>
  );
};
