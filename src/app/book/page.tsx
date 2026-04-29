export default function BookPage() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Book an Appointment</h1>
      <p className="text-gray-500 mb-6">
        Walk-ins are always welcome. To reserve your spot in advance, call or text us directly.
      </p>
      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 text-sm text-yellow-800 mb-6">
        Online booking will be embedded here in a future update.
      </div>
      <div className="text-gray-700 space-y-1">
        <p><span className="font-semibold">Call or Text:</span> (404) 555-0199</p>
        <p><span className="font-semibold">Email:</span> appointments@swiftcutbarbershop.example.com</p>
      </div>
    </section>
  )
}
