export const codeValidator = (value) =>
    value.length >= 5 && value.length <= 10 ? undefined : "value length must be >= 5 & <= 10";

export const nameValidator = (value) =>
    value.length >= 5 && value.length <= 100 ? undefined : "value length must be >= 5 & <= 100";

export const priceValidator = (value) =>
    value >= 0.01 && value <= 1000000 ? undefined : "value  must be >= 0.01 & <= 1000000";

export const shelfLifeValidator = (value) =>
    value >= 1 && value <= 1000 ? undefined : "value must be >= 1 & <= 1000";

export const mainValidator = (value) =>
    value.length >= 0 && value.length <= 2000 ? undefined : "value length must be >= 0 & <= 2000";

export const required = (value) => value ? undefined : "Required";
