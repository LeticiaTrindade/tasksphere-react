function formatDate(date) {
    if (!date) return 'Não informado';

    // Caso seja Timestamp do Firebase
    if (date.seconds) {
        return new Date(date.seconds * 1000).toLocaleDateString();
    }

    // Caso seja string (ISO) ou Date
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate)) {
        return parsedDate.toLocaleDateString();
    }

    return 'Data inválida';
}

export default formatDate;