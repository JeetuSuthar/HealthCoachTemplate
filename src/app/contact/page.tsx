// File: app/contact/page.tsx
export default function ContactPage() {
    return (
        <section className="bg-gray-50">
            {/* Contact Section */}
            <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-10 shadow-lg rounded-xl">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
                        <p className="text-gray-600 mb-6">
                            Need assistance? Reach out to us, and we'll respond promptly. Your satisfaction is our priority.
                        </p>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-orange-300"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-orange-300"
                                />
                            </div>
                            <input
                                type="tel"
                                placeholder="Your Phone"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-orange-300"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring focus:ring-orange-300"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-black text-white rounded-lg py-3 hover:bg-gray-800 transition duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Information Section */}
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                        <p className="text-gray-600 mb-8">
                            Feel free to contact us for any inquiries, feedback, or support. We're always happy to hear from you.
                        </p>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="text-orange-500 text-3xl">📞</span>
                                <div>
                                    <p className="text-gray-800 font-semibold">+657 7664 654</p>
                                    <p className="text-gray-600">Call us anytime</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-blue-600 text-3xl">📧</span>
                                <div>
                                    <p className="text-gray-800 font-semibold">contact@groweal.com</p>
                                    <p className="text-gray-600">Email us for support</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-orange-500 text-3xl">📍</span>
                                <div>
                                    <p className="text-gray-800 font-semibold">London Eye, London, UK</p>
                                    <p className="text-gray-600">Visit us at our office</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column: FAQ Introduction */}
                        <div>
                            <h2 className="text-yellow-400 font-bold text-lg mb-2">Questions & Answer</h2>
                            <h1 className="text-gray-800 text-4xl font-bold mb-4">Frequently Asked Questions</h1>
                            <p className="text-gray-600 mb-6">
                                Here are some commonly asked questions and answers to help you. Let us know if you need further assistance.
                            </p>
                            <button className="bg-black text-white rounded-lg px-6 py-3 hover:bg-gray-800 transition duration-200">
                                Learn More
                            </button>
                        </div>

                        {/* Right Column: FAQ Questions */}
                        <div>
                            <div className="mb-8">
                                <h3 className="text-gray-800 font-bold text-xl mb-2">What is the best way to reach us?</h3>
                                <p className="text-gray-600">
                                    You can contact us via email or phone. Our team is available from 9 AM to 6 PM, Monday to Friday.
                                </p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-gray-800 font-bold text-xl mb-2">How soon can I expect a response?</h3>
                                <p className="text-gray-600">
                                    We typically respond within 24-48 hours. For urgent matters, call us directly.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-gray-800 font-bold text-xl mb-2">Do you offer 24/7 support?</h3>
                                <p className="text-gray-600">
                                    Currently, our support hours are 9 AM to 6 PM. For after-hours inquiries, please leave us a message.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
