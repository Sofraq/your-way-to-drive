import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, MapPin, Video, BookOpen, Car } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import onlineLearning from "@/assets/online-learning.jpg";

const Courses = () => {
  const courseFeatures = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "Онлайн лекції",
      description: "Відеоуроки у високій якості, доступні 24/7",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Інтерактивні тести",
      description: "Практичні завдання та тести для закріплення знань",
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Практичні заняття",
      description: "Водіння на сучасних автомобілях з досвідченим інструктором",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Гнучкий графік",
      description: "Навчайтеся у зручний для вас час",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "З будь-якого міста",
      description: "Теорія онлайн, практика у вашому місті",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Підготовка до іспиту",
      description: "Повна підготовка до теоретичного та практичного іспитів",
    },
  ];

  const courses = [
    {
      title: "Категорія B (легкові автомобілі)",
      duration: "2-3 місяці",
      theory: "40 годин",
      practice: "30 годин",
      description: "Повний курс для отримання прав категорії B. Включає теоретичну підготовку онлайн та практичні заняття з інструктором.",
      features: [
        "Теорія ПДР та основи безпеки руху",
        "Будова та технічне обслуговування автомобіля",
        "Практичне водіння на автодромі",
        "Водіння в умовах міста",
        "Підготовка до екзамену в сервісному центрі МВС",
      ],
    },
    {
      title: "Категорія B (автомат)",
      duration: "2-3 місяці",
      theory: "40 годин",
      practice: "25 годин",
      description: "Спрощений курс для тих, хто бажає навчитися водінню на автомобілі з автоматичною коробкою передач.",
      features: [
        "Адаптована програма для АКПП",
        "Менша кількість практичних годин",
        "Легше в освоєнні для початківців",
        "Обмеження: права дійсні тільки для автомобілів з АКПП",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Навчальні курси</h1>
              <p className="text-xl text-muted-foreground">
                Ми пропонуємо повний курс підготовки водіїв з онлайн теорією та практичними заняттями. 
                Навчайтеся в зручному темпі та отримайте права з першого разу!
              </p>
            </div>
          </div>
        </section>

        {/* Online Learning */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img 
                  src={onlineLearning} 
                  alt="Онлайн навчання" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  100% онлайн теорія
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Вся теоретична частина курсу доступна онлайн. Ви можете вчитися з дому, 
                  на роботі або в дорозі — потрібен тільки інтернет. Наша платформа працює 
                  на комп'ютері, планшеті та смартфоні.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-16 bg-muted/40">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Доступні програми навчання
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {courses.map((course, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{course.duration}</div>
                        <div className="text-sm text-muted-foreground">Тривалість</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{course.theory}</div>
                        <div className="text-sm text-muted-foreground">Теорія</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{course.practice}</div>
                        <div className="text-sm text-muted-foreground">Практика</div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{course.description}</p>
                    
                    <div className="space-y-3 mb-6 flex-1">
                      <h4 className="font-semibold">Що включено:</h4>
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild className="w-full">
                      <Link to="/pricing">Дізнатися ціну</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Як проходить навчання
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-4">1</div>
                  <h3 className="font-semibold mb-2">Реєстрація</h3>
                  <p className="text-sm text-muted-foreground">
                    Залишіть заявку на сайті або зателефонуйте нам
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-4">2</div>
                  <h3 className="font-semibold mb-2">Теорія онлайн</h3>
                  <p className="text-sm text-muted-foreground">
                    Вивчайте ПДР через нашу платформу в зручний час
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-4">3</div>
                  <h3 className="font-semibold mb-2">Практика</h3>
                  <p className="text-sm text-muted-foreground">
                    Заняття з інструктором на автодромі та в місті
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-4">4</div>
                  <h3 className="font-semibold mb-2">Іспит</h3>
                  <p className="text-sm text-muted-foreground">
                    Здача екзамену в сервісному центрі МВС
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Розпочніть навчання сьогодні!
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Отримайте водійські права з нашою сучасною програмою навчання. 
              Перша консультація — безкоштовно!
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/contact">Записатися зараз</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
