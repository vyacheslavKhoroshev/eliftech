import { InputChangeEventType } from "../components/UI/Input/Input";
import { SelectChangeEventType } from "../components/UI/Select/Select";

export const useHandleOnChange = <T>(
  e: InputChangeEventType | SelectChangeEventType,
  setValue: React.Dispatch<React.SetStateAction<T>>
) => {
  const name = e.target.name;
  const value = e.target.value;

  if (e.target.nestedType) {
    setValue((prevState: any) => {
      return { ...prevState, [name]: [...prevState[name], value] };
    });
    return;
  }

  setValue((prevState) => {
    return { ...prevState, [name]: value };
  });
};
