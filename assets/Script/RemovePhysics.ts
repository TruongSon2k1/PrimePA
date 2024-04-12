// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class RemovePhysics extends cc.Component {

    protected start(): void {
        console.log("START: ", this.node.getComponents(cc.PhysicsBoxCollider).length)
        for(const ret of this.node.getComponents(cc.PhysicsBoxCollider)) {
            ret.destroy()
        }

        console.log("AFTER: ", this.node.getComponents(cc.PhysicsBoxCollider).length)
    }
}
