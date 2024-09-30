import { Transform } from 'class-transformer';
import { IModel } from '../common/model.interface';
import { transformDateTime } from '../common/transform.model';
import { GisPoint } from './gis-point.model';
import { Resolution } from './resolution.model';

/**	Screen (智能屏幕)	*/
export class Screen implements IModel {
  /**	String	屏幕唯一ID	M	*/
  Id!: string;
  /**	String	屏幕名称	M	*/
  Name!: string;
  /**	String	设备类型	M	*/
  DeviceType!: string;
  /**	String	设备型号	M	*/
  Model!: string;
  /**	String	设备序列号	M	*/
  SerialNumber!: string;
  /**	String	设备接入ID	M	*/
  AppId!: string;
  /**	String	设备接入密钥	M	*/
  AppSecret!: string;
  /**	String	接入Token	O	*/
  Token?: string;
  /**	DateTime	接入Token过期时间	O	*/
  @Transform(transformDateTime)
  TokenExpiredTime?: Date;
  /**	String	地址，带门牌号，楼层等	O	*/
  Address?: string;
  /**	String	楼层名称	O	*/
  Floor?: string;
  /**	Int32	楼层号	O	*/
  FloorNo?: number;
  /**	Resolution	分辨率	M	*/
  Resolution!: Resolution;
  /**	Int32	旋转角度，默认0度	M	*/
  Rotation!: number;
  /**	String	音频输出设备	O	*/
  AudioDevice?: string;
  /**	String	所属街道、镇ID	M	*/
  StreetId!: string;
  /**	String	街道名称	O	*/
  StreetName?: string;
  /**	String	社区、门店ID	O	*/
  CommunityId?: string;
  /**	String	社区、门店名称	O	*/
  CommunityName?: string;
  /**	String	描述信息	O	*/
  Description?: string;
  /**	String	联系人名称	O	*/
  ContractName?: string;
  /**	String	联系人电话	O	*/
  ContractPhone?: string;
  /**	Int64	设备能力	O	*/
  Capabilities?: number;
  /**
   * String
   * 操作系统类型和版本
   * AndroidTV14
   * Android14
   * O
   **/
  OSVersion?: string;
  /**	String	屏幕品牌	O	*/
  ScreenVendor?: string;
  /**	Int32	状态
0：正常，1：离线	O	*/
  State?: number;
  /**	DateTime	最后在线时间	O	*/
  @Transform(transformDateTime)
  LastOnlineTime?: Date;
  /**	DateTime	创建时间	M	*/
  @Transform(transformDateTime) CreateTime!: Date;
  /**	DateTime	更新事件	M	*/
  @Transform(transformDateTime) UpdateTime!: Date;
  /**	GisPoint	GIS点位	O	*/
  GisPoint?: GisPoint;
  /**	String	自定义字段1	O	*/
  CustomField1?: string;
  /**	String	自定义字段2	O	*/
  CustomField2?: string;
  /**	String	自定义字段3	O	*/
  CustomField3?: string;
  /**	String	自定义字段4	O	*/
  CustomField4?: string;
  /**	String	自定义字段5	O	*/
  CustomField5?: string;
  /**	String	自定义字段6	O	*/
  CustomField6?: string;
  /**	String	对应布局ID，如果没有布局ID默认显示全屏，默认背景图片	O */
  LayoutId?: string;

  static Create() {
    let screen = new Screen();
    screen.Resolution = new Resolution();
    screen.GisPoint = new GisPoint();
    return screen;
  }
}
