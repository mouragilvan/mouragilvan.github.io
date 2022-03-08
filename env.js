//SENDER=${{secrets.SENDER}}
define([], function(require, factory) {
    return {
        teste: function(){
            return `${secrets.SENDER}`
        }
    }
    
});