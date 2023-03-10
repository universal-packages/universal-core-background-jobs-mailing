import { CoreTask } from '@universal-packages/core'
import { populateTemplates } from '@universal-packages/template-populator'
import path from 'path'

export default class MailingTask extends CoreTask {
  public static readonly taskName = 'mailing-task'
  public static readonly description = 'Background jobs mailing related tasks'

  public async exec(): Promise<void> {
    switch (this.directive) {
      case 'init':
        await populateTemplates(path.resolve(__dirname, 'template'), './src', { override: this.args.f })
        this.logger.publish('INFO', 'Mailing template initialized')
        break
      default:
        throw new Error(`Unrecognized directive ${this.directive}`)
    }
  }
}
