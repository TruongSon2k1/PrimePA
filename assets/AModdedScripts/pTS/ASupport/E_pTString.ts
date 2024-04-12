
var RET = require('../Global')

class pTString implements pTS.IString
{
    uuid(prefix: string = '', suffix: string = ''): string {
        return prefix + pTS.numeric.uuid_num() + suffix;
    }

    readble_time(): string {
        const time_stamp = Date.now();

        const date = new Date(time_stamp);

        const year = date.getFullYear();
        const month = ("0" + date.getMonth() + 1).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        const seconds = ("0" + date.getSeconds()).slice(-2);
        const mm = ("0" + date.getMilliseconds()).slice(-2);

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}:${mm}`;
    }

    smart_number(num: number): string {
        return num.toLocaleString('en-US').replace(/,/g,'.')
    }

}

RET.string = module.exports = new pTString();

