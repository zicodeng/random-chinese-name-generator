import { generateRandomChineseName } from '../src/random-chinese-name-generator'

/**
 * Dummy test
 */
describe('random chinese name generator', () => {
  it('works', () => {
    expect(generateRandomChineseName()).toBeTruthy()
  })
})
