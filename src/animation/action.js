export default class Action {
    onStart = () => {};
    onUpdate = p => {};
    onStop = () => {};
    isStarted = false;
    isStopped = false;
    
    /**
     * merge an action with another
     * these two actions should have the same start time and stop time
     */
    merge(action) {
        const out = new Action();
        
        out.onStart = () => {
            this.onStart();
            action.onStart();
        };
        out.onUpdate = p => {
            this.onUpdate(p);
            action.onUpdate(p);
        };
        out.onStop = () => {
            this.onStop();
            action.onStop();
        };
        
        return out;
    }
    
    run(start, stop, now) {
        if (this.isStarted && !this.isStopped) {
            if (now > stop) {
                this.onUpdate(1);
                this.onStop();
                this.isStopped = true;
            } else {
                this.onUpdate((now - start)/(stop - start));
            }
        } else if (now > start) {
            this.onStart();
            this.onUpdate(0);
            this.isStarted = true;
        }
    }
}