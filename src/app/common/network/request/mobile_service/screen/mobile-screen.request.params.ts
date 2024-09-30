import { PagedParams } from '../../../models/common/params.interface';

export class GetScreensParams extends PagedParams {
  /**	String[]	设备ID	O	*/
  Ids?: string[];
  /**	String	设备名称，支持LIKE	O	*/
  Name?: string;
  /**	String[]	区划ID	O	*/
  DivisionIds?: string[];
  /**	String[]	社区ID	O	*/
  CommunityIds?: string[];
}
