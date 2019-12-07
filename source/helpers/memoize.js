// Memoize function (by Odin by Tor use your brain)
export const memoize = (fn) => {
    if (typeof fn !== 'function') {
        throw new Error('Function memoize works only with function as arguments');
    }

    let previousArgument = null;

    let previousResult = null;

    return (argument) => {
        if (argument === previousArgument) {
            return previousResult;
        }

        previousArgument = argument;
        previousResult = fn.call(this, argument);

        return previousResult;
    };
};
