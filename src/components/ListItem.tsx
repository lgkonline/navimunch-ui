import React, { useState } from "react";
import { IListItem, IListMode } from "../shared/types";
import { DashCircle, Square, CheckSquare } from "react-bootstrap-icons";

import styles from "./ListItem.module.scss";

export interface IListItemProps extends IListItem {
    mode: IListMode;
}

export const ListItem = ({ mode, label }: IListItemProps) => {
    const [checked, setChecked] = useState<boolean>(false);

    const toggleChecked = () => setChecked(!checked);

    return (
        <li className="ListItem">
            {mode === "edit" ?
                <DashCircle data-testid="delete-icon" />
                :
                <button className={styles.checkBtn} onClick={toggleChecked} data-testid="check-btn">
                    {checked ? <CheckSquare data-testid="check-icon" /> : <Square data-testid="uncheck-icon" />}
                </button>
            }
            <span className="ml-1">
                {label}
            </span>
        </li>
    );
};