

//@ts-ignore
cc.Component.prototype.onChange = null;

//@ts-ignore
cc.Component.prototype._executeOnChange = function() {
    this.onChange && this.onChange();
}

//@ts-ignore
cc.Component.prototype.getNonNullComponent = function<T extends cc.Component>(type: {prototype: T} | string)
{
    return this.node.getNonNullComponent(type);
}

//@ts-ignore
cc.Component.prototype.countComponent = function<T extends cc.Component>(type: {prototype: T} | string, count_type: CountComponentType = CountComponentType.CHILDREN)
{
    return this.node.countComponent(type, count_type);
}

//@ts-ignore
cc.Component.prototype.getRootNode = function() {
    return this.node.getRootNode();
}

//@ts-ignore
cc.Component.prototype.getPossibleComponent = function<T extends cc.Component>(...types: { prototype: T }[] | string[])
{
    return this.node.getPossibleComponent(types);
}

//@ts-ignore
cc.Component.prototype.getComponentInParents = function<T extends cc.Component>(type: { prototype: T } | string)
{
    return this.node.getComponentInParents(type);
}

//@ts-ignore
cc.Component.prototype.log = function(...params: any[])
{
    this.node.log(params);
}

//@ts-ignore
cc.Component.prototype.findComponent = function<T extends cc.Component>(type: {prototype: T} | string)
{
    return this.getRootNode().getComponentInChildren(type);
}
