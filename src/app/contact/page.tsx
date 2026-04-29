export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h1>
      <dl className="space-y-6 text-gray-700">
        <div>
          <dt className="font-semibold text-gray-900">Phone / Text</dt>
          <dd>678-903-5928</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">Email</dt>
          <dd>swiftcuts1987@gmail.com</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">Address</dt>
          <dd>4810 Wade Green Rd #10, Kennesaw, GA 30144</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">Hours</dt>
          <dd>
            <p>Tue&ndash;Fri: 10 AM &ndash; 7 PM</p>
            <p>Saturday: 9 AM &ndash; 6 PM</p>
            <p>Sunday: 11 AM &ndash; 4 PM</p>
            <p>Monday: Closed</p>
          </dd>
        </div>
      </dl>
    </section>
  )
}
