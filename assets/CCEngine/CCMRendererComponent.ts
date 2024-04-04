
Object.defineProperty(cc.RenderComponent.prototype, 'materials', {
    set: function(val: cc.Material) {
        this._materials = val;
        this._activateMaterial();
        this._executeOnChange();
    }
})
