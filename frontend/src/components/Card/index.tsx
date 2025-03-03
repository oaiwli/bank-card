import {
  CardsContainer,
  Cards,
  ShowText,
  BoxText,
  AddCards,
  Plus,
  NewCard,
} from "./styles";

import useDataStore from "../../store/useDataStore";
import { useEffect } from "react";

function Card() {
  const { savedData, fetchData } = useDataStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <CardsContainer>
      {savedData.map((card, index) => (
        <Cards key={index}>
          <BoxText>
            <ShowText>• • • • {card.number.slice(-4)}</ShowText>
            <ShowText>
              {card.month} / {card.year}
            </ShowText>
          </BoxText>
        </Cards>
      ))}
      <AddCards>
        <Plus>+</Plus>
        <NewCard>Новая карта</NewCard>
      </AddCards>
    </CardsContainer>
  );
}

export default Card;
