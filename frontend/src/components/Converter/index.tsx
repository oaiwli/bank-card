import { InputMoneyLeft, InputMoneyRight, MoneyForm, Text } from "./styles";

import { useState } from "react";

function Converter() {
  const [dram, setDram] = useState("");
  const [rub, setRub] = useState("");
  const conversion = 15;

  const handleDram = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDram(value);
    const go = value ? (parseFloat(value) * conversion).toFixed(2) : "";
    setRub(go);
  };

  const handleRub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRub(value);
    const go = value ? (parseFloat(value) / conversion).toFixed(2) : "";
    setDram(go);
  };

  return (
    <>
      <Text>УКАЖИТЕ СУММУ</Text>
      <MoneyForm>
        <InputMoneyLeft
          type="text"
          placeholder="ֆ"
          value={dram}
          onChange={handleDram}
        />
        <InputMoneyRight
          type="text"
          placeholder="₽"
          value={rub}
          onChange={handleRub}
        />
      </MoneyForm>
    </>
  );
}

export default Converter;
