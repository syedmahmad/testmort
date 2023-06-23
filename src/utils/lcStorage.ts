export interface LocalStorageThemeProps {
    theme?: {
        mode: 'light' | 'dark'
    }
}

export const getDataToLCStorage = (key: string) => {
    const storedVaues: string | null = localStorage.getItem(key);
    if (storedVaues) {
        const lcSettings = JSON.parse(storedVaues || '');
        return lcSettings
    }
    return {};
}

export const setDataToLCStorage = (key: string, node: LocalStorageThemeProps) => {
    let updateData = node;

    const storedVaues: string | null = localStorage.getItem(key);
    if (storedVaues) {
        const parsedValues = JSON.parse(storedVaues);
        updateData = {
            ...parsedValues,
            ...node,
        };
    }
    localStorage.setItem(key, JSON.stringify(updateData));
}