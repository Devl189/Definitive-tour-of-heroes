import {apiUrls} from '../../app-settings-definitions/endpoint.definition';

export class CommonUtil {
  /**
   * Return the url used to call specific api service
   * @param name the name of the api service
   */
  static getApiUrl(name: string) {
    return apiUrls[name] || 'URL_NOT_FOUND';
  }
}
