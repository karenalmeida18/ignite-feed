import { HtmlHTMLAttributes } from 'react';
import circle from '../../assets/circle.svg';
import circleChecked from '../../assets/circleChecked.svg';

import styles from './task.module.css';
import { TbTrash } from 'react-icons/tb';

interface TaskProps extends HtmlHTMLAttributes<HTMLDivElement> { 
    text: string;
    isChecked: boolean;
}

export default function Task({ text, isChecked, onClick }: TaskProps) {
    return (
        <div role="button" className={styles.container} onClick={onClick}>
            <div>
            <img src={isChecked ? circleChecked : circle} alt={isChecked ? 'concluída' : 'tarefa a fazer'} />
            {text}
            </div>
            {/* <TbTrash style={{ alignContent: 'end', flexGrow: 1 }}/> */}
        </div>
    )
}