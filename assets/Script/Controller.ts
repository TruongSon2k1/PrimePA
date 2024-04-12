import Jumper from "./JUMPER";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Controller extends cc.Component {
    protected onEnable(): void {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this) 
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this) 
    }

    protected onDisable(): void {
        
    }

    protected onLoad(): void {
    }

    onKeyUp(event: any)
    {
        switch(event.keyCode) {
            case cc.macro.KEY.space:
                console.log("JUMP")
                cc.instance(Jumper).jump();
            break;
            }
    }

    onKeyDown(event: any)
    {
        switch(event.keyCode) {
            case cc.macro.KEY.space:
            
                cc.instance(Jumper).hold_force_y();
            break;

        }
    }
}
