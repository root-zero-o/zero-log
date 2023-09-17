type LocalStorageType = typeof window.localStorage;

const KEY_PREFIX = "zero-log_";

export class LocalStorage {
  storage: LocalStorageType;

  constructor(getStorage = (): LocalStorageType => window.localStorage) {
    this.storage = getStorage();
  }

  private getOriginKey(key: string) {
    return `${KEY_PREFIX}${key}`;
  }

  get(key: string): string | null {
    return this.storage.getItem(this.getOriginKey(key));
  }

  set(key: string, value: string): void {
    this.storage.setItem(this.getOriginKey(key), value);
  }

  clear(key: string): void {
    this.storage.removeItem(this.getOriginKey(key));
  }
}
