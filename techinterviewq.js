const keysMatch = function(obj1, obj2, keys) {
    for ( let i = 0;i < keys.length; i++){    
        if (obj1[keys[i]] !== obj2[keys[i]]) {
            return false;
        }
    }
    return true;
};

keysMatch({a: 1, b: 2}, {a: 1}, ['a']); // => true
keysMatch({a: 1, b: 2}, {a: 1}, ['a', 'b']); // => false