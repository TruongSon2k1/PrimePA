
var Z = require('../XGlobal')

class XTest implements X.XTest{
    test(): void {
        console.log("TEST PASSED")
    }
}

Z.test = module.exports = new XTest();
