function createObject(name){
    this.objectName=name;
    this.demoMethod=function(){
        console.log(this.objectName);
    }
}
createObject.constructor
createObject.prototype