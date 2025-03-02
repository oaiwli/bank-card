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
  ShowText,
  BoxText,
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
  Plus,
  NewCard,
  NumberInput,
  DoubleInput,
  CvvInput,
  CvvText,
  HeadCvvText,
} from "./styles";
import Checkbox from "@mui/material/Checkbox";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import useDataStore from "./store/useDataStore";
import { useState, useEffect } from "react";

function App() {
  const { cards, setCard, saveData, savedData, fetchData } = useDataStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [activeNumber, setaActiveNumber] = useState(false);
  const [activeMouth, setActiveMouth] = useState(false);
  const [activeYear, setActiveYear] = useState(false);
  const [activeCvv, setActiveCvv] = useState(false);

  const [dramValue, setDramValue] = useState("");
  const [rubValue, setRubValue] = useState("");
  const conversionRate = 15; // 1 ф = 15 руб

  const handleDramChange = (e) => {
    const value = e.target.value;
    // Проверяем ввод на соответствие только цифрам
    if (/^\d*$/.test(value)) {
      setDramValue(value);
      // Конвертируем в рубли
      const convertedToRub = value
        ? (parseFloat(value) * conversionRate).toFixed(2)
        : "";
      setRubValue(convertedToRub);
    }
  };

  const handleRubChange = (e) => {
    const value = e.target.value;
    // Проверяем ввод на соответствие только цифрам
    if (/^\d*$/.test(value)) {
      setRubValue(value);
      // Конвертируем в драмы
      const convertedToDram = value
        ? (parseFloat(value) / conversionRate).toFixed(2)
        : "";
      setDramValue(convertedToDram);
    }
  };

  const handleSubmit = () => {
    saveData();
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

      <Form>
        <MainAdd>
          <FaceCard>
            <TextCard>НОМЕР КАРТЫ</TextCard>
            <NumberInput
              type="text"
              placeholder="Номер карты"
              value={cards.number}
              onFocus={() => setaActiveNumber(true)}
              onBlur={() => setaActiveNumber(false)}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setCard("number", value);
              }}
              error={
                cards.number.length !== 16 &&
                cards.number.length > 0 &&
                !activeNumber
              }
            />

            <TextCard>ДЕЙСТВУЕТ ДО</TextCard>
            <DateCard>
              <DoubleInput
                type="text"
                placeholder="мм"
                value={cards.month}
                onFocus={() => setActiveMouth(true)}
                onBlur={() => setActiveMouth(false)}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setCard("month", value);
                }}
                error={
                  cards.month.length !== 2 &&
                  cards.month.length > 0 &&
                  !activeMouth
                }
              />
              <TextCard>/</TextCard>
              <DoubleInput
                type="text"
                placeholder="гг"
                value={cards.year}
                onFocus={() => setActiveYear(true)}
                onBlur={() => setActiveYear(false)}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setCard("year", value);
                }}
                error={
                  cards.year.length !== 2 &&
                  cards.year.length > 0 &&
                  !activeYear
                }
              />
            </DateCard>
          </FaceCard>
        </MainAdd>
        <OtherAdd>
          <BackCard>
            <StylesPalka />
            <BackInfo>
              <Text>CVV/CVC</Text>
              <CvvInput
                type="text"
                placeholder="000"
                value={cards.cvv}
                onFocus={() => setActiveCvv(true)}
                onBlur={() => setActiveCvv(false)}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setCard("cvv", value);
                }}
                error={
                  cards.cvv.length !== 3 && cards.cvv.length > 0 && !activeCvv
                }
              />
              <CvvText>три цифры </CvvText>
              <CvvText>с обратной стороны</CvvText>
              <CvvText>карты</CvvText>
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

      <Btn type="submit" onClick={handleSubmit}>
        Оплатить
      </Btn>
    </Container>
  );
}

export default App;
