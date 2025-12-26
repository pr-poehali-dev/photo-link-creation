import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const phoneNumber = "+79041168223";

  const banks = [
    {
      name: "Т-Банк",
      color: "#FFDD2D",
      textColor: "#000000",
      icon: "Landmark",
      link: `https://www.tbank.ru/rm/user.name/${phoneNumber.slice(1)}/`
    },
    {
      name: "Сбербанк",
      color: "#21A038",
      textColor: "#FFFFFF",
      icon: "Landmark",
      link: `https://pay.sber.ru/${phoneNumber}`
    },
    {
      name: "Альфа-Банк",
      color: "#EF3124",
      textColor: "#FFFFFF",
      icon: "Landmark",
      link: `https://alfa.me/${phoneNumber.slice(1)}`
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center space-y-8 animate-fade-in bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src="https://cdn.poehali.dev/files/111.jpg"
              alt="Владислав Сергеевич"
              className="relative w-40 h-40 rounded-full object-cover shadow-xl ring-4 ring-white"
            />
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Владислав Сергеевич
            </h1>
            <div className="flex flex-col items-center space-y-1 text-muted-foreground" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <a 
                href="tel:+79029755381" 
                className="flex items-center space-x-2 hover:text-primary transition-colors duration-200"
              >
                <Icon name="Phone" size={16} />
                <span>+7 (902) 975-53-81</span>
              </a>
              <a 
                href="mailto:vladislavmaiorov13@yandex.ru" 
                className="flex items-center space-x-2 hover:text-primary transition-colors duration-200"
              >
                <Icon name="Mail" size={16} />
                <span>vladislavmaiorov13@yandex.ru</span>
              </a>
            </div>
          </div>

          <Button
            asChild
            size="sm"
            className="h-10 px-6 text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: '#0088cc',
              color: '#FFFFFF',
              fontFamily: 'Open Sans, sans-serif'
            }}
          >
            <a 
              href="https://t.me/V_S_Maiorov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2"
            >
              <Icon name="Send" size={18} />
              <span>Telegram</span>
            </a>
          </Button>

          <div className="w-full space-y-3 pt-2">
            <p className="text-center text-sm text-muted-foreground mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Выберите банк для перевода
            </p>
            {banks.map((bank, index) => (
              <Button
                key={bank.name}
                asChild
                className="w-full h-14 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: bank.color,
                  color: bank.textColor,
                  fontFamily: 'Montserrat, sans-serif',
                  animationDelay: `${index * 100}ms`
                }}
              >
                <a href={bank.link} className="flex items-center justify-center space-x-3">
                  <Icon name={bank.icon as any} size={24} />
                  <span>{bank.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;