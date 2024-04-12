
Object.defineProperty(cc.Graphics.prototype, 'lineWidth', {
    set: function(val: number) {
        this._lineWidth = val;
        this._impl.lineWidth = val;
        this._executeOnChange();
    }
})

Object.defineProperty(cc.Graphics.prototype, 'lineJoin', {
    set: function(val: cc.Graphics.LineJoin) {
        this._lineJoin = val;
        this._impl.lineJoin = val;
        this._executeOnChange();
    }
})

Object.defineProperty(cc.Graphics.prototype, 'lineCap', {
    set: function(val: cc.Graphics.LineCap) {
        this._lineJoin = val;
        this._impl.lineJoin = val;
        this._executeOnChange();
    }
})

Object.defineProperty(cc.Graphics.prototype, 'strokeColor', {
    set: function(val: any) {
        this._impl.strokeColor = this._strokeColor = cc.color(val);
        this._executeOnChange();
    }
})

Object.defineProperty(cc.Graphics.prototype, 'fillColor', {
    set: function(val: any) {
        this._impl.fillColor = this._fillColor = cc.color(val);
        this._executeOnChange();
    } 
})

Object.defineProperty(cc.Graphics.prototype, 'miterLimit', {
    set: function(val: number) {
        this._miterLimit = val;
        this._impl.miterLimit = val;
        this._executeOnChange();
    } 
})


