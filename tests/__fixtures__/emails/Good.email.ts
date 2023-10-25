import { BaseEmail } from '@universal-packages/background-jobs-mailing'
import { SendOptions } from '@universal-packages/mailing'

export default class GoodEmail extends BaseEmail {
  public async build(payload: any): Promise<SendOptions> {
    return { subject: 'good', locals: payload, html: 'html' }
  }
}
