export const handleInput = <T extends Record<string, any>>(e: React.ChangeEvent<HTMLInputElement>, formData: T, setFormData: React.Dispatch<React.SetStateAction<T>>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}