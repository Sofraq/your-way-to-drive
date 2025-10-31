import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqItems = [
    {
      question: "Як проходить онлайн-навчання?",
      answer: "Після реєстрації ви отримуєте доступ до нашої онлайн платформи, де розміщені всі навчальні матеріали: відеолекції, презентації, тести. Ви можете навчатися у зручний для вас час з будь-якого пристрою. Платформа доступна 24/7. Після завершення теоретичного курсу ви переходите до практичних занять з інструктором.",
    },
    {
      question: "Скільки триває навчання?",
      answer: "Стандартний курс триває 2-3 місяці. Теоретична частина займає близько 1-1,5 місяця (40 годин), практична частина — ще 1-1,5 місяця (25-30 годин залежно від обраного курсу). Темп навчання ви можете регулювати самостійно, особливо теоретичну частину.",
    },
    {
      question: "Чи можна навчатися з іншого міста?",
      answer: "Так, звичайно! Теоретичну частину ви проходите повністю онлайн з будь-якого міста України. Для практичних занять ми допоможемо організувати навчання у вашому місті через наші філії або партнерів. Просто повідомте нам ваше місто розташування при реєстрації.",
    },
    {
      question: "Як проходить іспит у сервісному центрі МВС?",
      answer: "Іспит складається з двох частин: теоретичної (комп'ютерний тест на 20 питань) та практичної (водіння на автодромі та в місті). Ми повністю готуємо вас до обох частин іспиту. Наша платформа включає тренувальні тести, ідентичні реальним екзаменаційним. 95% наших студентів здають іспит з першого разу.",
    },
    {
      question: "Як оформити розстрочку або кредит?",
      answer: "Ми пропонуємо кілька варіантів: розстрочку 0% на 3-6 місяців без переплат (оформляється безпосередньо в автошколі) або кредит через банки-партнери (ПриватБанк, Монобанк). Для оформлення потрібен тільки паспорт та ІПН. Рішення за кредитом приймається протягом 15 хвилин.",
    },
    {
      question: "Чи дійсна знижка -50%?",
      answer: "Так, знижка -50% діє для всіх нових студентів, які записуються протягом поточного місяця. Це акційна пропозиція, яка дозволяє вам заощадити до 6,000 грн на навчанні. Після закінчення місяця діють стандартні тарифи.",
    },
    {
      question: "Які автомобілі використовуються для навчання?",
      answer: "Ми маємо парк з 50+ нових автомобілів 2023-2024 років випуску. Всі авто обладнані подвійними педалями, системами безпеки (ABS, ESP), камерами заднього виду. Доступні як автомобілі з механічною, так і з автоматичною коробкою передач. Всі авто регулярно проходять технічне обслуговування.",
    },
    {
      question: "Що робити, якщо я не здав іспит з першого разу?",
      answer: "Не хвилюйтеся, це буває! Ми проаналізуємо ваші помилки та надамо додаткові консультації безкоштовно. Якщо потрібні додаткові практичні заняття, ми пропонуємо їх за спеціальною ціною для наших студентів. Зазвичай після 2-3 додаткових занять студенти успішно складають іспит.",
    },
    {
      question: "Чи можна змінити графік занять?",
      answer: "Так, ми розуміємо, що життєві обставини можуть змінюватися. Теоретичну частину ви плануєте повністю самостійно. Практичні заняття можна перенести, попередивши інструктора за 24 години. Для студентів тарифу 'Преміум' доступний максимально гнучкий індивідуальний графік.",
    },
    {
      question: "Чи надаєте ви документи після закінчення навчання?",
      answer: "Після успішного завершення курсу ви отримуєте свідоцтво про закінчення автошколи встановленого зразка. Цей документ необхідний для допуску до екзамену в сервісному центрі МВС. Також ми надаємо індивідуальну картку водія з відміткою про пройдені години теорії та практики.",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Поширені запитання
              </h1>
              <p className="text-xl text-muted-foreground">
                Відповіді на найчастіші питання про навчання в нашій автошколі
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <Card key={index}>
                    <AccordionItem value={`item-${index}`} className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <span className="text-left font-semibold">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Card>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still have questions? */}
        <section className="py-16 bg-muted/40">
          <div className="container">
            <Card className="max-w-3xl mx-auto border-2 border-primary">
              <CardContent className="py-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Не знайшли відповідь на своє запитання?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Зв'яжіться з нами, і наші фахівці з радістю допоможуть вам
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Зв'язатися з нами</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+380681234567">Подзвонити зараз</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
