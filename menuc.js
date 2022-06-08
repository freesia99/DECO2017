const menuBtn = document.querySelector('.mediaMenu')
const navlinks = document.querySelector(".header-bottom")
menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('media-bottom')
})

function addList() {
        // 用户输入
        const priorityRating = prompt("Please enter the priority of the event(High、Med、Low): ");
        const event = prompt("Please enter the event: ");
        const dueDate=prompt("Please enter the due date: ");
        const time=prompt("Please enter the estimated time required: ");
        const status=prompt("Please enter the completion status: ");


         // 获取table标签元素
        let table = document.getElementById("work_table");
        // 创建新行
        let newRow = table.insertRow();
        // 创建三个新单元格
        let cellPriorityRating = newRow.insertCell();
        let cellEvent = newRow.insertCell();
        let cellDueDate = newRow.insertCell();
        let cellTime = newRow.insertCell();
        let cellStatus = newRow.insertCell();

        // 向表格中插入元素
        cellPriorityRating.innerHTML = priorityRating;
        cellEvent.innerHTML = event;
        cellDueDate.innerHTML = dueDate;
        cellTime.innerHTML = time;
        cellStatus.innerHTML = status;

    }