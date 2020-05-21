export interface ITableActions {
    color: string;
    icon: string;
    text: string;
    event: any;
}

export interface ITableHeader {
    text: string;
    formatted_text: string;
    type: string;
    checkbox?: boolean;
    checked?: boolean;
}
