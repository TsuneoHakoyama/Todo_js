import './style.css'

const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "todo-item";
    const p = document.createElement("p");
    p.className = "todo-title";
    p.innerText = inputText;
    const completeButton = document.createElement("button");
    completeButton.className = "button";
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        const moveTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        const backButton = document.createElement("button");
        backButton.className = "button";
        backButton.innerText = "戻す";
        moveTarget.firstElementChild.appendChild(backButton);
        document.getElementById("complete-list").appendChild(moveTarget);
    
    });
    const deleteButton = document.createElement("button");
    deleteButton.className = "button";
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });

    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    
    document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);