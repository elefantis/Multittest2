function Tank( uid, id ){
    this.uid = uid;
    this.id = id;
    this.input = 0;
    this.inGame = false;
    this.asigned = false;
    this.x = 0;
    this.y = 0;
}

module.exports = Tank;