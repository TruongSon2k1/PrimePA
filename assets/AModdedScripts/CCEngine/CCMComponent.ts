

cc.Component.prototype.onChange = null;

//@ts-ignore
cc.Component.prototype._executeOnChange = function() {
    this.onChange && this.onChange();
}

cc.Component.prototype.getNonNullComponent = function<T extends cc.Component>(type: cc.ClassType<T> | string)
{
    return this.node.getNonNullComponent(type);
}

cc.Component.prototype.countComponent = function<T extends cc.Component>(type: cc.ClassType<T> | string, count_type: CountComponentType = CountComponentType.CHILDREN) 
{
    return this.node.countComponent(type, count_type);
}

cc.Component.prototype.getRootNode = function() {
    return this.node.getRootNode();
}

cc.Component.prototype.getPossibleComponent = function<T extends cc.Component>(...types: cc.ClassType<T>[] | string[])
{
    return this.node.getPossibleComponent(types);
}

cc.Component.prototype.getComponentInParents = function<T extends cc.Component>(type: cc.ClassType<T> | string)
{
    return this.node.getComponentInParents(type);
}

cc.Component.prototype.log = function(...params: any[])
{
    if(CC_EDITOR) Editor.log(`[${this.name}] Log: `, ...params, '');
    console.log(`[${this.name}] Log: `, ...params);
}

cc.Component.prototype.findComponent = function<T extends cc.Component>(type: cc.ClassType<T> | string)
{
    return this.getRootNode().getComponentInChildren(type);
}
