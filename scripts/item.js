
export default {
     validateName: function(name) {

        if(typeof(name) !== 'string' || name === ''){
            throw TypeError('Name Must not be blank')
        }
    },

    create: function(name) {
        return {
            id: cuid(),
            name,
            checked: false

        }
    }
};

