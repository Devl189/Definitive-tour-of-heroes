import {apiUrls} from '../../app-settings-definitions/endpoint.definition';

export class CommonUtil {
  /**
   * Return the url used to call specific api service
   * @param name the name of the api service
   */
  static getApiUrl(name: string) {
    return apiUrls[name] || 'URL_NOT_FOUND';
  }

  /**
   * Determine if a value is empty or not
   * @param val the value to check
   */
  static isEmpty(val: any): boolean {
    if (val === undefined || val == null) {
      return true;
    }
    if (Array.isArray(val)) {
      return ('' + val).trim().length === 0;
    }
    if (typeof val === 'object') {
      return Object.keys(val).length === 0 && val.constructor === Object;
    }
    if (typeof val === 'string') {
      return val.trim().length <= 0;
    }
    if (typeof val === 'number') {
      return val <= 0;
    }
    return ('' + val).trim().length === 0;
  }
}
