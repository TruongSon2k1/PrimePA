const {ccclass, executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
export default class ColliderContact extends cc.Component {
    protected onLoad(): void {
        const colliders = this.getComponents(cc.Collider)
        if(CC_EDITOR) {
            if (colliders.length <= 1 && colliders[0] instanceof cc.PhysicsChainCollider) this.destroy();
            else if (colliders.every(e => e instanceof cc.PhysicsChainCollider)) this.destroy();
        }

    }

    protected onCollisionEnter(other: cc.Collider, self: cc.Collider)
    {
        this._enter_collision && this._enter_collision(other, self)
    }

    protected _enter_collision: (other: cc.Collider, self: cc.Collider) => void = null;
    protected _stay_collision: (other: cc.Collider, self: cc.Collider) => void = null;
    protected _exit_collision: (other: cc.Collider, self: cc.Collider) => void = null;

    set_enter_collision( target: (other: cc.Collider, self: cc.Collider) => void ) {
        this._enter_collision = target;
    }

    set_stay_collision( target: (other: cc.Collider, self: cc.Collider) => void)
    {
        this._stay_collision = target
    }

    set_exit_collision( target: (other: cc.Collider, self: cc.Collider) => void)
    {
        this._exit_collision = target
    }

}
