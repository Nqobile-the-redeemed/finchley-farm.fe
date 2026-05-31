import type { Metadata } from 'next'
import FinchleyStorefront from '@/components/storefront/FinchleyStorefront'

export const metadata: Metadata = {
  title: 'Finchley Farm Foods | Fresh Chicken Online',
  description: 'Shop Finchley Farm Foods chicken products with clear pack pricing and bulk savings.'
}

export default function Home() {
  return <FinchleyStorefront />
}
