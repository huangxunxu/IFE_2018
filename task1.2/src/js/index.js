import classes from '../css/index.css';

var MyApp = san.defineComponent({
    template : '<p id="hello">Hello {{name}}!</p>',

    initData : function () {
        return {
            name : 'San'
        };
    }
});

var myApp = new MyApp();
myApp.attach(document.body);