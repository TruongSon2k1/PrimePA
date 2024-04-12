window['__pts_moded_mode__']

//@ts-ignore
cc.PhysicsManager.prototype.update = window['__pts_moded_mode__'] == undefined ?
    function (dt: number) {
        var world = this._world;
        if (!world || !this.enabled) return;

        this.emit('before-step');

        this._steping = true;

        var velocityIterations = cc.PhysicsManager.VELOCITY_ITERATIONS;
        var positionIterations = cc.PhysicsManager.POSITION_ITERATIONS;

        if (this.enabledAccumulator) {
            this._accumulator += dt;

            var FIXED_TIME_STEP = cc.PhysicsManager.FIXED_TIME_STEP;
            var MAX_ACCUMULATOR = cc.PhysicsManager.MAX_ACCUMULATOR;

            // max accumulator time to avoid spiral of death
            if (this._accumulator > MAX_ACCUMULATOR) {
                this._accumulator = MAX_ACCUMULATOR;
            }

            while (this._accumulator > FIXED_TIME_STEP) {
                world.Step(FIXED_TIME_STEP, velocityIterations, positionIterations);
                this._accumulator -= FIXED_TIME_STEP;
            }
        }
        else {
            var timeStep = dt;
            world.Step(timeStep, velocityIterations, positionIterations);
        }

        if (this.debugDrawFlags) {
            this._checkDebugDrawValid();
            this._debugDrawer.clear();
            world.DrawDebugData();
        }

        this._steping = false;

        var events = this._delayEvents;
        for (var i = 0, l = events.length; i < l; i++) {
            var event = events[i];
            event.target[event.func].apply(event.target, event.args);
        }
        events.length = 0;

        this._syncNode();
    }
    :
    function (dt: number) {
        var world = this._world;
        if (!world || !this.enabled) return;

        this.emit('before-step');

        this._steping = true;

        var velocityIterations = cc.PhysicsManager.VELOCITY_ITERATIONS;
        var positionIterations = cc.PhysicsManager.POSITION_ITERATIONS;

        if (this.enabledAccumulator) {
            this._accumulator += dt;

            var FIXED_TIME_STEP = cc.PhysicsManager.FIXED_TIME_STEP;
            var MAX_ACCUMULATOR = cc.PhysicsManager.MAX_ACCUMULATOR;

            // max accumulator time to avoid spiral of death
            if (this._accumulator > MAX_ACCUMULATOR) {
                this._accumulator = MAX_ACCUMULATOR;
            }

            while (this._accumulator > FIXED_TIME_STEP) {
                world.Step(FIXED_TIME_STEP, velocityIterations, positionIterations);
                this._accumulator -= FIXED_TIME_STEP;
            }
        }
        else {
            var timeStep = dt;
            world.Step(timeStep, velocityIterations, positionIterations);
        }

        if (this.debugDrawFlags) {
            this._checkDebugDrawValid();
            this._debugDrawer.clear();
            world.DrawDebugData();
        }

        this._steping = false;

        var events = this._delayEvents;
        for (var i = 0, l = events.length; i < l; i++) {
            var event = events[i];
            event.target[event.func].apply(event.target, event.args);
        }
        events.length = 0;

        this._syncNode();
    }
