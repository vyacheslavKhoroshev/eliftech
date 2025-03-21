import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.css";
import { firstLetterUpperCase } from "../../../helpers/firstLetterUpperCase";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  name: string;
  className?: string;
}

const Button = ({ ...props }: IButtonProps) => {
  return (
    <button className={styles.button + " " + props.className} {...props}>
      {firstLetterUpperCase(props.name)}
    </button>
  );
};

export default Button;
