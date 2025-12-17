import { useEffect, useState } from "react";
import Input from "./components/Inputs/Currently/input";
import Button from "./components/buttons/button";
import { Container, Content, Row, Column } from "./styles";
import InputBefore from "./components/Inputs/Before/inputBefore";
function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number) => {
    console.log("Add Number");
    setCurrentNumber(
      (prev) => `${number === "." ? prev : prev === "0" ? "" : prev}${number}`
    );
  };

  const handleOnClear = () => {
    console.log("Clear all");
    setCurrentNumber("0");
    setOperation('');
    setFirstNumber('0');
  };

  const handleDelete = () => {
    console.log("Delete number");
    setCurrentNumber("0");
  };
  const defineOperation = (value) => {
    console.log("Operation define");
    setOperation(value);
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
    }
  };

  const handleExecuteOperation = () => {
    console.log("Operation execute");
    switch (operation) {
      case "X":
        setCurrentNumber(Number(firstNumber) * Number(currentNumber));
        setFirstNumber("0");
        setOperation('=')
        break;
      case "/":
        setCurrentNumber(Number(firstNumber) / Number(currentNumber));
        setFirstNumber("0");
        setOperation('=')
        break;
      case "+":
        setCurrentNumber(Number(firstNumber) + Number(currentNumber));
        setFirstNumber("0");
        setOperation('=')
        break;
      case "-":
        setCurrentNumber(Number(firstNumber) - Number(currentNumber));
        setFirstNumber("0");
        setOperation('=')
        break;
      case "%":
        setCurrentNumber(Number(firstNumber)/100*Number(currentNumber));
        setFirstNumber("0");
        setOperation('=')
        break;
      case "^":
        setCurrentNumber(Number(firstNumber) ** Number(currentNumber));
        setFirstNumber("0");
        setOperation('=')
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Content>
        <InputBefore value={firstNumber}/>
        <Input value={currentNumber} operation={operation}/>
        <Row>
          <Button label={"C"} onClick={handleOnClear} />
          <Button label={"^"} onClick={() => defineOperation("^")} />
          <Button label={"%"} onClick={() => defineOperation("%")} />
          <Button label={"X"} onClick={() => defineOperation("X")} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber("7")} />
          <Button label={"8"} onClick={() => handleAddNumber("8")} />
          <Button label={"9"} onClick={() => handleAddNumber("9")} />
          <Button label={"/"} onClick={() => defineOperation("/")} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber("4")} />
          <Button label={"5"} onClick={() => handleAddNumber("5")} />
          <Button label={"6"} onClick={() => handleAddNumber("6")} />
          <Button label={"-"} onClick={() => defineOperation("-")} />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber("1")} />
          <Button label={"2"} onClick={() => handleAddNumber("2")} />
          <Button label={"3"} onClick={() => handleAddNumber("3")} />
          <Button label={"+"} onClick={() => defineOperation("+")} />
        </Row>
        <Row>
          <Button label={"0"} onClick={() => handleAddNumber("0")} />
          <Button label={"."} onClick={() => handleAddNumber(".")} />
          <Button label={"del"} onClick={handleDelete} />
          <Button label={"="} onClick={handleExecuteOperation} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
