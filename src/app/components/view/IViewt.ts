import { Observable } from 'rxjs';

export declare interface IView<T> {
  save(Entity: T, route: string): void;
  update(Entity: T, route: string): void;
  delete(id: number): void;
  getById(id: number): Observable<T>;
}
