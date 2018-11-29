import {HttpClient, HttpParams} from '@angular/common/http';
import {CommonUtil} from '../utiles/common.utiles';
import {injectorRef} from '../utiles/injectorRef';
import {Observable} from 'rxjs';

export abstract class BaseService<T> {
  protected _httpClient: HttpClient;
  protected _baseUrl: string;

  protected set serviceName(serviceName: string) {
    this._serviceName = serviceName;
    this._baseUrl = CommonUtil.getApiUrl(serviceName);
  }

  /**
   * Constructor
   * @param _serviceName Service name to fetch the service url
   */
  constructor(protected _serviceName: string) {
    this._baseUrl = CommonUtil.getApiUrl(_serviceName);
    this._httpClient = injectorRef().get(HttpClient);
  }

  /**
   * Find all the elements
   * @param params optional parameters for the call
   * @returns gets the list of objects found
   */
  public findAll(params?: HttpParams): Observable<T | T[]> {
    return this._httpClient.get<T | T[]>(this._baseUrl, {params});
  }
}
