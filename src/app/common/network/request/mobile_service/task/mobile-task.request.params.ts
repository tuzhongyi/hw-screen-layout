import { PagedParams } from '../../../models/common/params.interface';

export class GetTasksParams extends PagedParams {
  /**	String[]	任务ID	O	*/
  Ids?: string[];
  /**	Int32	任务类型：1：屏幕布局下发	O	*/
  TaskType?: number;
  /**	String	设备ID，此处是屏幕ID	O	*/
  DeviceId?: string;
  /**	String	设备类型：Screen	O	*/
  DeviceType?: string;
  /**	Int32	任务状态1：下发中2：下发失败3：下发成功4：任务故障5：设备离线6：挂起	O	*/
  State?: number;
}
