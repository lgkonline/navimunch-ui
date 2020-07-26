import React from "react";
import { IList, IListMode, IListItem } from "../shared/types";
import classNames from "classnames";
import { Pencil, Cart } from "react-bootstrap-icons";
import { ListItem } from "./ListItem";

export interface IListProps extends IList {
    mode: IListMode;
    toggleMode: () => void;
}

export const List = ({ title, items, mode, toggleMode }: IListProps) => {
    return (
        <div className="shadow rounded p-3 bg-stronger">
            <h2 className="mt-0">{title}</h2>

            <ul className="reset">
                {items.map((item: IListItem, key: number) =>
                    <ListItem key={key} {...item} mode={mode} />
                )}
            </ul>

            <div className="mt-3">
                <button className={classNames("btn mr-1", { "active": mode === "edit" })} onClick={toggleMode}><Pencil /></button>
                <button className={classNames("btn", { "active": mode === "shopping" })} onClick={toggleMode}><Cart /></button>
            </div>
        </div>
    );
};