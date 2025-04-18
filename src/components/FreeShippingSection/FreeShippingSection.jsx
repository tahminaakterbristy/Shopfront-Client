

const FreeShippingSection = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Free Shipping on Orders Over $50</h2>
            <p className="text-lg text-gray-600 mb-6">
              Enjoy free shipping when you place an order above $50. No hidden fees, no surprises! Shop now and save more on all your favorite products.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
              Shop Now
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNvbXxlbnwwfHx8fDE2NDY5NzgxMzk&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Free Shipping"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeShippingSection;
