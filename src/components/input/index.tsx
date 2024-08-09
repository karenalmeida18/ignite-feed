import { InputHTMLAttributes } from "react";
import styles from "./input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export default function Input({ label, ...rest }: InputProps) {
  return (
    <>
        {label && <label>{label} </label>}
        <input className={styles.container} {...rest} />
    </>
  )
}