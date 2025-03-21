import { SelectHTMLAttributes } from "react";
import styles from "./Select.module.css";
import { firstLetterUpperCase } from "../../../helpers/firstLetterUpperCase";

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  label: string;
}

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
