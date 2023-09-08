export function cleanDataForm(formData){
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    return data;
}

export function convertFormatDateMessage(fechaHora) {
    const partes = fechaHora.split('T');
    const fecha = partes[0];
    const hora = partes[1].slice(0, 5); // Tomar solo las primeras 5 caracteres (hh:mm)
    const [anio, mes, dia] = fecha.split('-');
    return `${hora}`;
}

export function convertDateFormat(date) {
    const auxDate = new Date(date);
    const today = new Date();
    // Función para agregar un cero si el número es menor que 10
    const addZero = (number) => (number < 10 ? `0${number}` : number);
    if (isSameDay(auxDate, today)) {
        // Si es el mismo día actual, mostrar solo la hora
        const hour = addZero(auxDate.getHours());
        const minutes = addZero(auxDate.getMinutes());
        return `${hour}:${minutes}`;
    } else if (isSameWeek(auxDate, today)) {
        // Si está dentro de la semana actual, mostrar el nombre del día de la semana
        const daysWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const dayWeek = daysWeek[auxDate.getDay()];
        return dayWeek;
    } else {
        // En otros casos, mostrar "dd/mm/aa"
        const day = addZero(auxDate.getDate());
        const month = addZero(auxDate.getMonth() + 1);
        const year = addZero(auxDate.getFullYear() % 100);
        return `${day}/${month}/${year}`;
    }
}

function isSameDay(date1, date2) {
    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
}

function isSameWeek(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // Milisegundos en un día
    const differenceDays = Math.abs((date1 - date2) / oneDay);
    return differenceDays < 7;
}

export function getCurrentDateInFormat() {
    const dateCurrent = new Date();
    const dateFormatted = dateCurrent.toISOString().slice(0, 19).replace(' ', 'T');
    return dateFormatted;
}
