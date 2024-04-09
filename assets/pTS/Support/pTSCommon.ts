
class Common implements cc.pTS.Common {
    is_boolean(object: any): object is boolean {
        return typeof object === 'boolean' || object instanceof Boolean;
    }
}


cc.pTS.common= new Common();
