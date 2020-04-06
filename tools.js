var field = [
    {
        name: 'Chinese', 
        label: '语文'
    },
    {
        name: 'math',
        label: '数学'
    },
    {
        name: 'English',
        label: '英语'
    }
]

function formatter(val){
    return field.filter(item => {
        return item.label == val
    })[0].name
}
module.exports = formatter