// const funcs = require('./utils')
import * as Utils from './Utils'

describe('Colour conversion functions', () => {
  test('Convert SRM to EBC returns a correct result', () => {
    const expected = 19.7

    const actual = Utils.convertSRMToEBC(10)

    expect(actual).toBe(expected)
  })

  test('Convert EBC to SRM returns a correct result', () => {
    const expected = 10.16

    const actual = Utils.convertEBCToSRM(20)

    expect(actual).toBe(expected)
  })
})

describe('Metric to Imperial conversion functions.', () => {
  test('Convert litres to gallons returns a correct result.', () => {
    const expected = 5.283440000000001

    const actual = Utils.convertLitresToGallons(20)

    expect(actual).toBe(expected)
  })

  test('Convert kilograms to pounds returns a correct result.', () => {
    const expected = 11.0231

    const actual = Utils.convertKilogramsToPounds(5)

    expect(actual).toBe(expected)
  })
})

//calculateMCU(grainWeight, grainColour, volume)
describe('Calculate MCU and SRM.', () => {
  test('Calculate MCU returns a correct result.', () => {
    const kgGrain = 5
    const colour = 6
    const volumeLitres = 22.7304

    // 11.0231 lbs * 4.99 lovibond / 5 gallons
    const expected = 11.01440737682905

    const actual = Utils.calculateMCU(kgGrain, colour, volumeLitres)

    expect(actual).toBe(expected)
  })

  test('Calculate SRM from MCU is correct.', () => {
    // 1.4922 * (MCU * 0.6859)
    const SRM = 11.0010538
    const expected = 11.259578344278921

    const actual = Utils.calculateSRM(SRM)

    expect(actual).toBe(expected)
  })
})
