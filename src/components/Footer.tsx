import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Car" size={32} className="text-blue-500" />
              <h4 className="text-2xl font-bold font-montserrat">MDetail</h4>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональные автомобильные услуги с 2015 года. Качество,
              надёжность, индивидуальный подход.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Icon name="MapPin" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Услуги</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Продажа авто
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Тюнинг
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Стайлинг
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Детейлинг
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Информация</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Гарантии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Контакты</h5>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@mdetail.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Автомобильная, 1</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Пн-Сб: 9:00-20:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MDetail. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
