import { Row } from "../../../styles";
import { InputContainer } from "./styles";
const Input = ({value,operation}) => {
  return (
    <>
      <InputContainer>
      <Row>
      <input disabled value={operation} style={{textAlign:"center"}}/>
      <input disabled value={value}/>
      </Row>
      </InputContainer>
    </>
  );
};
export default Input;
