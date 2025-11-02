import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award, Car, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";
import carFleet from "@/assets/car-fleet.jpg";

const Index = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "100% онлайн навчання",
      description: "Повністю дистанційний формат — навчайтеся з будь-якої точки України",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Швидке отримання прав",
      description: "1-1,5 місяця до ваших водійських прав з повною підтримкою",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Повна допомога",
      description: "Супроводжуємо на всіх етапах: від навчання до отримання прав",
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Новий автопарк",
      description: "Сучасні автомобілі з усім необхідним обладнанням",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Досвідчені інструктори",
      description: "Професіонали з багаторічним досвідом навчання",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Офіційна ліцензія",
      description: "Ліцензована автошкола з сертифікатами якості",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBanner} 
              alt="Автошкола" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-2xl space-y-6">
              <div className="inline-block">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  🎉 Акція: Знижка -50% на всі курси
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Водійські права за 1-1,5 місяця онлайн
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Повністю дистанційне навчання з будь-якої точки України. 
                Ми супроводжуємо вас на всіх етапах — від навчання до отримання прав!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg">
                  <a href="https://t.me/Julia_m_ua" target="_blank" rel="noopener noreferrer">
                    Записатися зараз
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <Link to="/courses">Дізнатися більше</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/40">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Чому обирають нас</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ми пропонуємо найсучасніші методи навчання та індивідуальний підхід до кожного студента
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Discount Banner */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Встигніть скористатися знижкою -50%!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Почніть навчання зараз і отримайте права за вигідною ціною
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/pricing">Переглянути ціни</Link>
            </Button>
          </div>
        </section>

        {/* Car Fleet Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Сучасний автопарк
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Всі наші автомобілі нові, обладнані сучасними системами безпеки 
                  та відповідають найвищим стандартам якості. Ви навчатиметеся 
                  на комфортних та надійних автомобілях.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <span>Нові автомобілі 2023-2024 років</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <span>Подвійні педалі та керування</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <span>Сучасні системи безпеки</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <span>Комфортний салон та клімат-контроль</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img 
                  src={carFleet} 
                  alt="Автопарк" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/40">
          <div className="container">
            <Card className="border-2 border-primary">
              <CardContent className="py-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Готові почати навчання?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Залишіть заявку зараз і отримайте безкоштовну консультацію від наших фахівців
                </p>
                <Button asChild size="lg" className="text-lg">
                  <a href="https://t.me/Julia_m_ua" target="_blank" rel="noopener noreferrer">
                    Записатися на навчання
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
