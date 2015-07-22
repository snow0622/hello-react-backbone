define(function(require,exports, module) {
    var React = require('react');
    var BackboneMixin = {
        componentDidMount: function () {
            this.getBackboneModel().bind('change', this.forceUpdate.bind(this, null));
        },
        componentWillUnmount: function () {
            this.getBackboneModel().unbind(null, null, this);
        }
    };
    HelloMessage = React.createClass({
        mixins: [BackboneMixin],
        getBackboneModel: function () {
            return this.props.data;
        },
        handleChange:function(){
            var newInfo = {name:'Air',location:"New York"};
            this.props.data.set(newInfo);
            this.props.onGetJsonData('ok!');
        },
        render: function () {
            return (
                <div><input type="button" value="Post" onClick={this.handleChange} />
                    <div>Hello,{this.props.data.attributes.name},I am in {this.props.data.attributes.location}</div>
                </div>
            );
        }
    });
    module.exports = HelloMessage;
});

