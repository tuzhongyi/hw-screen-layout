import { IModel } from '../common/model.interface';

/**	Resolution (分辨率)	*/
export class Resolution implements IModel {
  /**	Int32	宽度，单位像素	M	*/
  Width!: number;
  /**	Int32	高度，单位像素	M	*/
  Height!: number;
}
