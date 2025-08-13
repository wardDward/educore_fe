import { ReactElement } from "react";

export interface Links{
    name: string;
    path: string;
    icon: ReactElement,
    type: 'link' | 'group';
    items?: Links[];
}
