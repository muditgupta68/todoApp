add = document.getElementById('add')
update();

function getUpdate(){
    console.log("working");
    title = document.getElementById('title').value;
    desc = document.getElementById('desc').value;
    if(localStorage.getItem('todoList')==null){
        arr = [];
        arr.push([title,desc]);
        localStorage.setItem('todoList',JSON.stringify(arr));
    }
    else{
        jsonArr = localStorage.getItem('todoList');
        arr = JSON.parse(jsonArr);
        arr.push([title,desc]);
        localStorage.setItem('todoList',JSON.stringify(arr));
    }
    update();
}
function update(){
    if(localStorage.getItem('todoList')==null){
        arr = [];
    }
    else{
        jsonArr = localStorage.getItem('todoList');
        arr = JSON.parse(jsonArr);
    }
    let table = document.getElementById('table');
    let str='';
    arr.forEach((element,index) => {
        str+=`
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-danger" onclick="del(${index})">Delete</button></td>
        </tr>
        `;
    });
    
    table.innerHTML = str;
}

add.addEventListener('click',getUpdate);

del = (delNum) =>{
    jsonArr = localStorage.getItem('todoList');
    arr = JSON.parse(jsonArr);
    arr.splice(delNum,1);
    console.log('hello');
    localStorage.setItem('todoList',JSON.stringify(arr));
    update();
}