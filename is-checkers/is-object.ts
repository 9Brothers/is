/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

export class IsObject {
  
  public static Check(val: any) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
  }
}