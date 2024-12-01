import Image from 'next/image';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-4 text-xl lg:pl-12">
          <h2 className="text-yellow-500 font-semibold text-2xl">About Groweal Coaching</h2>
          <h1 className="text-5xl font-bold text-black"><p>Empowering Your Health,<br></br>Empowering Your Life</p></h1>
          <p className="text-gray-600 text-lg">
            At Groweal Coaching, we believe in transforming lives by empowering individuals to take control of their health, fitness, and overall lifestyle. Our team of experts will guide you every step of the way to achieve your fitness goals and build sustainable habits for life.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="bg-black  text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
              Learn More
            </button>
            <button className="border-2 text-black border-black px-6 py-2 rounded-lg hover:bg-gray-100white">
              Contact Us
            </button>
          </div>
        </div>
        {/* Hero Image */}
        <Image
          src="/assets/h6.png"
          alt="About Groweal Coaching"
          width={400}
          height={400}
          className="lg:w-[32%] w-full mt-8 lg:mt-0 lg:ml-15"
        />
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-white grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="text-yellow-500 text-4xl">⭐</div>
          <h3 className="text-xl font-semibold text-black">Best Coaching</h3>
          <p className="text-gray-600">
            Our coaching methods are tailored to each individual's needs, ensuring the best possible results.
          </p>
          <a href="#" className="text-blue-500 font-medium hover:underline">
            Learn More →
          </a>
        </div>
        {/* Feature 2 */}
        <div className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="text-yellow-500 text-4xl">✅</div>
          <h3 className="text-xl font-semibold text-black">Proven Results</h3>
          <p className="text-gray-600">
            Our clients achieve real, sustainable results with our evidence-based methods and coaching techniques.
          </p>
          <a href="#" className="text-blue-500 font-medium hover:underline">
            Learn More →
          </a>
        </div>
        {/* Feature 3 */}
        <div className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="text-yellow-500 text-4xl ">💪</div>
          <h3 className="text-xl font-semibold text-black">Personalized Plans</h3>
          <p className="text-gray-600">
            Each of our clients receives a personalized coaching plan that aligns with their unique health goals.
          </p>
          <a href="#" className="text-blue-500 font-medium hover:underline">
            Learn More →
          </a>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-semibold text-black mb-8">Meet Our Expert Team</h2>
        <div className="flex justify-center space-x-8">
          <div className="w-1/3">
            <Image src="/assets/s1.jpg" alt="Expert 1" width={250} height={250} className="rounded  mx-auto" />
            <h4 className="mt-4 text-xl font-semibold">John Doe</h4>
            <p className="text-gray-600">Certified Coach</p>
          </div>
          <div className="w-1/3">
            <Image src="/assets/s1.jpg" alt="Expert 2" width={250} height={250} className="rounded mx-auto" />
            <h4 className="mt-4 text-xl font-semibold">Jane Smith</h4>
            <p className="text-gray-600">Nutrition Expert</p>
          </div>
          <div className="w-1/3">
            <Image src="/assets/s1.jpg" alt="Expert 3" width={250} height={250} className="rounded mx-auto" />
            <h4 className="mt-4 text-xl font-semibold">Chris Johnson</h4>
            <p className="text-gray-600">Fitness Specialist</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
