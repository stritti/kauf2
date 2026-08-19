export function getRandom<T>(arr: T[], count: number): T[] {
  if (count > arr.length) {
    throw new RangeError('getRandom: more elements taken than available')
  }
  const pool = [...arr]
  const result: T[] = []
  while (result.length < count) {
    const index = Math.floor(Math.random() * pool.length)
    result.push(pool.splice(index, 1)[0])
  }
  return result
}