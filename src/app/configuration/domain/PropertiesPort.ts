import { Observable } from 'rxjs';
import { Properties } from './Properties';

export interface PropertiesPort {
  get(): Observable<Properties>;
}
