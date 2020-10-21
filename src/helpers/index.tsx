import { TAX } from 'constants/salary'
import round from 'lodash/round'

export const calculateSummary = (absoluteValue: number, withTax: boolean) => {
  let onHands, tax, cost
  if (withTax) {
    onHands = absoluteValue
    cost = onHands / (1 - TAX)
    tax = cost - onHands
  } else {
    cost = absoluteValue
    tax = cost * TAX
    onHands = cost - tax
  }

  return {
    tax: round(tax),
    cost: round(cost),
    onHands: round(onHands),
  }
}
