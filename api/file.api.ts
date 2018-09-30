import { Observable } from 'rxjs';

export abstract class FileApi {
  abstract getAllConfigFiles(): Observable<IdeFile[]>;
}

export interface IdeFile {
  name: string;
  content: string;
  extension: string;
}
