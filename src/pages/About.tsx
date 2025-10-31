import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Car, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "10,000+", label: "Випускників" },
    { icon: <Award className="h-8 w-8" />, value: "15+", label: "Років досвіду" },
    { icon: <Car className="h-8 w-8" />, value: "50+", label: "Нових авто" },
    { icon: <TrendingUp className="h-8 w-8" />, value: "95%", label: "Здають з 1-го разу" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Про нашу автошколу</h1>
              <p className="text-xl text-muted-foreground">
                Ми — сучасна автошкола з 15-річним досвідом підготовки водіїв. 
                Наша мета — забезпечити якісне навчання та високий рівень безпеки на дорогах України.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-muted/40">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Наша історія</h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Наша автошкола була заснована в 2008 році з простою, але важливою місією — 
                  навчати людей безпечному водінню та допомагати їм отримувати водійські права 
                  з першого разу.
                </p>
                
                <p>
                  За роки роботи ми підготували понад 10,000 водіїв, які впевнено почуваються 
                  на дорогах України. Наші випускники цінують професіоналізм викладачів, 
                  індивідуальний підхід та сучасні методики навчання.
                </p>
                
                <p>
                  У 2020 році ми запустили повністю онлайн формат теоретичної підготовки, 
                  що дозволяє нашим студентам навчатися з будь-якого міста України в зручний 
                  для них час.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Licenses & Certificates */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Ліцензії та сертифікати
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Державна ліцензія</h3>
                  <p className="text-sm text-muted-foreground">
                    Офіційна ліцензія Міністерства освіти на освітню діяльність
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">ISO 9001</h3>
                  <p className="text-sm text-muted-foreground">
                    Сертифікат системи управління якістю міжнародного стандарту
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Дозвіл МВС</h3>
                  <p className="text-sm text-muted-foreground">
                    Дозвіл Міністерства внутрішніх справ на підготовку водіїв
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-muted/40">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Наша команда
            </h2>
            
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-muted-foreground">
                У нашій команді працюють досвідчені інструктори з стажем роботи від 10 років. 
                Кожен викладач має відповідну освіту, сертифікати та регулярно підвищує 
                свою кваліфікацію.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-2">Професійні інструктори</h3>
                  <p className="text-muted-foreground mb-4">
                    Всі наші викладачі мають багаторічний досвід практичного водіння 
                    та педагогічну підготовку. Вони знають, як доступно пояснити складні моменти 
                    та допомогти подолати страх перед водінням.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-2">Індивідуальний підхід</h3>
                  <p className="text-muted-foreground mb-4">
                    Ми розуміємо, що кожна людина навчається по-своєму. Тому наші інструктори 
                    використовують індивідуальний підхід до кожного студента, враховуючи 
                    його темп навчання та особливості.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Modern Fleet */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Новий автопарк
              </h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <p>
                      Ми постійно оновлюємо наш автопарк, щоб забезпечити студентам 
                      найкращі умови для навчання. Всі автомобілі оснащені:
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Подвійними педалями для максимальної безпеки</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Сучасними системами допомоги водію (ABS, ESP)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Клімат-контролем для комфортного навчання в будь-яку пору року</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Камерами заднього виду та паркувальними датчиками</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Механічними та автоматичними коробками передач на вибір</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
