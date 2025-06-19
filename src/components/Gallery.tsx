import Icon from "@/components/ui/icon";

const Gallery = () => {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      title: "BMW M3 - Полный тюнинг",
      category: "Тюнинг",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
      title: "Mercedes AMG - Стайлинг",
      category: "Стайлинг",
    },
    {
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
      title: "Audi RS6 - Детейлинг",
      category: "Детейлинг",
    },
    {
      image:
        "https://images.unsplash.com/photo-1549399047-d8de15526f44?w=400&h=300&fit=crop",
      title: "Porsche 911 - Продажа",
      category: "Продажа",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 font-montserrat text-gray-900">
            Наши работы
          </h3>
          <p className="text-xl text-gray-600">
            Примеры реализованных проектов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm bg-blue-600 px-2 py-1 rounded text-white mb-2 inline-block">
                    {project.category}
                  </span>
                  <h5 className="font-semibold">{project.title}</h5>
                </div>
                <div className="absolute top-4 right-4">
                  <Icon name="Eye" size={20} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 mx-auto">
            <Icon name="ArrowRight" size={20} />
            Смотреть все работы
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
