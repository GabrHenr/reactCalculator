import { InputBeforeContainer } from "./styles";

const InputBefore = ({ value }) => {
  return (
    <>
      <InputBeforeContainer>
        <input disabled value={value} />
      </InputBeforeContainer>
    </>
  );
};

export default InputBefore;
