export function convertMonthInputToReadableFormat(monthInputValue) {
    // Split the input value into year and month parts
    const [year, month] = monthInputValue.split('-');

    // Get the month name from the month number
    const monthName = new Date(`${year}-${month}-01`).toLocaleString('en', { month: 'long' });

    // Concatenate the month name and year
    return `${monthName} ${year}`;
} 