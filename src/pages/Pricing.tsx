import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, CreditCard, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Базовий",
      originalPrice: "12,000",
      discountPrice: "6,000",
      category: "Категорія B (механіка)",
      features: [
        "40 годин теоретичних занять онлайн",
        "30 годин практичних занять",
        "Навчальні матеріали та тести",
        "Доступ до онлайн платформи на 6 місяців",
        "Підготовка до іспиту в сервісному центрі МВС",
      ],
      popular: false,
    },
    {
      title: "Комфорт",
      originalPrice: "10,000",
      discountPrice: "5,000",
      category: "Категорія B (автомат)",
      features: [
        "40 годин теоретичних занять онлайн",
        "25 годин практичних занять",
        "Навчання на автомобілі з АКПП",
        "Доступ до онлайн платформи на 6 місяців",
        "Підготовка до іспиту в сервісному центрі МВС",
      ],
      popular: true,
    },
    {
      title: "Преміум",
      originalPrice: "16,000",
      discountPrice: "8,000",
      category: "Категорія B (механіка)",
      features: [
        "40 годин теоретичних занять онлайн",
        "40 годин практичних занять",
        "Індивідуальний графік занять",
        "Додаткові заняття на автодромі",
        "Персональний куратор",
        "Супровід на іспиті в сервісному центрі МВС",
      ],
      popular: false,
    },
  ];

  const paymentOptions = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Разова оплата",
      description: "Сплатіть повну вартість курсу одразу та отримайте додаткову знижку 5%",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Розстрочка 0%",
      description: "Розділіть оплату на 3-6 місяців без переплат та відсотків",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Кредит",
      description: "Оформіть навчання в кредит через наших партнерів-банки на вигідних умовах",
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
              <div className="inline-block mb-4">
                <span className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                  🎉 Акція: -50% на всі курси
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Ціни та оплата</h1>
              <p className="text-xl text-muted-foreground">
                Прозорі ціни без прихованих платежів. Оберіть зручний варіант оплати!
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`flex flex-col relative ${
                    plan.popular ? 'border-2 border-primary shadow-lg' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Популярний
                      </span>
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{plan.category}</p>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-bold text-primary">
                          {plan.discountPrice} ₴
                        </span>
                        <span className="text-xl text-muted-foreground line-through">
                          {plan.originalPrice} ₴
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Акційна ціна до кінця місяця</p>
                    </div>
                    
                    <div className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      asChild 
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      <Link to="/contact">Обрати тариф</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-16 bg-muted/40">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Варіанти оплати
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {paymentOptions.map((option, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        {option.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                    <p className="text-muted-foreground">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Що включено в ціну
              </h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Теоретична підготовка:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Відеолекції високої якості</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Інтерактивні тести та завдання</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Електронні навчальні матеріали</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Симулятори іспитів МВС</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Практична підготовка:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Заняття з досвідченим інструктором</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Нові автомобілі з подвійним керуванням</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Автодром та водіння в місті</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Паливо включено в вартість</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Discount Banner */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Знижка -50% діє обмежений час!
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Не втрачайте можливість розпочати навчання за вигідною ціною. 
              Записуйтесь зараз та економте до 6,000 грн!
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/contact">Записатися зі знижкою</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
