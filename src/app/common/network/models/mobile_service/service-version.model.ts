import { Transform } from 'class-transformer';
import { IModel } from '../common/model.interface';
import { transformDateTime } from '../common/transform.model';

/**	ServiceVersion(服务版本信息)	*/
export class ServiceVersion implements IModel {
  /**	String	版本号 1.0.1	M	*/
  Version!: string;
  /**	DateTime	编译时间	M	*/
  @Transform(transformDateTime)
  BuildDate!: Date;
  /**	String	公司名	M	*/
  Company!: string;
}
