'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import {
  categories,
  getDiscountedUnitPrice,
  products,
  type Product,
  type ProductCategory
} from '@/data/finchleyProducts'

type CartItem = {
  product: Product
  quantity: number
}

const formatCurrency = (value: number) => `$${value.toFixed(2)}`
const formatPack = (value: number) => `${value % 1 === 0 ? value.toFixed(0) : value.toFixed(1)}kg`

export default function FinchleyStorefront() {
  const [activeCategory, setActiveCategory] = useState<'All' | ProductCategory>('All')
  const [cart, setCart] = useState<Record<string, CartItem>>({})

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') {
      return products
    }

    return products.filter(product => product.category === activeCategory)
  }, [activeCategory])

  const featuredProducts = products.filter(product =>
    ['standard-chicken-1-4kg', 'mixed-portions-2kg', 'chicken-wings-1kg', 'chicken-breasts-1kg'].includes(product.id)
  )

  const cartItems = Object.values(cart)
  const subtotal = cartItems.reduce((total, item) => {
    return total + getDiscountedUnitPrice(item.product.unitPrice, item.quantity) * item.quantity
  }, 0)
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const updateQuantity = (product: Product, quantity: number) => {
    setCart(current => {
      const next = { ...current }

      if (quantity <= 0) {
        delete next[product.id]
        return next
      }

      next[product.id] = {
        product,
        quantity: Math.min(quantity, 99)
      }

      return next
    })
  }

  const addToCart = (product: Product) => {
    const currentQuantity = cart[product.id]?.quantity ?? 0
    updateQuantity(product, currentQuantity + 1)
  }

  return (
    <main className='min-h-screen overflow-x-hidden bg-[#f7f3ea] text-[#233127]'>
      <header className='sticky top-0 z-50 border-b border-[#d7cbb4] bg-[#fffaf0]/95 backdrop-blur'>
        <div className='mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8'>
          <a href='#top' className='flex items-center gap-3'>
            <Image
              src='/images/finchley/finchley-logo.png'
              alt='Finchley Farm Foods logo'
              width={48}
              height={48}
              className='h-12 w-12 shrink-0 object-contain'
            />
            <span>
              <span className='block text-base font-bold tracking-wide text-[#1f3b29] sm:text-lg'>Finchley Farm</span>
              <span className='block text-xs font-semibold text-[#8b2f27] uppercase'>Foods</span>
            </span>
          </a>

          <nav className='hidden items-center gap-8 text-sm font-semibold text-[#405545] md:flex'>
            <a href='#shop' className='hover:text-[#8b2f27]'>
              Shop
            </a>
            <a href='#promise' className='hover:text-[#8b2f27]'>
              Our promise
            </a>
            <a href='#cart' className='hover:text-[#8b2f27]'>
              Cart
            </a>
          </nav>

          <a
            href='#cart'
            className='shrink-0 rounded-full bg-[#8b2f27] px-3 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#74261f] sm:px-4'
          >
            Cart ({itemCount})
          </a>
        </div>
      </header>

      <section id='top' className='relative min-h-[650px] overflow-hidden bg-[#243a29]'>
        <Image
          src='/images/finchley/farm-chicken-hero.png'
          alt='Fresh packaged Finchley Farm chicken products on a farm table'
          fill
          priority
          className='object-cover'
        />
        <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(20,35,24,0.88)_0%,rgba(20,35,24,0.68)_42%,rgba(20,35,24,0.18)_100%)]' />
        <div className='relative mx-auto flex min-h-[650px] w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8'>
          <div className='w-full max-w-[calc(100vw-2rem)] text-white sm:max-w-2xl'>
            <p className='mb-5 inline-flex max-w-full rounded-full bg-white/14 px-4 py-2 text-xs font-bold text-[#f8d47b] ring-1 ring-white/20 sm:text-sm'>
              Farm-to-table chicken for Zimbabwean households
            </p>
            <h1 className='text-4xl leading-tight font-black sm:text-6xl lg:text-7xl'>Finchley Farm Foods</h1>
            <p className='mt-6 max-w-full text-base leading-8 text-white/88 sm:max-w-xl sm:text-lg'>
              Healthy, affordable, locally produced chicken products with transparent pack pricing and bulk savings for
              families, restaurants, and retailers.
            </p>
            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <a
                href='#shop'
                className='rounded-full bg-[#f8d47b] px-5 py-3 text-center text-sm font-black text-[#243a29] transition hover:bg-[#ffdF8f] sm:px-6'
              >
                Shop chicken products
              </a>
              <a
                href='#cart'
                className='rounded-full border border-white/45 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-white/10 sm:px-6'
              >
                Review order
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='border-y border-[#e0d5bf] bg-[#fffaf0]'>
        <div className='mx-auto grid w-full max-w-7xl grid-cols-2 gap-px px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8'>
          {[
            ['35', 'priced SKUs'],
            ['$1.00', 'entry pack'],
            ['10%', 'bulk saving at 10 units'],
            ['$30k', '2026 turnover target']
          ].map(([value, label]) => (
            <div key={label} className='min-w-0 px-2 py-5 text-center sm:px-4'>
              <p className='text-2xl font-black text-[#8b2f27] sm:text-3xl'>{value}</p>
              <p className='mt-1 text-sm font-semibold text-[#536757]'>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id='promise' className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end'>
          <div>
            <p className='text-sm font-black tracking-[0.18em] text-[#8b2f27] uppercase'>What we are building</p>
            <h2 className='mt-3 text-3xl leading-tight font-black text-[#243a29] sm:text-4xl'>
              A disciplined farm-to-table food company, starting with poultry.
            </h2>
          </div>
          <p className='text-base leading-8 text-[#536757]'>
            Finchley Farm is being built to produce, process, package, distribute, and eventually retail high-quality
            food. The first consumer channel starts here: a clean chicken catalog, clear prices, and an order flow ready
            for backend stock checks and Stripe checkout.
          </p>
        </div>

        <div className='mt-10 grid gap-4 md:grid-cols-3'>
          {[
            ['Local production', 'Designed around poultry operations that can be measured, improved, and scaled.'],
            ['Affordable food', 'Retail prices benchmarked against visible Zimbabwean grocery chicken pricing.'],
            [
              'Built to connect',
              'Cart data is structured so backend availability and Stripe checkout can plug in next.'
            ]
          ].map(([title, copy]) => (
            <article key={title} className='rounded-lg border border-[#ded2bc] bg-[#fffdf7] p-6 shadow-sm'>
              <h3 className='text-lg font-black text-[#243a29]'>{title}</h3>
              <p className='mt-3 text-sm leading-6 text-[#5b6d60]'>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id='shop' className='bg-[#e9f0e4] py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
            <div>
              <p className='text-sm font-black tracking-[0.18em] text-[#8b2f27] uppercase'>Chicken shop</p>
              <h2 className='mt-3 text-3xl font-black text-[#243a29] sm:text-4xl'>Browse the launch catalog</h2>
            </div>
            <div className='flex gap-2 overflow-x-auto pb-1'>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
                    activeCategory === category
                      ? 'bg-[#254a2f] text-white'
                      : 'bg-white text-[#405545] ring-1 ring-[#d4c8ae] hover:bg-[#fffaf0]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className='mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={cart[product.id]?.quantity ?? 0}
                onAdd={addToCart}
              />
            ))}
          </div>

          <div className='mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={cart[product.id]?.quantity ?? 0}
                onAdd={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      <section id='cart' className='mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8'>
        <div>
          <p className='text-sm font-black tracking-[0.18em] text-[#8b2f27] uppercase'>Order basket</p>
          <h2 className='mt-3 text-3xl font-black text-[#243a29] sm:text-4xl'>Your chicken order</h2>
          <div className='mt-8 overflow-hidden rounded-lg border border-[#d8ccb6] bg-[#fffdf7]'>
            {cartItems.length === 0 ? (
              <div className='p-8 text-[#536757]'>Your basket is empty.</div>
            ) : (
              cartItems.map(item => {
                const discountedPrice = getDiscountedUnitPrice(item.product.unitPrice, item.quantity)

                return (
                  <div
                    key={item.product.id}
                    className='grid gap-4 border-b border-[#eadfca] p-5 last:border-b-0 md:grid-cols-[1fr_auto_auto]'
                  >
                    <div>
                      <p className='font-black text-[#243a29]'>{item.product.name}</p>
                      <p className='mt-1 text-sm text-[#647466]'>
                        {formatPack(item.product.packSizeKg)} pack • {item.product.category}
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <button
                        onClick={() => updateQuantity(item.product, item.quantity - 1)}
                        className='h-9 w-9 rounded-full bg-[#edf2e8] text-lg font-black text-[#254a2f]'
                      >
                        -
                      </button>
                      <span className='w-8 text-center font-black'>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product, item.quantity + 1)}
                        className='h-9 w-9 rounded-full bg-[#254a2f] text-lg font-black text-white'
                      >
                        +
                      </button>
                    </div>
                    <div className='text-right'>
                      <p className='font-black text-[#243a29]'>{formatCurrency(discountedPrice * item.quantity)}</p>
                      <p className='mt-1 text-xs font-semibold text-[#8b2f27]'>
                        {formatCurrency(discountedPrice)} each
                      </p>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>

        <aside className='h-fit rounded-lg border border-[#d8ccb6] bg-[#fffdf7] p-6 shadow-sm'>
          <h3 className='text-xl font-black text-[#243a29]'>Order summary</h3>
          <div className='mt-6 space-y-4 text-sm'>
            <div className='flex justify-between'>
              <span className='text-[#647466]'>Items</span>
              <span className='font-bold text-[#243a29]'>{itemCount}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-[#647466]'>Subtotal</span>
              <span className='font-bold text-[#243a29]'>{formatCurrency(subtotal)}</span>
            </div>
            <div className='flex justify-between border-t border-[#eadfca] pt-4 text-lg'>
              <span className='font-black text-[#243a29]'>Total</span>
              <span className='font-black text-[#8b2f27]'>{formatCurrency(subtotal)}</span>
            </div>
          </div>
          <button
            disabled={cartItems.length === 0}
            className='mt-6 w-full rounded-full bg-[#8b2f27] px-5 py-3 text-sm font-black text-white transition hover:bg-[#74261f] disabled:cursor-not-allowed disabled:bg-[#c9bfae]'
          >
            Continue to checkout
          </button>
          <p className='mt-4 text-xs leading-5 text-[#647466]'>
            Checkout will connect to live stock, customer accounts, delivery zones, and Stripe payment sessions.
          </p>
        </aside>
      </section>

      <footer className='bg-[#243a29] px-4 py-10 text-white sm:px-6 lg:px-8'>
        <div className='mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center'>
          <div className='flex items-center gap-4'>
            <Image
              src='/images/finchley/finchley-logo.png'
              alt='Finchley Farm Foods logo'
              width={64}
              height={64}
              className='h-16 w-16 shrink-0 object-contain'
            />
            <div>
              <p className='text-lg font-black'>Finchley Farm Foods</p>
              <p className='mt-1 text-sm text-white/70'>Healthy, affordable, locally produced food.</p>
            </div>
          </div>
          <p className='text-sm text-white/70'>Built for poultry today, ready for the wider farm-to-table vision.</p>
        </div>
      </footer>
    </main>
  )
}

function ProductCard({
  product,
  quantity,
  onAdd
}: {
  product: Product
  quantity: number
  onAdd: (product: Product) => void
}) {
  const discountedPrice = quantity > 0 ? getDiscountedUnitPrice(product.unitPrice, quantity) : product.unitPrice

  return (
    <article className='flex min-h-[268px] flex-col rounded-lg border border-[#d8ccb6] bg-[#fffdf7] p-5 shadow-sm'>
      <div className='flex items-start justify-between gap-3'>
        <div>
          <p className='text-xs font-black tracking-[0.14em] text-[#8b2f27] uppercase'>{product.category}</p>
          <h3 className='mt-2 text-xl leading-7 font-black text-[#243a29]'>{product.name}</h3>
        </div>
        <span className='rounded-full bg-[#edf2e8] px-3 py-1 text-sm font-black text-[#254a2f]'>
          {formatPack(product.packSizeKg)}
        </span>
      </div>
      <p className='mt-4 text-sm leading-6 text-[#5b6d60]'>{product.note}</p>
      <div className='mt-auto pt-5'>
        <div className='flex items-end justify-between gap-3'>
          <div>
            <p className='text-2xl font-black text-[#243a29]'>{formatCurrency(discountedPrice)}</p>
            <p className='text-xs font-semibold text-[#647466]'>{formatCurrency(product.pricePerKg)} per kg</p>
          </div>
          <button
            onClick={() => onAdd(product)}
            className='rounded-full bg-[#254a2f] px-4 py-2 text-sm font-black text-white transition hover:bg-[#1e3d27]'
          >
            Add
          </button>
        </div>
        {quantity > 0 && <p className='mt-3 text-xs font-bold text-[#8b2f27]'>{quantity} in basket</p>}
      </div>
    </article>
  )
}
