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

    div.appendChild(p);
    li.appendChild(div);
    
    document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);