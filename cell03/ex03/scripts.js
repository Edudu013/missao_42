
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function addTask() {
    const taskText = prompt("Digite a nova tarefa:");
    if (taskText) {
        const task = document.createElement('div');
        task.className = 'task';
        task.textContent = taskText;
        task.onclick = () => {
            if (confirm('Deseja remover esta tarefa?')) {
                task.remove();
                saveTasks();
            }
        };
        const ftList = document.getElementById('ft_list');
        ftList.insertBefore(task, ftList.firstChild);
        saveTasks();
    }
}

function saveTasks() {
    const tasks = Array.from(document.querySelectorAll('#ft_list .task')).map(task => task.textContent);
    setCookie('tasks', JSON.stringify(tasks), { expires: 365 });
}

function loadTasks() {
    const tasks = getCookie('tasks');
    if (tasks) {
        JSON.parse(tasks).forEach(taskText => {
            const task = document.createElement('div');
            task.className = 'task';
            task.textContent = taskText;
            task.onclick = () => {
                if (confirm('Deseja remover esta tarefa?')) {
                    task.remove();
                    saveTasks();
                }
            };
            document.getElementById('ft_list').appendChild(task);
        });
    }
}

window.onload = loadTasks;
