import {
  Container,
  Btn,
  Header,
  Text,
  State,
  TextColumn,
  TextBlue,
} from "./styles";
import Checkbox from "@mui/material/Checkbox";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import useDataStore from "../store/useDataStore";
import { useEffect } from "react";

import Converter from "./Converter";
import Card from "./Card";
import Forma from "./Forma";

function Bank() {
  const { saveData, fetchData } = useDataStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubmit = () => {
    saveData();
  };

  return (
    <Container>
      <Header>Пополнить банковской картой</Header>
      <Converter />
      <Card />
      <Forma />
      <State>
        <Checkbox />
        <TextColumn>
          <Text>
            Запомнить эту карту. Это безопасно.
            <ErrorOutlineIcon fontSize="small" htmlColor="#c7c9da" />
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

export default Bank;

// Запускается через cd frontend, yarn dev
