import { Transform } from 'class-transformer';
import { IModel } from '../common/model.interface';
import { transformDateTime } from '../common/transform.model';

/**	DeviceTask (设备任务)	*/
export class DeviceTask implements IModel {
  /**	String	任务ID	M	*/
  TaskId!: string;
  /**	String	任务名称	O	*/
  TaskName?: string;
  /**	Int32	任务类型：1：屏幕布局下发	M	*/
  TaskType!: number;
  /**	String	设备ID，此处是屏幕ID	M	*/
  DeviceId!: string;
  /**	String	设备类型：Screen	O	*/
  DeviceType?: string;
  /**
   * Int32
   * 任务状态
   * 1：下发中
   * 2：下发失败
   * 3：下发成功
   * 4：任务故障
   * 5：设备离线
   * 6：挂起
   * O
   **/
  State?: number;
  /**	DateTime	创建时间	M	*/
  @Transform(transformDateTime)
  CreationTime!: Date;
  /**	DateTime	最好更新时间	M	*/
  @Transform(transformDateTime)
  UpdateTime!: Date;
}
