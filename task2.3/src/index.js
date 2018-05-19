import './index.css'

var MyApp = san.defineComponent({
    template: ''
    + '<div id="block" on-click="toggle" class="{{ isToggle? before : after }}"></div>',

    initData: function (){
        return {
            isToggle: false,
            before: 'before',
            after: 'after'
        }
    },
    toggle: function (){
        this.data.set('isToggle', !this.data.get('isToggle'));
    }
})

var app = new MyApp();
app.attach(document.body);