import { MailingModule } from '../src'
import GoodEmail from './__fixtures__/emails/Good.email'

jestCore.runBare({
  coreConfigOverride: {
    config: { location: './tests/__fixtures__/config' },
    modules: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

describe(MailingModule, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    expect(global.mailingSubject).not.toBeUndefined()
    expect(global.mailingSubject.options).toEqual({ emailsLocation: './tests/__fixtures__', templatesLocation: './src', engine: 'test', renderer: 'replacer' })

    await GoodEmail.sendLater({ foo: 'bar' })

    expect(GoodEmail).toHaveBeenEnqueuedWith({ foo: 'bar' })
  })
})
