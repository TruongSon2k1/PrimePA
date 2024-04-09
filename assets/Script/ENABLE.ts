const {ccclass, property,mark_singleton} = cc._decorator;

@mark_singleton
export class LMAO 
{
    logger() {
        console.log(this, this.num) 
        const bool: boolean = false;
        this.test(bool)
    } 

    @property()
    num: number = 0

    test(a: string | boolean)
    {
        if(cc.pTS.common.is_boolean(a)) {
            this.bool(a)
        }

        X.test.test();
    }

    bool(bool: boolean) {
        console.log("IS BOOL")
    }

    str(str: string) {
        console.log("IS STRING")
    }
}

