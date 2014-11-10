'use strict';

class Assert {

    /** 
     * Assert that specified value is not null or undefined.
     * @param {object} value - Value.
     * @param {string} [name] - Value display name.
     * @param {string} [message] - Assertion message.
     */
    public static isNotNull(value: Object, name?: string, message?: string): void {
        if (value === null || value === void 0) {
            var errorMessage: string = message || (name
                ? '"{0}" cannot be null.'
                : 'Specified value cannot be null.');

            throw new Error(errorMessage.format(name));
        }
    }

    /** 
     * Assert that specified value is true.
     * @param {boolean} value - Value.
     * @param {string} [name] - Value display name.
     * @param {string} [message] - Assertion message.
     */
    public static isTrue(value: boolean, name?: string, message?: string): void {
        if (!value) {
            var errorMessage: string = message || (name
                ? '"{0}" is not a "true".'
                : 'Specified value is not a "true".');

            throw new Error(errorMessage.format(name));
        }
    }

    /** 
     * Assert that specified value is false.
     * @param {boolean} value - Value.
     * @param {string} [name] - Value display name.
     * @param {string} [message] - Assertion message.
     */
    public static isFalse(value: boolean, name?: string, message?: string): void {
        if (value) {
            var errorMessage: string = message || (name
                ? '"{0}" is not a "false".'
                : 'Specified value is not a "false".');

            throw new Error(errorMessage.format(name));
        }
    }

    /** 
     * Assert that specified string match regexp pattern .
     * @param {string} value - Value.
     * @param {RegExp} pattern - RegExp pattern.
     * @param {string} [name] - Value display name.
     * @param {string} [message] - Assertion message.
     */
    public static isMatch(value: string, pattern: RegExp, name?: string, message?: string): void {
        if (!pattern.test(value)) {
            var errorMessage: string = message || (name
                ? '"{0}" is not match pattern.'
                : 'Specified value is not match pattern.');

            throw new Error(errorMessage.format(name));
        }
    }

    /** 
     * Assert that specified value is in range.
     * @param {number} value - Value.
     * @param {number} from - Lower range limit.
     * @param {number} to - Upper range limit.
     * @param {string} [name] - Value display name.
     * @param {string} [message] - Assertion message.
     */
    public static inRange(value: Number, from: Number, to: Number, name?: string, message?: string): void {
        if (value < from || value > to) {
            var errorMessage: string = message || (name
                ? '"{0}" is out of range [{1}, {2}].'
                : 'Specified value out of range [{1}, {2}].');

            throw new Error(errorMessage.format(name || '', from, to));
        }
    }

    /** 
     * Assert that specified value is array.
     * @param {object} value - Value.
     * @param {string} [name] - Value display name.
     * @param {string} [message] - Assertion message.
     */
    public static isArray(value: Object, name?: string, message?: string): void {
        if (Object.prototype.toString.call(value) !== '[object Array]') {
            var errorMessage: string = message || (name
                ? '"{0}" is not a array.'
                : 'Specified value is not a array.');

            throw new Error(errorMessage.format(name));
        }
    }
}

export = Assert;

