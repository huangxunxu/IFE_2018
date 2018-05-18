import san, {DataTypes} from 'san'; 

var MyApp = san.defineComponent({
    field: ['name', 'age', 'des'],
    template: ''
      +  '<section>'
      +      '<div>'
      +          '<input type="text" name="name" placeholder="姓名  (string)" value="{= name =}">'
      +          '<input type="number" name="age" placeholder="年龄  (number)" value="{= age =}">'
      +          '<input type="text" name="des" placeholder="简介  (string)" value="{= des =}">'
      +      '</div>'
      +      '<div>'
      +          '<span>信息:</span>'
      +          '<button on-click="clear">移除信息</button>'
      +      '</div>'
      +      '<div class="show">'
      +          '<p>姓名: {{name}}</p>'
      +          '<p>年龄: {{age}}</p>'
      +          '<p>简介: {{des}}</p>'
      +      '</div>'
      +  '</section>',

    dataTypes: {
        name: DataTypes.string,
        age: DataTypes.number,
        des: DataTypes.string
    },
    clear: function (){
        console.log(this)
    },
    type: function (){
        console.log(this);
    }
});

var myApp = new MyApp();
myApp.attach(document.body);
myApp.type();
