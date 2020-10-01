import _debounce from 'lodash/debounce';
import _throttle from 'lodash/throttle';

export function getDebouncedFunction(func, wait = 300) {
    return _debounce(func, wait, {
        leading: true,
        trailing: false
    });
}

export function getThrottleFunction(func, wait = 300) {
    return _throttle(func, wait, {
        leading: true,
        trailing: false
    });
}