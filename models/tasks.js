class Task{
    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
    }

    getId(){
        return this.id;
    }
    setId(newId){
        this.id = newId;
    }
}

module.exports = Task;