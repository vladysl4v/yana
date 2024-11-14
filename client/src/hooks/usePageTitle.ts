import { useEffect } from "react";
export const usePageTitle = (title: string) : void => {
    useEffect(() => {
        document.title = `${title} - YANA`;
    }, [title]);

    return;
}