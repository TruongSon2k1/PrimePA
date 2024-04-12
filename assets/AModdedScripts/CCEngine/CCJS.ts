

cc.js.isBoolean = function (obj: any): obj is boolean {
    return typeof obj === 'boolean' || obj instanceof Boolean;
}

cc.js.isObject = function (obj: any): obj is object {
    return obj instanceof Object || typeof obj === 'object'
}

cc.js.getTemplateType = function<T>(ctor: cc.ConstructorType<T>) {
    return typeof (new ctor());
}
