import { Component, register } from '../component'
var AutoComplete = register({
    beforeUpdate: function(action) {},
    afterUpdate: function(action) {
        if (action === 'show') {}
    },
    methods: {
        autoComplete: function(finish) {
            this.props.prefix = this.props.dom.input;
            return finish(this.props);
        }
    }
})

export default AutoComplete;