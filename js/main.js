import Activity from './activity.js';
import ListActivity from './activityList.js';
function getEle(id) {
    return document.getElementById(id)
}
let loadData = () => {
    if (localStorage.getItem("listActivity")) {
        return JSON.parse(localStorage.getItem("listActivity"));
    }
}
let dshd = new ListActivity(loadData())
let loadDataNew = () => {
    if (localStorage.getItem("listActivityNew")) {
        return JSON.parse(localStorage.getItem("listActivityNew"));
    }
}
let dshdNew = new ListActivity(loadDataNew())
getEle("addItem").onclick = () => {
    let activityItem = getEle("newTask").value;
    let activityId = Math.floor(Math.random() * 100);
    let newActivity = new Activity(activityItem, activityId);
    dshd.addActivity(newActivity)
    saveData(dshd.listActivity);
    showActivity(dshd.listActivity);
}
let showActivity = (getActivityList) => {
    let res = ``;
    if (getActivityList) {
        getActivityList.map(item => {
            res += `
                <li id="task">${item.activityItem}
                <button id="btnDelete" class="fa fa-trash-can" onclick="deleteActivity(${item.activityId})"></button>
                <button id="btnCheck"class="fa fa-check"onclick="checkActivity(${item.activityId})"></button>
                </li>`
        })

    }
    getEle("todo").innerHTML = res;
}
let showCompleteActivity = (getActivityList) => {
    let res = ``;
    if (getActivityList) {
        getActivityList.map(item => {
            res += `
                <li>${item.activityItem}
                <button id="btnDelete" class="fa fa-trash-can" onclick="deleteActivityDone(${item.activityId})"></button>
                <button id="btnCheckDone"class="fa fa-check"onclick="checkActivity(${item.activityId})"></button>
                </li>`
        })

    }
    getEle("completed").innerHTML = res;
}
// onclick="checkActivity(${item.activityId})
let saveData = (data) => {
    localStorage.setItem("listActivity", JSON.stringify(data));
}
let saveDataNew = (data) => {
    localStorage.setItem("listActivityNew", JSON.stringify(data));
}
window.deleteActivity = (activityId) => {
    dshd.deleteActivity(activityId);
    saveData(dshd.listActivity);
    showActivity(dshd.listActivity);
}
window.deleteActivityDone = (activityId) => {
    dshdNew.deleteActivity(activityId);
    saveDataNew(dshdNew.listActivity);
    showCompleteActivity(dshdNew.listActivity);
}
window.checkActivity = (activityId) => {
    let activityItem = getEle("newTask").value;
    let activityIdNew = Math.floor(Math.random() * 100);
    let newActivity = new Activity(activityItem, activityIdNew);
    dshd.deleteActivity(activityId)
    dshdNew.addActivity(newActivity)
    showCompleteActivity(dshdNew.listActivity)
    saveDataNew(dshdNew.listActivity)
    saveData(dshd.listActivity)
}
getEle("one").onclick = () => {
    getEle("todo").style.display = "none";
    getEle("completed").disabled = false;
}

getEle("two").onclick = () => {
    let hd = dshd.listActivity.sort((hdtt, hd) => {
        let tenhdtt = hdtt.activityItem.toLowerCase();
        let tenhd = hd.activityItem.toLowerCase();
        if (tenhdtt > tenhd) {
            return 1;
        }
        if (tenhdtt < tenhd) {
            return -1;
        }
        return 1;
    })
    showActivity(hd)
}
getEle("three").onclick = () => {
    let hd = dshd.listActivity.sort((hdtt, hd) => {
        let tenhdtt = hdtt.activityItem.toLowerCase();
        let tenhd = hd.activityItem.toLowerCase();
        if (tenhdtt < tenhd) {
            return 1;
        }
        if (tenhdtt > tenhd) {
            return -1;
        }
        return 1;
    })
    showActivity(hd)
}
getEle("all").onclick = () => {
    showActivity(dshd.listActivity)
    showCompleteActivity(dshdNew.listActivity)
}
window.onload = showActivity(dshd.listActivity);
window.onload = showCompleteActivity(dshdNew.listActivity);