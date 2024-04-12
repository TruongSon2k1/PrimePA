import ColliderContact from "./ColliderContact";

const {ccclass, property, mark_singleton} = cc._decorator;

@ccclass
@mark_singleton
export default class Jumper extends cc.Component {
    @property(ColliderContact)
    ground: ColliderContact = null

    @property(cc.Label)
    lab_force: cc.Label = null;

    @property()
    jump_force: cc.Vec2 = cc.v2(0, 30000)
    @property()
    jump_force_max: number = 50000;

    @property(cc.RigidBody)
    rb: cc.RigidBody = null

    protected onEnable(): void {
        this.rb = this.getNonNullComponent(cc.RigidBody)
        this.ground.set_enter_collision(this.ground_enter_collision.bind(this))
    }

    private _is_ground: boolean = false 
    private _stand_by_force_y: number = 0;
    @property()
    stand_by_force_y_var: number = 500;

    hold_force_y()
    {
        this._stand_by_force_y += this.stand_by_force_y_var;
        if(this._stand_by_force_y >= this.jump_force_max && this.stand_by_force_y_var > 0) {
            this.stand_by_force_y_var *= -1;
            return;
        }
        if(this._stand_by_force_y <= this.jump_force.y && this.stand_by_force_y_var < 0) {
            this.stand_by_force_y_var *= -1;
            return;
        }
    }

    jump()
    {
        console.log(cc.director.getScene().countComponent(Jumper, cc.CountComponentType.BOTH))
        console.log("DO JUNP", this._is_ground)
        if(this._is_ground) {
            this._is_ground = false;
            this.rb.applyForceToCenter(cc.v2(0, this._stand_by_force_y), true)
            this.reset_jump()
        }
    }

    reset_jump()
    {
        this._stand_by_force_y = this.jump_force.y
        this.stand_by_force_y_var = Math.abs(this.stand_by_force_y_var);
    }

    ground_enter_collision(target: cc.Collider, self: cc.Collider)
    {
        if(target.node.group === 'ground') {
            this._is_ground = true
        }
    }


    protected update(dt: number): void {
        this.lab_force.string = 'FORCE: ' + this._stand_by_force_y;
    }

    protected onLoad(): void {
        console.log(this.jump_force.toString())
        this.reset_jump()
    }
    
}
