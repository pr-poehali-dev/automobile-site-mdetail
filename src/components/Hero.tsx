import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 font-montserrat">
              Продажа автомобилей
              <span className="block text-blue-500">и премиальный тюнинг</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Профессиональные услуги по продаже авто и эксклюзивному стайлингу.
              Превращаем ваши автомобильные мечты в реальность.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
                <Icon name="Phone" size={20} />
                Связаться с нами
              </button>
              <button className="border border-gray-400 hover:border-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
                <Icon name="Eye" size={20} />
                Посмотреть работы
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop"
              alt="Премиальный автомобиль"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-600 p-4 rounded-lg">
              <Icon name="Star" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
