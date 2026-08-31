

export const invoiceAmount = (amount) => {
    const separateNumbers = amount.toString();
        return separateNumbers[0] + " " + separateNumbers.slice(1) + " kr";
}