
enum CountComponentType {
    CHILDREN,
    PARENTS,
    BOTH
}

//@ts-ignore
cc.CountComponentType = module.exports = CountComponentType;

cc._BaseNode.prototype.getNonNullComponent = function<T extends cc.Component>(type: cc.ClassType<T> | string)
{
    var comp = this.getComponent(type);    
    if(!comp) comp = this.addComponent(type);

    return comp;
}

cc._BaseNode.prototype.countComponent = function<T extends cc.Component>(type: cc.ClassType<T> | string, count_type: CountComponentType = CountComponentType.CHILDREN)
{
    let num: number = 0;

    num += this.getComponents(type).length;

    switch(count_type) {
        case CountComponentType.CHILDREN:
            for(const ret of this._children) {
                num += ret.countComponent(type, count_type);  
            }
            break;
        case CountComponentType.PARENTS:
            if (!!this._parent) {
                num += this._parent.countComponent(type, count_type);
            }
            break;
        case CountComponentType.BOTH:
            const root = this.getRootNode();
            return root.countComponent(type, CountComponentType.CHILDREN);
    }

    return num;
}

cc._BaseNode.prototype.getRootNode = function() {
    const parent = this._parent;
    if(!!this._parent && !(this._parent instanceof cc.Scene) ) return parent.getRootNode();
    return this;
}

cc._BaseNode.prototype.getPossibleComponent = function<T extends cc.Component>(...types: cc.ClassType<T>[] | string[])
{
    for(const ret of types) {
        const comp = this.getComponent(ret);
        if(!!comp) return comp;
    }

    return null;
}

cc._BaseNode.prototype.getComponentInParents = function<T extends cc.Component>(type: cc.ClassType<T> | string)
{
    let comp: T = null;
    let parent = this._parent;

    while(!!parent && !comp && !(parent instanceof cc.Scene)) {
        comp = parent.getComponent(type);
        parent = parent._parent;
    }
    return comp;
}

cc._BaseNode.prototype.log = function(...params: any[])
{
    if(CC_EDITOR) Editor.log(`[${this._name}] Log: `, ...params, '');
    console.log(`[${this._name}] Log: `, ...params);
}

cc._BaseNode.prototype.findComponent = function<T extends cc.Component>(type: cc.ClassType<T> | string)
{
    return this.getRootNode().getComponentInChildren(type);
}


