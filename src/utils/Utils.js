import {v4 as uuid} from 'uuid';

export default class Utils {
  static generateUUID() {
    return uuid();
  }

  static sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  static secondstoHHMMSS(seconds) {
    const date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  }

  static removeExtraEmptyLines(tab) {
    // Start from the end
    for (let i = tab.length - 1; i > 0; i--) {
      // Two consecutive empty lines?
      if (tab[i].length === 0 && tab[i - 1].length === 0) {
        // Remove the last one
        tab.splice(i, 1);
      }
      // Check last line
      if (i === 1 && tab[i - 1].length === 0) {
        // Remove the first one
        tab.splice(i - 1, 1);
      }
    }
  }

  static convertToDate(date) {
    // Check
    if (!date) {
      return date;
    }
    // Check Type
    if (!(date instanceof Date)) {
      return new Date(date);
    }
    return date;
  }

  static convertToObjectID(id) {
    let changedID = id;
    // Check
    if (typeof id === 'string') {
      // Create Object
      // eslint-disable-next-line no-undef
      changedID = new ObjectID(id);
    }
    return changedID;
  }

  static convertToInt(value) {
    let changedValue = value;
    if (!value) {
      return 0;
    }
    if (Number.isSafeInteger(value)) {
      return value;
    }
    // Check
    if (typeof value === 'string') {
      // Create Object
      changedValue = parseInt(value);
    }
    return changedValue;
  }

  static convertToFloat(value) {
    let changedValue = value;
    if (!value) {
      return 0;
    }
    // Check
    if (typeof value === 'string') {
      // Create Object
      changedValue = parseFloat(value);
    }
    return changedValue;
  }

  static convertToBoolean(value) {
    let result = false;
    // Check boolean
    if (value) {
      // Check the type
      if (typeof value === 'boolean') {
        // Already a boolean
        result = value;
      } else {
        // Convert
        result = (value === 'true');
      }
    }
    return result;
  }

  static getRandomFloat(max, min = 0) {
    return Math.random() < 0.5 ? (1 - Math.random()) * (max - min) + min : Math.random() * (max - min) + min;
  }

  static getRandomInt(max, min = 0) {
    if (min) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return Math.floor(Math.random() * max + 1);
  }

  static roundTo(number, scale) {
    return Utils.convertToFloat(number.toFixed(scale));
  }

  static getRandomFloatRounded(max, min = 0, scale = 2) {
    if (min) {
      return Utils.roundTo(Utils.getRandomFloat(max, min), scale);
    }
    return Utils.roundTo(Utils.getRandomFloat(max), scale);
  }

  static logPrefix(prefixString = '') {
    const date = new Date();
    return date.toLocaleString() + prefixString;
  }

  static objectHasOwnProperty(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }

  static cloneObject(object) {
    return JSON.parse(JSON.stringify(object));
  }

  static isIterable(obj) {
    if (obj) {
      return typeof obj[Symbol.iterator] === 'function';
    }
    return false;
  }

  static isEmptyJSon(document) {
    // Empty?
    if (!document) {
      return true;
    }
    // Check type
    if (typeof document !== 'object') {
      return true;
    }
    // Check
    return Object.keys(document).length === 0;
  }

  static isString(value) {
    return typeof value === 'string';
  }

  static isUndefined(value) {
    return typeof value === 'undefined';
  }

  static isNullOrUndefined(value) {
    // eslint-disable-next-line eqeqeq
    if (value == null) {
      return true;
    }
    return false;
  }

  static isEmptyArray(object) {
    if (Array.isArray(object) && object.length > 0) {
      return false;
    }
    return true;
  }

  static isEmptyObject(obj) {
    return !Object.keys(obj).length;
  }
}
