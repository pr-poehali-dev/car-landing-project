import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCar, setSelectedCar] = useState(0);
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [loanTerm, setLoanTerm] = useState(36);
  const [interestRate] = useState(9.9);

  const cars = [
    {
      id: 1,
      name: 'AERO GT',
      price: 8500000,
      image: 'https://cdn.poehali.dev/projects/1456f8db-c14d-4fa6-9137-9b8771ca5859/files/4ebb39b5-1273-4a66-aed9-443fceefc864.jpg',
      specs: { power: '650 л.с.', speed: '320 км/ч', acceleration: '2.9 сек' }
    },
    {
      id: 2,
      name: 'ELECTRO X',
      price: 6200000,
      image: 'https://cdn.poehali.dev/projects/1456f8db-c14d-4fa6-9137-9b8771ca5859/files/b089267b-3ff1-461b-adcb-0596fe2dab59.jpg',
      specs: { power: '480 л.с.', speed: '210 км/ч', acceleration: '4.2 сек' }
    },
    {
      id: 3,
      name: 'CARBON R',
      price: 9800000,
      image: 'https://cdn.poehali.dev/projects/1456f8db-c14d-4fa6-9137-9b8771ca5859/files/fac36463-b681-46da-979f-34d7f7193ae0.jpg',
      specs: { power: '750 л.с.', speed: '340 км/ч', acceleration: '2.5 сек' }
    }
  ];

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
                    (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return Math.round(payment);
  };

  const totalPayment = calculateMonthlyPayment() * loanTerm;
  const overpayment = totalPayment - loanAmount;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)]"></div>
        
        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <span className="text-2xl font-bold tracking-wider">FUTURE DRIVE</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#gallery" className="hover:text-primary transition-colors">Модели</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Кредит</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>

        <div className="text-center z-10 px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
            БУДУЩЕЕ СКОРОСТИ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ощутите революцию автомобильного дизайна и технологий следующего поколения
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-background font-semibold px-8 py-6 text-lg">
            <Icon name="ArrowRight" className="mr-2" size={20} />
            Исследовать коллекцию
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-primary" size={32} />
        </div>
      </div>

      <section id="gallery" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold mb-4">НАША КОЛЛЕКЦИЯ</h2>
          <p className="text-muted-foreground text-lg">Выберите автомобиль мечты</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <Card 
              key={car.id}
              className="group cursor-pointer overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 bg-card/50 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCar(index)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <div className="flex gap-4 text-sm">
                      <span><Icon name="Zap" className="inline mr-1" size={16} />{car.specs.power}</span>
                      <span><Icon name="Gauge" className="inline mr-1" size={16} />{car.specs.speed}</span>
                      <span><Icon name="Timer" className="inline mr-1" size={16} />{car.specs.acceleration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                <p className="text-primary text-3xl font-bold mb-4">
                  {car.price.toLocaleString('ru-RU')} ₽
                </p>
                <Button className="w-full bg-primary/10 hover:bg-primary hover:text-background border border-primary">
                  Подробнее
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-card/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">КРЕДИТНЫЙ КАЛЬКУЛЯТОР</h2>
            <p className="text-muted-foreground text-lg">Рассчитайте ежемесячный платёж</p>
          </div>

          <Card className="p-8 border-2 border-border bg-card/80 backdrop-blur-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <Label className="text-lg mb-3 block">Стоимость автомобиля</Label>
                  <Input 
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="text-2xl h-14 bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <Label className="text-lg mb-3 block">Срок кредита: {loanTerm} мес.</Label>
                  <Slider
                    value={[loanTerm]}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    min={12}
                    max={84}
                    step={12}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>12 мес.</span>
                    <span>84 мес.</span>
                  </div>
                </div>

                <div>
                  <Label className="text-lg mb-3 block">Процентная ставка</Label>
                  <div className="text-3xl font-bold text-primary">{interestRate}%</div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6 p-6 bg-gradient-to-br from-primary/10 to-transparent rounded-lg border border-primary/30">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Ежемесячный платёж</p>
                  <p className="text-5xl font-bold text-primary mb-6">
                    {calculateMonthlyPayment().toLocaleString('ru-RU')} ₽
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Сумма кредита:</span>
                    <span className="font-semibold">{loanAmount.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Общая сумма:</span>
                    <span className="font-semibold">{totalPayment.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Переплата:</span>
                    <span className="font-semibold text-primary">{overpayment.toLocaleString('ru-RU')} ₽</span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-background font-semibold h-12 mt-4">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Оформить заявку
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer id="contact" className="py-16 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Zap" className="text-primary" size={28} />
              <span className="text-xl font-bold">FUTURE DRIVE</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Революция в мире автомобилей
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@futuredrive.ru
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Адрес</h4>
            <p className="text-sm text-muted-foreground">
              г. Москва<br />
              ул. Инновационная, 1
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <Icon name="Instagram" className="cursor-pointer hover:text-primary transition-colors" size={20} />
              <Icon name="Youtube" className="cursor-pointer hover:text-primary transition-colors" size={20} />
              <Icon name="Facebook" className="cursor-pointer hover:text-primary transition-colors" size={20} />
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2024 Future Drive. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;
