export class IsTypedArray {
  private static names = {
    '[object Int8Array]': true
    , '[object Int16Array]': true
    , '[object Int32Array]': true
    , '[object Uint8Array]': true
    , '[object Uint8ClampedArray]': true
    , '[object Uint16Array]': true
    , '[object Uint32Array]': true
    , '[object Float32Array]': true
    , '[object Float64Array]': true
  };

  private static toString = Object.prototype.toString;

  public static Check(arr: any) {
    return (
      this.IsStrictTypedArray(arr)
      || this.IsLooseTypedArray(arr)
    )
  }

  private static IsStrictTypedArray(arr: any) {
    return (
      arr instanceof Int8Array
      || arr instanceof Int16Array
      || arr instanceof Int32Array
      || arr instanceof Uint8Array
      || arr instanceof Uint8ClampedArray
      || arr instanceof Uint16Array
      || arr instanceof Uint32Array
      || arr instanceof Float32Array
      || arr instanceof Float64Array
    )
  }

  private static IsLooseTypedArray(arr: any) {
    return (<any>this.names)[toString.call(arr)]
  }
}