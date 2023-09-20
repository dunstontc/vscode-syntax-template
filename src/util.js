const _ = require("lodash")
const coolkit = require("coolkit-js")

/**
 * Recursively checks a variable for any values.
 *
 * @param {Object|Array} x
 * @returns {boolean}
 */
const isBlankDeep = (x) => {
    if (coolkit.isBlank(x)) {
        return true
    }

    if (Array.isArray(x)) {
        let haveSomething = false
        for (const item of x) {
            if (!isBlankDeep(item)) {
                haveSomething = true
                break
            }
        }
        if (haveSomething) {
            return false
        }
    }

    if (_.isPlainObject(x)) {
        let haveSomething = false
        for (const property of Object.values(x)) {
            if (!isBlankDeep(property)) {
                haveSomething = true
                break
            }
        }
        if (haveSomething) {
            return false
        }
    }

    return false
}

module.exports = {
    isBlankDeep,
}
