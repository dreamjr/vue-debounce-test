import _debounce from 'lodash/debounce';

export function getDebouncedFunction(func, wait = 300) {
    return _debounce(func, wait, {
        leading: true,
        trailing: false
    });
}