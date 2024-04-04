const {ccclass, property} = cc._decorator;

@ccclass
export default class MOVING extends cc.Component {

    @property()
    fps: number = 60

    protected onLoad(): void {
        cc.game.setFrameRate(this.fps)
    }

}
