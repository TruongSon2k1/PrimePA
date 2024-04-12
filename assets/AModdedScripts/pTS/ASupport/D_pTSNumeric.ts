
var RET = require('../Global')

class pTSNumeric implements pTS.INumeric
{
    get TINY() { return 1.0e-10 }
    get MAXI() { return 1.7976931348623157e+308 }

    to_number(target: string | boolean): number {
        if(cc.js.isBoolean(target)) return target ? 1 : 0;
        if(cc.js.isString(target)) return parseFloat(target);
    }

    random_int(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    random(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    uuid_num(): number 
    {
        const time_stamp = Date.now();

        const date = new Date(time_stamp);

        const year = date.getFullYear();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const mm = date.getMilliseconds();

        const ran = this.random_int(seconds + mm, year * 5017 + minutes * 5017);
        return ran
           + year * 1000
           + minutes * 10000000
           + seconds * 1000000000
           + mm * 100000000000
    }

    float_rounding(num: number, rounding_num: number = 2): string 
    {
        return parseFloat(num.toFixed(rounding_num).replace(/\.?0+$/, ""))+ " / ";
    }

}

RET.numeric = module.exports = new pTSNumeric();

