export type ProductCategory =
  | 'Whole Birds'
  | 'Premium Portions'
  | 'Portions'
  | 'Value Portions'
  | 'Offal & By-products'
  | 'Pet Food'

export type Product = {
  id: string
  category: ProductCategory
  name: string
  packSizeKg: number
  unitPrice: number
  pricePerKg: number
  note: string
}

export const products: Product[] = [
  {
    id: 'rotisserie-chicken-1-1kg',
    category: 'Whole Birds',
    name: 'Rotisserie Chicken',
    packSizeKg: 1.1,
    unitPrice: 5,
    pricePerKg: 4.55,
    note: 'Entry bird for quick family meals.'
  },
  {
    id: 'standard-chicken-1-4kg',
    category: 'Whole Birds',
    name: 'Standard Chicken',
    packSizeKg: 1.4,
    unitPrice: 6,
    pricePerKg: 4.29,
    note: 'Main family-value whole bird.'
  },
  {
    id: 'jumbo-chicken-1-7kg',
    category: 'Whole Birds',
    name: 'Jumbo Chicken',
    packSizeKg: 1.7,
    unitPrice: 7,
    pricePerKg: 4.12,
    note: 'Larger value bird for bigger households.'
  },
  {
    id: 'chicken-breasts-0-5kg',
    category: 'Premium Portions',
    name: 'Chicken Breasts',
    packSizeKg: 0.5,
    unitPrice: 3.35,
    pricePerKg: 6.7,
    note: 'Lean convenience pack.'
  },
  {
    id: 'chicken-breasts-1kg',
    category: 'Premium Portions',
    name: 'Chicken Breasts',
    packSizeKg: 1,
    unitPrice: 6.5,
    pricePerKg: 6.5,
    note: 'Premium cut for weekly meal prep.'
  },
  {
    id: 'chicken-breasts-2kg',
    category: 'Premium Portions',
    name: 'Chicken Breasts',
    packSizeKg: 2,
    unitPrice: 12.6,
    pricePerKg: 6.3,
    note: 'Bulk saving for family cooking.'
  },
  {
    id: 'chicken-breasts-5kg',
    category: 'Premium Portions',
    name: 'Chicken Breasts',
    packSizeKg: 5,
    unitPrice: 31,
    pricePerKg: 6.2,
    note: 'Catering pack for high-volume buyers.'
  },
  {
    id: 'chicken-drumsticks-0-5kg',
    category: 'Portions',
    name: 'Chicken Drumsticks',
    packSizeKg: 0.5,
    unitPrice: 2.85,
    pricePerKg: 5.7,
    note: 'Small pack for weekly household buyers.'
  },
  {
    id: 'chicken-drumsticks-1kg',
    category: 'Portions',
    name: 'Chicken Drumsticks',
    packSizeKg: 1,
    unitPrice: 5.6,
    pricePerKg: 5.6,
    note: 'Popular everyday portion.'
  },
  {
    id: 'chicken-drumsticks-2kg',
    category: 'Portions',
    name: 'Chicken Drumsticks',
    packSizeKg: 2,
    unitPrice: 10.8,
    pricePerKg: 5.4,
    note: 'Strong family-pack value.'
  },
  {
    id: 'chicken-drumsticks-5kg',
    category: 'Portions',
    name: 'Chicken Drumsticks',
    packSizeKg: 5,
    unitPrice: 26,
    pricePerKg: 5.2,
    note: 'Bulk catering pack.'
  },
  {
    id: 'chicken-wings-0-5kg',
    category: 'Portions',
    name: 'Chicken Wings',
    packSizeKg: 0.5,
    unitPrice: 2.75,
    pricePerKg: 5.5,
    note: 'Convenience pack for snacks and braais.'
  },
  {
    id: 'chicken-wings-1kg',
    category: 'Portions',
    name: 'Chicken Wings',
    packSizeKg: 1,
    unitPrice: 5.3,
    pricePerKg: 5.3,
    note: 'Below common branded wing pricing.'
  },
  {
    id: 'chicken-wings-2kg',
    category: 'Portions',
    name: 'Chicken Wings',
    packSizeKg: 2,
    unitPrice: 10.2,
    pricePerKg: 5.1,
    note: 'Family pack with modest bulk saving.'
  },
  {
    id: 'chicken-wings-5kg',
    category: 'Portions',
    name: 'Chicken Wings',
    packSizeKg: 5,
    unitPrice: 24,
    pricePerKg: 4.8,
    note: 'Value pack for events and restaurants.'
  },
  {
    id: 'chicken-thighs-0-5kg',
    category: 'Portions',
    name: 'Chicken Thighs',
    packSizeKg: 0.5,
    unitPrice: 2.6,
    pricePerKg: 5.2,
    note: 'Convenient small portion pack.'
  },
  {
    id: 'chicken-thighs-1kg',
    category: 'Portions',
    name: 'Chicken Thighs',
    packSizeKg: 1,
    unitPrice: 5,
    pricePerKg: 5,
    note: 'Close to low-end market pricing.'
  },
  {
    id: 'chicken-thighs-2kg',
    category: 'Portions',
    name: 'Chicken Thighs',
    packSizeKg: 2,
    unitPrice: 9.5,
    pricePerKg: 4.75,
    note: 'Family pack for stews and grills.'
  },
  {
    id: 'chicken-thighs-5kg',
    category: 'Portions',
    name: 'Chicken Thighs',
    packSizeKg: 5,
    unitPrice: 22.5,
    pricePerKg: 4.5,
    note: 'Bulk value pack.'
  },
  {
    id: 'mixed-portions-0-5kg',
    category: 'Value Portions',
    name: 'Mixed Portions',
    packSizeKg: 0.5,
    unitPrice: 2.35,
    pricePerKg: 4.7,
    note: 'Entry value pack.'
  },
  {
    id: 'mixed-portions-1kg',
    category: 'Value Portions',
    name: 'Mixed Portions',
    packSizeKg: 1,
    unitPrice: 4.5,
    pricePerKg: 4.5,
    note: 'Core value product.'
  },
  {
    id: 'mixed-portions-2kg',
    category: 'Value Portions',
    name: 'Mixed Portions',
    packSizeKg: 2,
    unitPrice: 8.4,
    pricePerKg: 4.2,
    note: 'Competitive family pack.'
  },
  {
    id: 'mixed-portions-5kg',
    category: 'Value Portions',
    name: 'Mixed Portions',
    packSizeKg: 5,
    unitPrice: 21,
    pricePerKg: 4.2,
    note: 'Family and catering anchor.'
  },
  {
    id: 'chicken-necks-0-5kg',
    category: 'Offal & By-products',
    name: 'Chicken Necks',
    packSizeKg: 0.5,
    unitPrice: 1.8,
    pricePerKg: 3.6,
    note: 'Affordable direct 500g pack.'
  },
  {
    id: 'chicken-necks-1kg',
    category: 'Offal & By-products',
    name: 'Chicken Necks',
    packSizeKg: 1,
    unitPrice: 3.5,
    pricePerKg: 3.5,
    note: 'Bulk saving against 500g equivalent.'
  },
  {
    id: 'chicken-necks-2kg',
    category: 'Offal & By-products',
    name: 'Chicken Necks',
    packSizeKg: 2,
    unitPrice: 6.7,
    pricePerKg: 3.35,
    note: 'Aggressive family-pack value.'
  },
  {
    id: 'chicken-gizzards-0-5kg',
    category: 'Offal & By-products',
    name: 'Chicken Gizzards',
    packSizeKg: 0.5,
    unitPrice: 2.45,
    pricePerKg: 4.9,
    note: 'Below mainstream gizzard benchmark.'
  },
  {
    id: 'chicken-gizzards-1kg',
    category: 'Offal & By-products',
    name: 'Chicken Gizzards',
    packSizeKg: 1,
    unitPrice: 4.8,
    pricePerKg: 4.8,
    note: 'Direct 1kg value pack.'
  },
  {
    id: 'chicken-gizzards-2kg',
    category: 'Offal & By-products',
    name: 'Chicken Gizzards',
    packSizeKg: 2,
    unitPrice: 9.2,
    pricePerKg: 4.6,
    note: 'Bulk saving for family and catering buyers.'
  },
  {
    id: 'chicken-livers-0-5kg',
    category: 'Offal & By-products',
    name: 'Chicken Livers',
    packSizeKg: 0.5,
    unitPrice: 1.55,
    pricePerKg: 3.1,
    note: 'Small convenience pack.'
  },
  {
    id: 'chicken-livers-1kg',
    category: 'Offal & By-products',
    name: 'Chicken Livers',
    packSizeKg: 1,
    unitPrice: 2.9,
    pricePerKg: 2.9,
    note: 'Slightly below direct market comparator.'
  },
  {
    id: 'chicken-livers-2kg',
    category: 'Offal & By-products',
    name: 'Chicken Livers',
    packSizeKg: 2,
    unitPrice: 5.5,
    pricePerKg: 2.75,
    note: 'Bulk saving with strong value perception.'
  },
  {
    id: 'pet-mince-0-5kg',
    category: 'Pet Food',
    name: 'Chicken Dog Food / Pet Mince',
    packSizeKg: 0.5,
    unitPrice: 1,
    pricePerKg: 2,
    note: 'Offcut and trimming line for pets.'
  },
  {
    id: 'pet-mince-1kg',
    category: 'Pet Food',
    name: 'Chicken Dog Food / Pet Mince',
    packSizeKg: 1,
    unitPrice: 1.8,
    pricePerKg: 1.8,
    note: 'High-volume by-product line.'
  },
  {
    id: 'pet-mince-2kg',
    category: 'Pet Food',
    name: 'Chicken Dog Food / Pet Mince',
    packSizeKg: 2,
    unitPrice: 3.4,
    pricePerKg: 1.7,
    note: 'Clearly labelled pet-food value pack.'
  }
]

export const categories: Array<'All' | ProductCategory> = [
  'All',
  'Whole Birds',
  'Premium Portions',
  'Portions',
  'Value Portions',
  'Offal & By-products',
  'Pet Food'
]

export function getDiscountedUnitPrice(unitPrice: number, quantity: number) {
  const discountByQuantity: Record<number, number> = {
    1: 0,
    2: 0.02,
    3: 0.03,
    4: 0.04,
    5: 0.05,
    6: 0.06,
    7: 0.07,
    8: 0.08,
    9: 0.09,
    10: 0.1
  }

  return unitPrice * (1 - discountByQuantity[Math.min(quantity, 10)])
}
