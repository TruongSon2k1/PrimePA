
var RET = require('../Global')

class pTSUtils implements pTS.IUtils
{
    methods_as_string<T>(clasz: cc.ClassType<T>): string[] {
        const prototype = clasz.prototype;
        return Object.getOwnPropertyNames(prototype).filter( p => typeof prototype[p] === 'function')
    }

    shift<T>(array: T[], first: number, second: number, ref?: T[], option?: pTS.IAssertOptions): T[] 
    {
        if(first === second) return array;

        pTS.console.asserts_array_index(array, option, first, second);

        const temp = array[first];

        if(first < second)
        {
            for(let i = first + 1; i <= second; i++) array[i - 1] = array[i];
        }
        else 
        {
            for(let i = first; i !== second; i--) array[i] = array[i-1];
        }

        array[second] = temp;

        if(!!ref) ref = array;
        return array;
    }

    filter_string_without_text(target: string[], text: string[]): string[] 
    {
        const filteredStrings = target.filter(str => !text.some(c => str.includes(c)));
        return filteredStrings;
    }

    filter_string_by_text(text: string, arr: string[]): string[] 
    {
        const filteredStrings = arr.filter(str => text.split('').some(c => str.includes(c)));
        return filteredStrings;
    }

		filter_must_contain<T>(sample: T, arr_target: T[], compasor?: pTS.UtilsCompasor<T>): T[]
    {
        const vamps = arr_target.filter( temp => {
            compasor && compasor(sample, temp);

            return temp === sample;
        })

        return vamps
    }

		find_arr_containing_element<T>(samples: T[], arr_target: T[], compasor: pTS.UtilsCompasor<T> = (input: T, idt: T) => input === idt): T[]
    {
        const rs: T[] = []

        for(const e of arr_target) {
            if(samples.some(s => compasor(s, e))) {
                rs.push(e);
            }
        }

        return rs;
    }

		all_arr_must_contain_element<T>(samples: T[], arr_target: T[], compasor: pTS.UtilsCompasors<T> = (input: T[], idt: T) => input.includes(idt)): boolean
    {
        return samples.every( e => compasor(arr_target, e) )
    }

    is_deep_contain<T, K>(checker: K, target: T[], property: string): boolean {
        if (target.length === 0) return false;
        if (typeof checker !== typeof target[0][property]) return false;

        return target.some(ret => ret[property] === checker);
    }

    clone<T>(target: T, ...binding: any[]): T {
        if (typeof target !== 'object' || target === null) {
            return target;
        }

        let cloner = Object.create(Object.getPrototypeOf(target));
        
        for (let prop in target) {
            if (Object.prototype.hasOwnProperty.call(target, prop)) {
                if (typeof target[prop] === 'object') {
                    cloner[prop] = this.clone(target[prop], ...binding);
                } else {
                    cloner[prop] = target[prop];
                }
            }
        }
        
        return cloner;
    }
}

RET.utils = module.exports = new pTSUtils();
