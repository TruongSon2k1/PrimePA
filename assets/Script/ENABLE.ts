const {ccclass, property} = cc._decorator;

@ccclass
export default class ENABLE extends cc.Component {

    protected onLoad(): void {
        cc.director.getPhysicsManager().enabled = true;

        console.log((cc.PhysicsManager), )

        const tw = cc.tween(this.node)
        console.log(tw.getTarget())
    }

}
