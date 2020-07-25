import React, { useState, useEffect } from "react";
import { IList, IListMode } from "../shared/types";
import { List } from "../components/List";

export const ListPage = () => {
    const [list, setList] = useState<null | IList>(null);
    const [mode, setMode] = useState<IListMode>("edit");

    const toggleMode = () => setMode(mode === "edit" ? "shopping" : "edit");

    useEffect(() => {
        if (list === null) {
            fetchList();
        }
    }, [list]);

    const fetchList = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        console.log(data);
        setList({
            title: "New list",
            items: ["Nutella", "Müsli", "Mehl"]
        });
    }

    return (
        <div className="ListPage">
            {list ?
                <List
                    {...list}
                    mode={mode}
                    toggleMode={toggleMode}
                />
                :
                <h4>Loading…</h4>}
        </div>
    );
};