import Image from 'next/image';

const Home = () => {
  return (
    <div>
      
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-8 flex flex-col lg:flex-row items-center h-screen">
  {/* Text Content */}
  <div className="lg:w-1/2 space-y-6 lg:pl-20">
    <h2 className="text-yellow-500 font-semibold text-2xl lg:text-3xl">
      Health Coaching
    </h2>
    <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
      Better Health,<br />Better Lifestyle
    </h1>
    <p className="text-gray-600 text-lg leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div className="flex space-x-4">
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600">
        Learn More
      </button>
      <button className="border-2 text-black border-black px-6 py-3 rounded-lg hover:bg-gray-200">
        Contact Us
      </button>
    </div>
  </div>

  {/* Hero Image */}
  <div className="lg:w-[40%] w-full flex justify-center lg:justify-end">
    <Image
      src="/assets/h2.png"
      alt="Yoga Pose"
      width={400}
      height={400}
      className="object-contain"
    />
  </div>
</section>


      {/* Features Section */}
      <section className="py-16 px-8 bg-white grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-lg">
          <div className="text-yellow-500 text-4xl">⭐</div>
          <h3 className="text-xl font-semibold text-black">Best Training</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit.
          </p>
          <a href="#" className="text-blue-500 font-medium hover:underline">
            Learn More →
          </a>
        </div>
        {/* Feature 2 */}
        
        <div className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md">
          
          <div className="text-yellow-500 text-4xl">✅</div>
          <h3 className="text-xl font-semibold text-black">Guaranteed</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit.
          </p>
          <a href="#" className="text-blue-500 font-medium hover:underline">
            Learn More →
          </a>
        </div>
        {/* Feature 3 */}
        <div className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="text-yellow-500 text-4xl">💲</div>
          <h3 className="text-xl font-semibold text-black">Very Cheap</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit.
          </p>
          <a href="#" className="text-blue-500 font-medium hover:underline">
            Learn More →
          </a>
        </div>
      </section>
        {/* About Section */}
        <section className="bg-white py-16 px-8  flex-col lg:flex-row items-center justify-between flex">
        <Image
          src="/assets/h6.png"
          alt="About Groweal"
          width={400}
          height={400}
          className="lg:w-[30%] w-full mb-8 lg:mb-0 lg:ml-10"
        />
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h2 className="text-yellow-500 font-semibold text-2xl">Health Coaching</h2>
          <h1 className="text-5xl font-bold text-black">About HealthCoach</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-yellow-500">
            Learn More
          </button>
        </div>
      </section>

      {/* Helping Choices Section */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="text-center space-y-8">
          <h2 className="text-yellow-500 font-semibold text-3xl">Groweal Coaching</h2>
          <h1 className="text-5xl font-bold text-gray-950">Helping You Make The Right Choices</h1>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
            Learn More
          </button>
        </div>
      </section>

      {/* How Growheal Works Section */}
      <section className="bg-white py-16 px-8">
        <div className="text-center space-y-4">
          <h2 className="text-yellow-500 font-semibold text-1xl">Our Services</h2>
          <h1 className="text-3xl font-bold text-black">How Growheal Works</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </section>

       {/* Programs Section */}
       <section className="bg-white py-16 px-8">
        <h2 className="text-center text-yellow-500 font-semibold text-lg mb-4">
          Our Programs
        </h2>
        <h1 className="text-center text-4xl font-bold mb-8">
          Explore What We Offer
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Program Card 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Image
              src="/assets/h3.jpg"
              alt="Group Coaching"
              width={300}
              height={200}
              className="rounded-lg mb-4 object-cover w-full"
            />
            <h3 className="text-xl font-semibold mb-2text-black">Group Coaching</h3>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.
            </p>
            <a href="#" className="text-blue-500 font-medium hover:underline">
              Learn More →
            </a>
          </div>
          {/* Program Card 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Image
              src="/assets/h4.jpg"
              alt="Day Challenge"
              width={300}
              height={200}
              className="rounded-lg mb-4 object-cover w-full"
            />
            <h3 className="text-xl font-semibold mb-2 text-black">Day Challenge</h3>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.
            </p>
            <a href="#" className="text-blue-500 font-medium hover:underline">
              Learn More →
            </a>
          </div>
          {/* Program Card 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Image
              src="/assets/h69.jpg"
              alt="Control Eating"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full lg:h-[270px] mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-black">Control Eating</h3>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.
            </p>
            <a href="#" className="text-blue-500 font-medium hover:underline">
              Learn More →
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="text-center mb-8">
          <h2 className="text-yellow-500 font-semibold text-lg">Our Team</h2>
          <h1 className="text-4xl font-bold text-black">Team Expert</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Learn More
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/assets/h5.jpg"
              alt="Expert 1"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="flex space-x-4 text-gray-500">
              <a href="#" className="hover:text-blue-500">Facebook</a>
              <a href="#" className="hover:text-blue-500">Twitter</a>
              <a href="#" className="hover:text-blue-500">Instagram</a>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/assets/p1.jpg"
              alt="Expert 2"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="flex space-x-4 text-gray-500">
              <a href="#" className="hover:text-blue-500">Facebook</a>
              <a href="#" className="hover:text-blue-500">Twitter</a>
              <a href="#" className="hover:text-blue-500">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Branding Section */}
      <section className="bg-white py-8 px-8">
        <div className="flex justify-center space-x-8">
          <Image
            src="/assets/l1.png"
            alt="Zencenter"
            width={100}
            height={100}
          />
          <Image
            src="/assets/l2.png"
            alt="Fitness"
            width={100}
            height={100}
          />
          <Image
            src="/assets/l3.png"
            alt="NaturePear"
            width={100}
            height={100}
          />
          <Image
            src="/assets/l4.png"
            alt="PureNature"
            width={100}
            height={100}
          />
        </div>
      </section>

       {/* Testimonials Section */}
       <section className="bg-gray-50 py-16 px-8">
        <h2 className="text-center text-yellow-500 font-semibold text-lg mb-4">
          Our Testimonials
        </h2>
        <h1 className="text-center text-4xl font-bold mb-8 text-black">What Client Say</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <span className="text-yellow-500 text-lg">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <h3 className="font-semibold">Gianna</h3>
            <p className="text-gray-500 text-sm">Client</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <span className="text-yellow-500 text-lg">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <h3 className="font-semibold">Avery</h3>
            <p className="text-gray-500 text-sm">Client</p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <span className="text-yellow-500 text-lg">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <h3 className="font-semibold">Eleanor</h3>
            <p className="text-gray-500 text-sm">Client</p>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="bg-white py-16 px-8">
        <h2 className="text-center text-yellow-500 font-semibold text-lg mb-4">
          Our Price
        </h2>
        <h1 className="text-center text-4xl font-bold mb-8 text-black">HealthCoach Price</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="text-yellow-500 text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">$87</h1>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Get Started
            </button>
          </div>
          {/* Plan 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="text-yellow-500 text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">$92</h1>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Get Started
            </button>
          </div>
          {/* Plan 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="text-yellow-500 text-4xl mb-4">📉</div>
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">$98</h1>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Clients Gallery Section */}
      <section className="bg-gray-50 py-16 px-8 ">
        <h2 className="text-center text-yellow-500 font-semibold text-lg mb-4">
          Our Pictures
        </h2>
        <h1 className="text-center text-4xl font-bold mb-8 text-black">Clients Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center mx-auto lg:ml-10">
          {/* Gallery Item 1 */}
          <Image
            src="/assets/h1.jpg"
            alt="Client 1"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
          {/* Gallery Item 2 */}
          <Image
            src="/assets/h1.jpg"
            alt="Client 2"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
          {/* Gallery Item 3 */}
          <Image
            src="/assets/h4.jpg"
            alt="Client 3"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
      
      
    </div>
  );
};

export default Home;
