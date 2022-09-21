class ListActivity {
    constructor(listActivity) {
        this.listActivity = listActivity;
    }
    addActivity(activity) {
        if (this.listActivity) {
            this.listActivity = [...this.listActivity, activity]
        }
        else {
            this.listActivity = [activity]
        }
    }
    deleteActivity(activityId) {
        let activityIndex = this.listActivity.findIndex(item => item.activityId == activityId)
        console.log(activityIndex);
        this.listActivity.splice(activityIndex, 1)
    }
}
export default ListActivity
