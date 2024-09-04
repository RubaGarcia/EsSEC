export function formDataToJSON(formData: FormData): string {
    
    const formDataObj: { [key: string]: any } = {};

    formData.forEach((value, key) => {
        // Si ya existe la clave en el objeto, convierte el valor en un array para almacenar múltiples valores
        if (formDataObj[key]) {
            if (Array.isArray(formDataObj[key])) {
                formDataObj[key].push(value);
                // formDataObj[key].push('');
            } else {
                formDataObj[key] = [formDataObj[key], value];
            }
        } else {
            formDataObj[key] = value;
        }
    });

    return JSON.stringify(formDataObj);
}
