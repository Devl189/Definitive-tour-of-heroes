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

  /**
   * Find an object by its identifier
   * @param id Object identifier
   * @returns gets the object found
   */
  public findById(id: any): Observable<T> {
    return this._httpClient.get<T>(`${this._baseUrl}/${id}`);
  }

  /**
   * Create the object
   * @param  obj Object to create
   * @returns Observable<T> Observable of the result
   */
  public create(obj: T | T[]): Observable<T | T[]> {
    return this._httpClient.post<T | T[]>(this._baseUrl, obj);
  }

  /**
   * Update the object
   * @param obj Object to update
   * @param key Key to identify the object
   * @returns Observable<T> Observable of the result
   */
  public update<K extends keyof T>(obj: T, key: K): Observable<T> {
    return this._httpClient.put<T>(`${this._baseUrl}/${obj[key]}`, obj);
  }

  /**
   * Delete a specific object by id
   * @param id Object id
   * @returns Observable<T> Observable of the result
   */
  public remove(id: any): Observable<T> {
    return this._httpClient.delete<T>(`${this._baseUrl}/${id}`);
  }
}
