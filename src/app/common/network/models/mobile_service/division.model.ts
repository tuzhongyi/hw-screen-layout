import { Transform } from 'class-transformer';
import { IIdNameModel } from '../common/model.interface';
import { transformDateTime } from '../common/transform.model';

/**	Division (区划)	*/
export class Division implements IIdNameModel {
  /**	String	区划ID	M	*/
  Id!: string;
  /**	String	区划名称	M	*/
  Name!: string;
  /**	String	父区划ID，如果是根区域节点，则该ID为空	O	*/
  ParentId?: string;
  /**	Boolean	是否为叶节点的区域	M	*/
  IsLeaf!: boolean;
  /**	String	外部扩展ID，用于国标区划编码	O	*/
  ExternalId?: string;
  /**	String	区划完整路径，含本节点，@进行分割，上级节点在前	O	*/
  DivisionPath?: string;
  /**	String	描述信息	O	*/
  Description?: string;
  /**	Int32	人口	O	*/
  Population?: number;
  /**	Int32	区划类型，用于图标区分	M	*/
  DivisionType!: number;
  /**	DateTime	创建时间	M	*/
  @Transform(transformDateTime)
  CreateTime!: Date;
  /**	DateTime	更新事件	M	*/
  @Transform(transformDateTime)
  UpdateTime!: Date;
}
