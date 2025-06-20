export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold">Contact Us</h1>

      {/* Contact details */}
      <div className="space-y-2 text-lg">
        <p>
          Email:{" "}
          <a
            href="mailto:contact@print3d.com"
            className="text-blue-600 hover:underline"
          >
            contact@print3d.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+1234567890" className="text-blue-600 hover:underline">
            +1&nbsp;(234)&nbsp;567-890
          </a>
        </p>
        <p>
          WhatsApp:{" "}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Chat on WhatsApp
          </a>
        </p>
      </div>

      {/* Map */}
      <div className="w-full h-96 rounded-md overflow-hidden border">
        {/* Replace the src below with your exact location if needed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.011032432843!2d-122.0928596235783!3d37.42302313419761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0a5d583b421%3A0xce55e23f80397e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1718900000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        />
      </div>
    </div>
  )
}
