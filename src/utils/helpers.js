
export const handleInputChange = (e, setState) => {
    const { name, value } = e.target;

    setState(prev => ({
        ...prev, [name]: value
    }));
};

export const capitalizeFirst = (string) => {
    if (typeof string !== 'string' || string.length === 0) {
        return string;
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
}
