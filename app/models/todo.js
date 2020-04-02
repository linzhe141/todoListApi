class Todo {
    constructor(id, name, desc) {
        this.id = id
        this.name = name
        this.desc = desc
        this.isFinished = false
        this.createAt = new Date()
    }
}

module.exports = Todo