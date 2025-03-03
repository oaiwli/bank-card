import {
  Form,
  MainAdd,
  OtherAdd,
  FaceCard,
  DateCard,
  TextCard,
  Slash,
  BackCard,
  Scanner,
  BackInfo,
  NumberInput,
  DoubleInput,
  CvvInput,
  CvvText,
  HeadCvvText,
} from "./styles";

import useDataStore from "../../store/useDataStore";
import { useState, useEffect } from "react";

function Forma() {
  const { cards, setCard, fetchData } = useDataStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [activeNumber, setaActiveNumber] = useState(false);
  const [activeMouth, setActiveMouth] = useState(false);
  const [activeYear, setActiveYear] = useState(false);
  const [activeCvv, setActiveCvv] = useState(false);

  return (
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
            <Slash>/</Slash>
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
                cards.year.length !== 2 && cards.year.length > 0 && !activeYear
              }
            />
          </DateCard>
        </FaceCard>
      </MainAdd>
      <OtherAdd>
        <BackCard>
          <Scanner />
          <BackInfo>
            <HeadCvvText>CVV/CVC</HeadCvvText>
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
  );
}

export default Forma;
