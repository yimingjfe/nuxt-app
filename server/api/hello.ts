import { add } from './add'

export default defineEventHandler((event) => {
  return {
    hello: add(2, 3)
  }
})