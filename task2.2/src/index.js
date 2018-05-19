var List = san.defineComponent({
    template: ''
    +    '<template>'
        +    '<table rules="all" cellpadding="10" border="2">'
        +        '<tr>'
        +            '<th>姓名</th>'
        +            '<th>审核状态</th>'
        +            '<th>操作</th>'
        +        '</tr>'
        +        '<template>'
        +           '<tr s-for="person,index in persons">'
        +               '<td>{{person.name}}</td>'
        +               '<td>{{person.state | filterState}}</td>'
        +               '<td>'
        +                   '<button s-if="person.state == 2" on-click="checkCurrent(person.id)">待审核</button>'
        +                   '<button s-else on-click="delCurrent(person.id)">删除</button>'
        +               '</td>'
        +           '</tr>'
        +        '</template>'     
        +    '</table>'
        +    '<input type="button" value="添加" on-click="show">'
        +    '<div s-if="isShow">'
        +       '<span on-click="hide">X</span>'
        +       '<input placeholder="请输入名称" type="text" value="{= personName =}">'
        +       '<input type="button" value="完成" on-click="addPerson">'
        +    '</div>'
    +   '</template>',

    initData: function (){
        return {
            newId: 5,
            isShow: false,
            personName: '',
            persons: [
                {id:"0", name:"张三", state:"1"},
                {id:"1", name:"李四", state:"0"},
                {id:"2", name:"王五", state:"2"},
                {id:"3", name:"赵六", state:"2"},
                {id:"4", name:"孙七", state:"2"},
            ]
        }
    },
    // 过滤器
    filters: {
        filterState: function (state){
            if(state.toString() === '0'){
                return "不合格"
            }else if(state == '1'){
                return "合格"
            }else{
                return "待审核"
            }
        }
    },
    // 添加人员
    addPerson: function (){
        // 只做简单空值检查
        let personName = this.data.get('personName').trim();
        let nId = this.data.get('newId')
        if(personName !== ''){
            let newPerson = { id:nId, name:personName, state:'2'};
            // 下一个添加的id+1
            this.data.set('newId', nId+1);
            // 置入新数据
            this.data.push('persons', newPerson);
            // 清空value
            this.data.set('personName', '');
        }
        this.hide();
        
    },
    // 审核中转为合格
    checkCurrent: function (personId){
        let list = this.data.get('persons');
        list = list.map(item =>{
            if(item.id === personId){
                item.state ='1';
            }
            return item;
        });

        this.data.set('persons', list);
    },
    // 删除
    delCurrent: function (personId){
        let list = this.data.get('persons');

        list = list.forEach(item =>{
            if(item.id == personId){
                this.data.remove('persons', item)
                return;
            }
        })
    },
    // 添加人员面板显示关闭
    show: function (){
        this.data.set('isShow', true)
    },
    hide: function (){
        this.data.set('isShow', false)
    }
    
})

var myApp = new List();
myApp.attach(document.body);