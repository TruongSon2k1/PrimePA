const {ccclass, property} = cc._decorator;

@ccclass
export default class ENABLE extends cc.Component {

    protected onLoad(): void {
        cc.director.getPhysicsManager().enabled = true;
        console.log(this.countComponent(cc.Collider, cc.CountComponentType.CHILDREN))
    }


}
