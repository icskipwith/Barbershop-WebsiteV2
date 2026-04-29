import Link from 'next/link'

type Service = {
  name: string
  price: string
  description: string
  duration: string
}

const categories: { heading: string; items: Service[] }[] = [
  {
    heading: 'Haircuts',
    items: [
      {
        name: 'Adult Cut',
        price: 'Starting at $30',
        description: 'Full haircut styled to your preference.',
        duration: '~30 min',
      },
      {
        name: 'Kids Cut (12 & under)',
        price: 'Starting at $20',
        description: 'Patient, precise cuts for the little ones.',
        duration: '~25 min',
      },
      {
        name: 'Fade',
        price: 'Starting at $30',
        description: 'Low, mid, or high fade blended to perfection.',
        duration: '~40 min',
      },
      {
        name: 'Line-up / Shape-up',
        price: 'Starting at $15',
        description: 'Clean edge-up along the hairline and temples.',
        duration: '~15 min',
      },
    ],
  },
  {
    heading: 'Braids',
    items: [
      {
        name: 'Knotless Braids',
        price: 'Starting at $150',
        description: 'Feed-in technique for a natural, low-tension look.',
        duration: '~3–4 hrs',
      },
      {
        name: 'Box Braids',
        price: 'Starting at $120',
        description: 'Classic protective style in your choice of size.',
        duration: '~3 hrs',
      },
      {
        name: 'Cornrows',
        price: 'Starting at $60',
        description: 'Straight-back or custom pattern cornrow styles.',
        duration: '~1–2 hrs',
      },
      {
        name: 'Twist Styles',
        price: 'Starting at $80',
        description: 'Two-strand or Senegalese twists in any length.',
        duration: '~2–3 hrs',
      },
    ],
  },
  {
    heading: 'Add-ons',
    items: [
      {
        name: 'Beard Trim & Line-up',
        price: 'Starting at $15',
        description: 'Shape and define your beard.',
        duration: '~15 min',
      },
      {
        name: 'Shampoo & Condition',
        price: 'Starting at $20',
        description: 'Scalp wash and deep conditioning treatment.',
        duration: '~20 min',
      },
      {
        name: 'Hot Towel Treatment',
        price: 'Starting at $10',
        description: 'Relaxing hot towel finish after your cut.',
        duration: '~10 min',
      },
      {
        name: 'Hair Enhancements',
        price: 'Price varies',
        description: 'Color, highlights, or other treatments — ask your stylist.',
        duration: 'Varies',
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page header */}
      <div className="bg-gray-950 text-white py-16 px-6 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight">Services &amp; Prices</h1>
        <p className="text-gray-400 mt-2 text-sm">
          Prices may vary based on hair length and complexity.
        </p>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-6 space-y-14">
        {categories.map((category) => (
          <section key={category.heading} aria-labelledby={`cat-${category.heading}`}>
            <h2
              id={`cat-${category.heading}`}
              className="text-xs font-bold text-red-500 uppercase tracking-widest mb-5"
            >
              {category.heading}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.items.map((service) => (
                <li
                  key={service.name}
                  className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start gap-3">
                    <h3 className="font-semibold text-gray-900">{service.name}</h3>
                    <span className="text-red-500 font-semibold text-sm whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center pt-1 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{service.duration}</span>
                    <Link
                      href="/book"
                      className="text-xs font-semibold text-red-500 hover:text-red-600 hover:underline"
                    >
                      Book &rarr;
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
