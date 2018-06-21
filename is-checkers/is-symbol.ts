export class IsSymbol {
  private static toStr = Object.prototype.toString;
  private static hasSymbols = typeof Symbol === 'function' && typeof (<any>Symbol)() === 'symbol';
  private static symToStr = (<any>Symbol).prototype.toString;
  private static symStringRegex = /^Symbol\(.*\)$/;

  public static Check(value: any) {
    if (this.hasSymbols) {
      if (typeof value === 'symbol') { return true; }
      if (this.toStr.call(value) !== '[object Symbol]') { return false; }
      try {
        return this.IsSymbolObject(value);
      } catch (e) {
        return false;
      }
    } else {
      // this environment does not support Symbols.
      return false;
    }
  }

  private static IsSymbolObject(value: any) {
    if (typeof value.valueOf() !== 'symbol') { return false; }
    return this.symStringRegex.test(this.symToStr.call(value));
  }
}