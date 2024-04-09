
function mark_singleton<T extends cc.ConstructorType>(constructor: T) {
    return class extends constructor {
        private static __pts_instance__: T | null = null;

        static __get_pts_instance__(...args: any[]) {
            if (!this['__pts_instance__']) {
                //@ts-ignore
                this['__pts_instance__'] = new constructor(...args);
            }
            return this['__pts_instance__'];
        }
    }
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
