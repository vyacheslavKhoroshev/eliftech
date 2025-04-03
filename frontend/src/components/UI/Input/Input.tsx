import { forwardRef, useState } from "react";
import { firstLetterUpperCase } from "../../../helpers/firstLetterUpperCase";
import styles from "./Input.module.css";
import { InputHTMLAttributes } from "react";

export interface myHTMLInputElement extends HTMLInputElement {
  nestedType: "array" | "object";
}

export interface IInputProps extends InputHTMLAttributes<myHTMLInputElement> {
  labelname?: string | number;
  className?: string;
  nestedType?: "array" | "object";
}

export type InputChangeEventType = React.ChangeEvent<myHTMLInputElement>;

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ ...props }: IInputProps, ref) => {
    const [focus, setFocus] = useState(false);
    return (
      <span className={styles.input_container}>
        {props.labelname && (
          <label htmlFor={props.name}>
            {firstLetterUpperCase(props.labelname!)}:{" "}
          </label>
        )}

        <input
          ref={ref}
          className={styles.input + " " + props.className}
          autoFocus={focus}
          onFocus={() => setFocus(true)}
          onBlur={() => {
            setFocus((prev) => !prev);
          }}
          {...props}
        />

        {focus === true && (
          <button
            type="button"
            className={styles.btn}
            onClick={() => setFocus(false)}
          />
        )}
      </span>
    );
  }
);

export default Input;
Input.displayName = "Input";
