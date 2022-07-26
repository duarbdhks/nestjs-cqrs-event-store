"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsID = void 0;
const class_validator_1 = require("class-validator");
const isInteger = (value) => (typeof value === 'number') && Number.isSafeInteger(+value);
const isPositiveInteger = (value) => isInteger(value) && (+value > 0);
const isString = (value) => typeof value === 'string';
const IsID = (validationOptions) => {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'isID',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate(value) {
                    const isCheckArray = (validationOptions === null || validationOptions === void 0 ? void 0 : validationOptions.each) && Array.isArray(value);
                    return isCheckArray ? value.every((v) => isPositiveInteger(v)) : isPositiveInteger(value);
                },
                defaultMessage() {
                    return `$property must satisfy ID condition(is every elements are positive integer)`;
                },
            },
        });
    };
};
exports.IsID = IsID;
//# sourceMappingURL=decorator.js.map