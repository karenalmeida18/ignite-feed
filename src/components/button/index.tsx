import React, { ButtonHTMLAttributes } from "react";
import styles from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ElementType;
}

export default function Button({ text, icon: Icon, ...rest }: ButtonProps) {
  return (
    <button className={styles.container} {...rest}>
        {Icon && <Icon />}
        {text}
    </button>
  )
}