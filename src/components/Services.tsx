import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Car",
      title: "Продажа автомобилей",
      description:
        "Широкий выбор премиальных и эксклюзивных автомобилей. Помощь в подборе и оформлении.",
      features: [
        "Экспертная оценка",
        "Юридическое сопровождение",
        "Гарантия качества",
      ],
    },
    {
      icon: "Wrench",
      title: "Тюнинг и стайлинг",
      description:
        "Профессиональная доработка автомобилей. От технического тюнинга до эксклюзивного дизайна.",
      features: [
        "Технический тюнинг",
        "Внешний стайлинг",
        "Индивидуальный подход",
      ],
    },
    {
      icon: "Shield",
      title: "Детейлинг",
      description:
        "Комплексная защита и восстановление внешнего вида автомобиля.",
      features: [
        "Полировка кузова",
        "Керамические покрытия",
        "Химчистка салона",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 font-montserrat text-gray-900">
            Наши услуги
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр автомобильных услуг от экспертов своего дела
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Icon
                    name={service.icon}
                    size={32}
                    className="text-blue-600"
                  />
                </div>
                <h4 className="text-2xl font-bold font-montserrat text-gray-900">
                  {service.title}
                </h4>
              </div>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
