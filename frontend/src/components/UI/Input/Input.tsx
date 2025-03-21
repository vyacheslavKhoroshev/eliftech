import { forwardRef } from "react";
import { firstLetterUpperCase } from "../../../helpers/firstLetterUpperCase";
import styles from "./Input.module.css";
import { InputHTMLAttributes, RefObject } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelname?: string | number;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ ...props }: IInputProps, ref) => {
    return (
      <div className={styles.input_container}>
        {props.labelname && (
          <label htmlFor={props.name}>
            {firstLetterUpperCase(props.labelname!)}:{" "}
          </label>
        )}

        <input
          ref={ref}
          className={styles.input + " " + props.className}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
Input.displayName = "Input";
