
export const number = value => (Number.isNaN(value) || !value ? 0 : value);

export const currency = amount => `$${number(amount).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
