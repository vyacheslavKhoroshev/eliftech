import { SelectHTMLAttributes } from "react";
import styles from "./Select.module.css";
import { firstLetterUpperCase } from "../../../helpers/firstLetterUpperCase";

export interface myHTMLSelectElement extends HTMLSelectElement {
  nestedType: "array" | "object";
}

export interface ISelectProps
  extends SelectHTMLAttributes<myHTMLSelectElement> {
  options: string[];
  label: string;
  nestedType?: "array" | "object";
}

export type SelectChangeEventType = React.ChangeEvent<myHTMLSelectElement>;

const Select = (props: ISelectProps) => {
  return (
    <div className={styles.select_container}>
      <label>{firstLetterUpperCase(props.label)}:</label>
      <select {...props} className={styles.select}>
        {props.options.map((option, i) => (
          <option key={i} value={option}>
            {firstLetterUpperCase(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
