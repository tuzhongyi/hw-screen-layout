import { IIdNameModel } from '../common/model.interface';

/**	Community (社区)	*/
export class Community implements IIdNameModel {
  /**	String	社区ID	M	*/
  Id!: string;
  /**	String	社区名称	M	*/
  Name!: string;
  /**	String	社区地址	M	*/
  Address!: string;
  /**	String	描述信息	O	*/
  Description?: string;
  /**	String	所属街道、镇ID	M	*/
  StreetId!: string;
  /**	String	街道名称	O	*/
  StreetName?: string;
}
