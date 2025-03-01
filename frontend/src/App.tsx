import {
  Container,
  Btn,
  Header,
  Input,
  InputMoneyLeft,
  InputMoneyRight,
  MoneyForm,
  Form,
  Text,
  CardsContainer,
  Cards,
  AddCards,
  MainAdd,
  OtherAdd,
  State,
  TextColumn,
  TextBlue,
  FaceCard,
  DateCard,
  TextCard,
  BackCard,
  StylesPalka,
  BackInfo,
} from "./styles";
import Checkbox from "@mui/material/Checkbox";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import { useState } from "react";

function App() {
  const [dramValue, setDramValue] = useState("");
  const [rubValue, setRubValue] = useState("");
  const conversionRate = 15; // 1 ф = 15 руб

  const handleDramChange = (e) => {
    const value = e.target.value;
    setDramValue(value);
    // Конвертируем в рубли
    const convertedToRub = value
      ? (parseFloat(value) * conversionRate).toFixed(2)
      : "";
    setRubValue(convertedToRub);
  };

  const handleRubChange = (e) => {
    const value = e.target.value;
    setRubValue(value);
    // Конвертируем в драмы
    const convertedToDram = value
      ? (parseFloat(value) / conversionRate).toFixed(2)
      : "";
    setDramValue(convertedToDram);
  };

  return (
    <Container>
      <Header>Пополнить банковской картой</Header>
      <Text>УКАЖИТЕ СУММУ</Text>
      <MoneyForm>
        <InputMoneyLeft
          type="text"
          placeholder="ֆ"
          value={dramValue}
          onChange={handleDramChange}
        />
        <InputMoneyRight
          type="text"
          placeholder="₽"
          value={rubValue}
          onChange={handleRubChange}
        />
      </MoneyForm>

      <CardsContainer>
        <Cards></Cards>
        <Cards></Cards>
        <AddCards>
          <Text>+</Text>
          <Text>Новая карта</Text>
        </AddCards>
      </CardsContainer>

      <Form>
        <MainAdd>
          <FaceCard>
            <TextCard>НОМЕР КАРТЫ</TextCard>
            <Input type="text" placeholder="Номер карты" />

            <TextCard>ДЕЙСТВУЕТ ДО</TextCard>
            <DateCard>
              <Input type="text" placeholder="мм" />
              <TextCard>/</TextCard>
              <Input type="text" placeholder="гг" />
            </DateCard>
          </FaceCard>
        </MainAdd>
        <OtherAdd>
          <BackCard>
            <StylesPalka />
            <BackInfo>
              <Text>CVV/CVC</Text>
              <Input type="text" placeholder="000" />
              <Text>три цифры с обратной стороны карты</Text>
            </BackInfo>
          </BackCard>
        </OtherAdd>
      </Form>

      <State>
        <Checkbox />
        <TextColumn>
          <Text>
            Запомнить эту карту. Это безопасно.
            <ErrorOutlineIcon fontSize="small" />
          </Text>
          <Text>
            Сохраняя карту, вы соглашаетесь с
            <TextBlue>условиями привязки карты.</TextBlue>
          </Text>
        </TextColumn>
      </State>

      <Btn type="submit">Оплатить</Btn>
    </Container>
  );
}

export default App;
