export const handleResponse = async <T>({ response }: { response: Response }): Promise<T> => {
    try {
        const data = await response.json();

        if (!response.ok) {
            throw {
                message: data?.message || 'Unknown error',
                status: response.status,
                details: data,
            };
        }
        return data;
    } catch (err) {

        throw err
    }
};
