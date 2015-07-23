define(function(require,exports, module) {
    var $ = require('jquery');
    var React = require('react');
    var Backbone = require('backbone');
    var HelloComponents = require('./components/HelloComponents');
    var ReactApp={
        getJsonData:function(data){
            alert('收集数据！'+data.get("name")+","+data.get("location"));
        },
        getInstance:function(model,options){
            var modelData = new Backbone.Model(model);
            React.render(React.createElement(HelloComponents, {data: modelData, onGetJsonData: this.getJsonData}), $('#example')[0]);
        }
    };
    return ReactApp;
});