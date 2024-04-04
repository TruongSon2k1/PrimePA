

//@ts-ignore
cc.Component.prototype.onChange = null;

//@ts-ignore
cc.Component.prototype._executeOnChange = function() {
    this.onChange && this.onChange();
}

