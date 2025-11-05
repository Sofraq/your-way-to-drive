import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div>
              <span className="font-bold text-xl text-foreground">DriveZone</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Сучасна онлайн автошкола з професійними інструкторами та новим автопарком.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Навігація</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Про нас
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Курси
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Ціни
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-4">Допомога</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>drivezoneua@hotmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>м. Київ, вул. Хрещатик, 15 (центр міста)</span>
              </li>
            </ul>
            <div className="flex flex-col gap-2 mt-4">
              <Button asChild size="sm" className="w-full">
                <a 
                  href="https://t.me/Drive_Zone_ua"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram: Юлія
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="w-full">
                <a 
                  href="https://t.me/Manager_diana_ua"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram: Діана
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DriveZone. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
