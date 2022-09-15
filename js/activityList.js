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
    deleteActivity(activity) {
        let activityIndex = this.listActivity.filter(item => item.activityId != activity)
        this.listActivity.splice(activityIndex, 1)
    }
}
export default ListActivity
