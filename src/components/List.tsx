import React from "react";
import { IList, IListMode } from "../shared/types";
import classNames from "classnames";
import { DashCircle, Square, Pencil, Cart } from "react-bootstrap-icons";

export interface IListProps extends IList {
    mode: IListMode;
    toggleMode: () => void;
}

export const List = ({ title, items, mode, toggleMode }: IListProps) => {
    return (
        <>
            <h2>{title}</h2>

            <ul>
                {items.map((item: string, key: number) =>
                    <li key={key}>
                        {mode === "edit" ?
                            <DashCircle />
                            : <Square />}
                        {item}
                    </li>
                )}
            </ul>

            <div>
                <button className={classNames("btn", { "active": mode === "edit" })} onClick={toggleMode}><Pencil /></button>
                <button className={classNames("btn", { "active": mode === "shopping" })} onClick={toggleMode}><Cart /></button>
            </div>
        </>
    );
};