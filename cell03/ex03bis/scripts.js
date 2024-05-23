$(document).ready(function () {
    function getCookie(name) {
        let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? decodeURIComponent(match[2]) : null;
    }

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (encodeURIComponent(value) || "") + expires + "; path=/";
    }

    function loadTasks() {
        let tasks = getCookie('tasks');
        if (tasks) {
            JSON.parse(tasks).forEach(taskText => createTaskElement(taskText));
        }
    }

    function saveTasks() {
        let tasks = $.map($('.task'), task => $(task).text());
        setCookie('tasks', JSON.stringify(tasks), 7);
    }

    function createTaskElement(taskText) {
        let task = $('<div></div>').addClass('task').text(taskText);
        task.click(function () {
            if (confirm('Deseja realmente remover esta tarefa?')) {
                task.remove();
                saveTasks();
            }
        });
        $('#ft_list').prepend(task);
    }

    $('#addTaskBtn').click(function () {
        let taskText = prompt('Digite a nova tarefa:');
        if (taskText) {
            createTaskElement(taskText);
            saveTasks();
        }
    });

    loadTasks();
});
