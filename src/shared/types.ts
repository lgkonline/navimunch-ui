export interface IList {
    title: string;
    items: IListItem[];
}

export type IListMode = "edit" | "shopping";

export interface IListItem {
    label: string;
}