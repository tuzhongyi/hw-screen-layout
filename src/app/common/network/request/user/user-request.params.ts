import { UserLabelType } from 'src/app/common/enums/user/user-label-type.enum';
import { Gender } from '../../../enums/user/gender.enum';
import {
  IParams,
  PagedDurationParams,
  PagedParams,
} from '../../models/common/params.interface';
import { UserState } from '../../models/user/user-state.enum';

export class GetUsersParams extends PagedParams implements IParams {
  /**	String[]	用户ID	O */
  Ids?: string[];
  /**	String	用户名称，支持LIKE	O */
  Name?: string;
  /**	Int32	性别	O */
  Gender?: Gender;
  /**	String	手机号码，支持LIKE	O */
  MobileNo?: string;
  /**	String	邮箱，支持LIKE	O */
  Email?: string;
  /**	Int32	0-正常	O */
  State?: UserState;
  /**	String	用户角色	O */
  RoleId?: string;
}

export class GetUserLabelsParams extends PagedParams implements IParams {
  /**	String[]	标签ID	O */
  LabelIds?: string[];
  /**	String	标签名称，支持LIKE	O */
  LabelName?: string;
  /**	Int32	标签类型	O */
  LabelType?: UserLabelType;
  /**	String	标签内容，支持LIKE	O */
  Content?: string;
}

export class RandomUserPaswordParams implements IParams {
  /**	Int32	有效日期数量[1-365]	M */
  Days!: number;
}

export class ChangeUserPasswordParams implements IParams {
  /**	String	密码	M */
  Password!: string;
}

export class CheckCodeParams {
  /**	String	手机号码	M */
  MobileNo!: string;
  /**	String	效验码	M */
  CheckCode!: string;
}

/** 验证码认证结果 */
export class PasswordCheckCodeResult {
  /**	Boolean	是否认证成功	M	R */
  Result!: boolean;
  /**	String	跳转地址	O	R */
  RedirectUrl?: string;
}

export class GetUserRecordListParams extends PagedDurationParams {
  /**	String	用户名	O	*/
  UserName?: string;
  /**	Int32[]	消息类型	O	*/
  MessageTypes?: number[];
  /**	String	被操纵的用户名	O	*/
  OperatedUserName?: string;
  /**	Boolean	True：成功，False：失败	O	*/
  Result?: boolean;
}
