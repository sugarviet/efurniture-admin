export function formatPhoneNumber(phoneNumber) {
    const countryCode = "+84"
    const mobilePart = phoneNumber.substring(1, 4);
    const firstPart = phoneNumber.substring(4, 7);
    const secondPart = phoneNumber.substring(7);

    return `${countryCode} ${mobilePart} ${firstPart} ${secondPart}`
}