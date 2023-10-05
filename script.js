var ele=new Map();
var ind=0;

function render() {
    var htmlEle = `<h1>Your Todos</h1>`;
    for(let value of ele) {
        htmlEle += `<div class="todo">
        <span>${value[1]}</span>
        <button onClick=remove(${value[0]})>Done</button>
        </div>`;
    }

    document.querySelector('#show-box').innerHTML = htmlEle;
}


function add() {
    var str=document.querySelector('#new-todo').value;
    ele.set(ind,str);
    ind+=1
    render()
}

function remove(key) {
    ele.delete(key);
    render()
}

render()
