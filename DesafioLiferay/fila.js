function Queue() {
    this.queue = [];
    this.insertQueue = param =>{
        this.queue[this.queue.length] = param;
    }
    this.removeQueue = () => {
        if (this.queue.length > 0) {
            let obj = this.queue[0];
            this.queue.splice(0, 1);
            return obj;
        } else {
            return "Sem elementos na fila";
        }
    }
}