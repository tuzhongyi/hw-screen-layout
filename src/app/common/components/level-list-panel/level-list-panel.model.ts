import { IIdNameModel } from '../../network/models/common/model.interface';

export interface ILevelListNode extends IIdNameModel {
  Language?: string;
  ParentId?: string;
}
