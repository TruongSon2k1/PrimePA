
var RET = require('../Global')

class pTSConstans 
{
    get aliases_tag(): symbol | string
    {
         return typeof Symbol === 'undefined' ? '__aliases' : Symbol('[[Aliases]]');
    }

    class_name_tag: '__classname__';

    class_id_tag: '__cid__';
}

RET.constant = module.exports = new pTSConstans();


