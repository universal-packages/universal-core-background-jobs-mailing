import { Mailing, MailingOptions } from '@universal-packages/background-jobs-mailing'
import { CoreModule } from '@universal-packages/core'

export default class MailingModule extends CoreModule<MailingOptions> {
  public static readonly moduleName = 'mailing-module'
  public static readonly description = 'Background jobs mailing core module wrapper'
  public static readonly defaultConfig: MailingOptions = { emailsLocation: './src' }

  public subject: Mailing

  public async prepare(): Promise<void> {
    this.subject = new Mailing(this.config)

    await this.subject.prepare()
  }

  public async release(): Promise<void> {
    // NOP
  }
}
