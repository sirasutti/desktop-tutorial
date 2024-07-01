
document.addEventListener('DOMContentLoaded', function() {
   // addTodoBtnの要素を取得してください。
    let addTodoBtn = document.getElementById('addTodoBtn');
    let todoInput = document.getElementById('todoInput');
    let todoList = document.getElementById('todoList');

    // 追加ボタンが押下されたときのイベントを追加してください
    addTodoBtn.addEventListener('click', function() {
        //処理1、inputが空になっていたら、alert()処理をして処理を終わらせてください。
        //メッセージは"ToDoを入力してください"を出力してください
        if (todoInput.value.trim() === '') {
            alert('ToDoを入力してください');
            return;
        }

    //      処理2、todoItem内に入力された文字が追加されるようにしてください。
        let todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.textContent = todoInput.value;
        
        // 入力された文字を表示するリストに追加
        todoList.appendChild(todoItem);
        
        // 入力フィールドをクリア
        todoInput.value = '';
    });
});