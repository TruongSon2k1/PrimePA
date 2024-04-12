
var RET = require('../Global')

class pTSConsole implements pTS.IConsole
{

    assert_is_true(cond: unknown, option: pTS.IAssertOptions = pTS.default_assert_option): asserts cond 
    {
        if(!cond)
        {
            const msg = `Assertion failed: ${option.message ?? '[no-message]'}`;
            switch(option.mode)
            {
                case "crash":
                    throw new Error(msg);
                case "break":
                    console.warn(msg);
                    debugger;        
                    return;
                case "warn":
                    console.warn(msg);
                    return;
            }
        }
    }

    assert_null<T>(cond: T, option: pTS.IAssertOptions = pTS.default_assert_option): asserts cond is NonNullable<T> 
    {
        this.assert_is_true(!(cond === null || cond === undefined), option);
    }

    asserts_null(option: pTS.IAssertOptions, ...cond: any[]): void {
        for(const ret of cond) this.assert_null(ret, option);
    }

    assert_array_index<T>(array: T[], index: number, option: pTS.IAssertOptions = pTS.default_assert_option): void 
    {
        this.assert_is_true(index >= 0 && index < array.length, { mode: option.mode, message: `The array's index at ${index} is out of range: [0 - ${array.length}]`});
    }

    asserts_array_index(array: any[], option: pTS.IAssertOptions, ...index: number[]): void 
    {
        for(const ret of index) this.assert_array_index(array, ret, option);
    }

}

RET.console = module.exports = new pTSConsole();
