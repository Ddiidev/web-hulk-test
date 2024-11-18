export function injectLocalStorage() {
    const originalSetItem = localStorage.setItem;
    const originalRemoveItem = localStorage.removeItem;
    const originalClear = localStorage.clear;
    
    // Sobrescreve o método setItem uma única vez
    localStorage.setItem = function (key: string, value: string) {
        const oldValue = localStorage.getItem(key);
        const event = new CustomEvent('localstorageChange', {
            detail: {
                key: key,
                newValue: value,
                oldValue: oldValue
            }
        });
        originalSetItem.call(this, key, value);
        window.dispatchEvent(event);
    };

    // Opcional: Sobrescreva outros métodos se necessário
    localStorage.removeItem = function (key: string) {
        const oldValue = localStorage.getItem(key);
        const event = new CustomEvent('localstorageChange', {
            detail: {
                key: key,
                newValue: null,
                oldValue: oldValue
            }
        });
        originalRemoveItem.call(this, key);
        window.dispatchEvent(event);
    };

    localStorage.clear = function () {
        const event = new CustomEvent('localstorageChange', {
            detail: {
                key: '__all__',
                newValue: null,
                oldValue: null
            }
        });
        originalClear.call(this);
        window.dispatchEvent(event);
    };
}