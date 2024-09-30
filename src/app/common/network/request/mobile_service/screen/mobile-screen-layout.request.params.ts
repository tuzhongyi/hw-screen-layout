import { IParams } from '../../../models/common/params.interface';

export class PublishToScreenParams implements IParams {
  /**	String[]	屏幕ID列表	O */
  ScreenIds?: string[];
}
