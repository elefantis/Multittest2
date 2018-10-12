function Tank( uid, id ){
    this.uid = uid;
    this.id = id;
    this.input = 0;
    this.inGame = false;
    this.asigned = false;
    if( id == 0 ) {
        this.x = 100;
        this.y = 100;
    }else {
        this.x = 824;
        this.y = 500;
    }
}

module.exports = Tank;