
export class ObjectHelper {
  static UpdateObjectWithPartialValues = <T>(base: T, update: Partial<T>): T => {
    const initial: T = Object.assign({}, base);
    const updates: Partial<T> = Object.assign({}, update);
    const final: T = {} as T;

    Object.keys(initial as object).forEach((key) => {
      if (updates.hasOwnProperty(key)) {
        if (updates[key as keyof Partial<T>] instanceof Object && !Array.isArray(updates[key as keyof Partial<T>])) {
          final[key as keyof T] = ObjectHelper.UpdateObjectWithPartialValues(initial[key as keyof T], updates[key as keyof Partial<T>] as Partial<T[keyof T]>);
        } else {
          final[key as keyof T] = updates[key as keyof Partial<T>] as T[keyof T];
        }
      } else {
        final[key as keyof T] = initial[key as keyof T];
      }
    });

    return final;
  }
}

export default ObjectHelper;
