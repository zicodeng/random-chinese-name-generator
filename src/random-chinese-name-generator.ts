import { ADJECTIVES } from './adjectives'
import { NAMES } from './names'

const getRandomNumer = (length: number) => Math.floor(Math.random() * length)

export const generateRandomChineseName = (): string =>
  `${ADJECTIVES[getRandomNumer(ADJECTIVES.length)]}の${NAMES[getRandomNumer(NAMES.length)]}`
