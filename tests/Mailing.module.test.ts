import { Logger } from '@universal-packages/logger'
import { MailingModule } from '../src'

describe('MailingModule', (): void => {
  it('behaves as expected', async (): Promise<void> => {
    const logger = new Logger({ silence: true })
    const module = new MailingModule({} as any, logger)

    await module.prepare()
    await module.release()
  })
})
