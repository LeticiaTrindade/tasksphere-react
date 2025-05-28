function formatDate(date) {
    if (!date) return 'Não informado';

    if (date.seconds) {
        return new Date(date.seconds * 1000).toLocaleDateString();
    }

    const parsedDate = new Date(date);
    if (!isNaN(parsedDate)) {
        return parsedDate.toLocaleDateString();
    }

    return 'Data inválida';
}

export default formatDate;