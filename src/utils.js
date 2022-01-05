export function formatDate(date) {
    const d = new Date(date);

    let day = d.getDate().toString().padStart(2, '0');
    let month = (d.getMonth() + 1).toString().padStart(2, '0');
    let year = d.getFullYear();

    return {day, month, year};
}