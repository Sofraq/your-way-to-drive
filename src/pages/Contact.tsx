import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Дякуємо за заявку!",
      description: "Ми зв'яжемося з вами найближчим часом.",
    });
    
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакти</h1>
              <p className="text-xl text-muted-foreground">
                Є питання? Зв'яжіться з нами зручним для вас способом. 
                Ми завжди раді допомогти!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Телефон</h3>
                        <a 
                          href="tel:+380681234567" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +380 (68) 123-45-67
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Пн-Пт: 9:00 - 18:00<br />
                          Сб: 10:00 - 15:00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <a 
                          href="mailto:info@avtoshkola.ua" 
                          className="text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          info@avtoshkola.ua
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Відповідаємо протягом 24 годин
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Адреса</h3>
                        <p className="text-muted-foreground">
                          м. Київ<br />
                          вул. Хрещатик, 1<br />
                          офіс 301
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Месенджери</h3>
                    <div className="space-y-2">
                      <a 
                        href="https://t.me/avtoshkola" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:opacity-80 transition-opacity"
                      >
                        📱 Telegram: @avtoshkola
                      </a>
                      <a 
                        href="viber://chat?number=+380681234567" 
                        className="block hover:opacity-80 transition-opacity"
                      >
                        📞 Viber: +380 (68) 123-45-67
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Залишіть заявку</CardTitle>
                    <p className="text-muted-foreground">
                      Заповніть форму і наш менеджер зв'яжеться з вами для консультації
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ім'я *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Введіть ваше ім'я"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+380 (XX) XXX-XX-XX"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Повідомлення</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Розкажіть, що вас цікавить..."
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="mr-2 h-5 w-5" />
                        Відправити заявку
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        Натискаючи кнопку, ви погоджуєтесь з{" "}
                        <a href="#" className="text-primary hover:underline">
                          політикою конфіденційності
                        </a>
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-16 bg-muted/40">
          <div className="container">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video w-full bg-muted flex items-center justify-center rounded-lg overflow-hidden">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      м. Київ, вул. Хрещатик, 1
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Карта розташування (інтеграція з Google Maps)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Маєте питання? Телефонуйте зараз!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Наші консультанти відповідають цілодобово
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <a href="tel:+380681234567">
                <Phone className="mr-2 h-5 w-5" />
                +380 (68) 123-45-67
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
