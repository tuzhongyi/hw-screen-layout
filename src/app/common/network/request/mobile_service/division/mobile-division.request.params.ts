import { PagedParams } from '../../../models/common/params.interface';

export class GetDivisionsParams extends PagedParams {
  /**	String[]	区划ID	O	*/
  Ids?: string[];
  /**	String	区划名称，支持LIKE	O	*/
  Name?: string;
  /**	Int32	区划类型	O	*/
  DivisionType?: number;
  /**	String	父ID	O	*/
  ParentId?: string;
  /**	String	区划完整路径，含本节点，@进行分割，上级节点在前，支持LIKE	O	*/
  DivisionPath?: string;
  /**	String	祖辈ID，返回该ID下的所有子孙区划信息	O	*/
  AncestorId?: string;
}
