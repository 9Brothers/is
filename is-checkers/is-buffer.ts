/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
export class IsBuffer {
  public static Check(obj: any): boolean {
    return obj != null && (this.IsBuffer(obj) || this.IsSlowBuffer(obj) || !!obj._isBuffer)
  }

  private static IsBuffer (obj: any) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
  }

  // For Node v0.10 support. Remove this eventually.
  private static IsSlowBuffer (obj: any) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && this.IsBuffer(obj.slice(0, 0))
  }
}