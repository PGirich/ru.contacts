import {IContact} from './IContact';

export interface IGroup {
  id: string;
  /** Название */
  name: string,
  /** Описание группы */
  description: string,
  /** Фото */
  photo: string,
  /** Состав группы */
  contactIds: IContact['id'][]
}
