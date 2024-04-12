
function mark_singleton<T extends cc.ConstructorType>(constructor: T) {
    const originalOnLoad = constructor.prototype.onLoad;

    constructor.prototype.onLoad = function() {
        if (originalOnLoad) originalOnLoad.apply(this);

        (constructor as any).__pts_instance__ = this;
    };

    (constructor as any).__get_pts_instance__ = function() {
        if (!(constructor as any).__pts_instance__) {
            if (this.prototype instanceof cc.Component) {
                (constructor as any).__pts_instance__ = cc.director.getScene().findComponent(constructor);
            } else {
                //@ts-ignore
                (constructor as any).__pts_instance__ = new constructor();
            }
        }
        return (constructor as any).__pts_instance__;
    };

    return constructor;
}

export function readonly(target: any, key: string, descriptor: PropertyDescriptor)
{
    descriptor.writable = false;
    return descriptor;
}

export function force_override(target: any, key: string, descriptor: PropertyDescriptor)
{
    descriptor.value = function ()
    {
        console.error(`The "${key}" method of ${target} must be overridden!!`);
        debugger;
    }

    return descriptor;
}

cc._decorator = module.exports = {
    ...cc._decorator,
    force_override,
    readonly, 
    mark_singleton
}
