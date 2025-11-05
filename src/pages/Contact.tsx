import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const managers = [
    {
      name: "Юлія",
      username: "Drive_Zone_ua",
      role: "Менеджер",
    },
    {
      name: "Діана",
      username: "Manager_diana_ua",
      role: "Менеджер",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакти</h1>
              <p className="text-xl text-muted-foreground">
                Зв'яжіться з нашими менеджерами в Telegram для консультації та запису на навчання
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Managers */}
                {managers.map((manager) => (
                  <Card key={manager.username} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="pt-6">
                      <div className="text-center space-y-4">
                        <div>
                          <h3 className="font-semibold text-xl mb-1">{manager.name}</h3>
                          <p className="text-sm text-muted-foreground">{manager.role}</p>
                        </div>
                        <Button asChild className="w-full" size="lg">
                          <a 
                            href={`https://t.me/${manager.username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Send className="mr-2 h-5 w-5" />
                            Написати в Telegram
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Email and Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <a 
                          href="mailto:drivezoneua@hotmail.com" 
                          className="text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          drivezoneua@hotmail.com
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
                          вул. Хрещатик, 15<br />
                          (центр міста)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готові розпочати навчання?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Наші менеджери відповідають цілодобово в Telegram
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <a 
                  href="https://t.me/Drive_Zone_ua"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Написати Юлії
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <a 
                  href="https://t.me/Manager_diana_ua"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Написати Діані
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
