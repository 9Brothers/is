export class IsPrimitive {
  
  public static Check(value: any) {
    return value == null || (typeof value !== 'function' && typeof value !== 'object');
  }
}