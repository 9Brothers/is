import { IsAbsosuteUrl } from "./is-checkers/is-absolute-url";
import { IsDateObject } from "./is-checkers/is-date-object";
import { IsAccessorDescriptor } from "./is-checkers/is-accessor-descriptor";
import { IsArrayish } from "./is-checkers/is-arrayish";
import { IsCallable } from "./is-checkers/is-callable";
import { IsDataDescriptor } from "./is-checkers/is-data-descriptor";
import { IsDescriptor } from "./is-checkers/is-descriptor";
import { IsDotFile } from "./is-checkers/is-dotfile";
import { IsEqualShallow } from "./is-checkers/is-equal-shallow";
import { IsExtendable } from "./is-checkers/is-extendable";
import { IsExtGlob } from "./is-checkers/is-extglob";
import { NumberIsNaN } from "./dependencies/number-is-nan";
import { IsFinite } from "./is-checkers/is-finite";
import { IsFullwidthCodePoint } from "./is-checkers/is-fullwidth-code-point";
import { IsGlob } from "./is-checkers/is-glob";
import { IsNumber } from "./is-checkers/is-number";
import { IsOdd } from "./is-checkers/is-odd";
import { IsPlainObj } from "./is-checkers/is-plain-obj";
import { IsPlainObject } from "./is-checkers/is-plain-object";
import { IsPosixBracket } from "./is-checkers/is-posix-bracket";
import { IsPrimitive } from "./is-checkers/is-primitive";
import { IsProperty } from "./is-checkers/is-property";
import { IsStream } from "./is-checkers/is-stream";
import { IsSymbol } from "./is-checkers/is-symbol";
import { IsTypedArray } from "./is-checkers/is-typedarray";
import { IsUtf8 } from "./is-checkers/is-utf8";

export class Is {
  public static AbsoluteUrl(url: string): boolean {

    return IsAbsosuteUrl.Check(url);
  }
  
  public static Date(value: any): boolean {
    
    return IsDateObject.Check(value);
  }

  public static AccessorDescriptor(obj: any, prop: any, key?: any): boolean {

    return IsAccessorDescriptor.Check(obj, prop, key);
  }

  public static Arrayish(obj: any): boolean {

    return IsArrayish.Check(obj);
  }

  public static Callable(value: any): boolean {

    return IsCallable.Check(value);
  }

  public static DataDescriptor(obj: any, prop: any): boolean {

    return IsDataDescriptor.Check(obj, prop);
  }

  public static Descriptor(obj: any, key: any): boolean {

    return IsDescriptor.Check(obj, key);
  }

  public static Dotfile(str: any): boolean {

    return IsDotFile.Check(str);
  }

  public static EqualShallow(a: any, b: any): boolean {
    
    return IsEqualShallow.Check(a, b);
  }

  public static Extendable(val: any): boolean {
    
    return IsExtendable.Check(val);
  }

  public static Extglob(str: string): boolean {

    return IsExtGlob.Check(str);
  }

  public static Finite(val: any): boolean {

    return IsFinite.Check(val);
  }

  public static FullwidthCodePoint(x: any): boolean {

    return IsFullwidthCodePoint.Check(x);
  }

  public static Glob(str: string, options: any): boolean {

    return IsGlob.Check(str, options)
  }

  public static Number(num: any): boolean {

    return IsNumber.Check(num);
  }
  
  public static Odd(num: any): boolean {

    return IsOdd.Check(num);
  }

  public static NaN(x: any): boolean {

    return NumberIsNaN.Check(x);
  }

  public static PlainObj(x: any): boolean {

    return IsPlainObj.Check(x);
  }

  public static PlainObject(o: any): boolean {

    return IsPlainObject.Check(o);
  }

  public static PosixBracket(str: string): boolean {

    return IsPosixBracket.Check(str);
  }

  public static Primitive(value: any): boolean {

    return IsPrimitive.Check(value);
  }

  public static Property(str: string): boolean {

    return IsProperty.Check(str);
  }

  public static Stream(stream: any): boolean {

    return IsStream.Check(stream);
  }

  public static StreamWritable(stream: any): boolean {

    return IsStream.Writable(stream);
  }

  public static StreamReadable(stream: any): boolean {

    return IsStream.Readable(stream);
  }

  public static StreamDuplex(stream: any): boolean {

    return IsStream.Duplex(stream);
  }

  public static StreamTransform(stream: any): boolean {

    return IsStream.Transform(stream);
  }

  public static Symbol(value: any): boolean {

    return IsSymbol.Check(value)
  }

  public static TypedArray(arr: any): boolean {

    return IsTypedArray.Check(arr);
  }

  public static Utf8(bytes: any): boolean {

    return IsUtf8.Check(bytes);
  }
}