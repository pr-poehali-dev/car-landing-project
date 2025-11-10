import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
        <a href="/" className="flex items-center gap-2">
          <Icon name="Zap" className="text-primary" size={32} />
          <span className="text-2xl font-bold tracking-wider">FUTURE DRIVE</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="/" className="hover:text-primary transition-colors">Главная</a>
          <a href="/#gallery" className="hover:text-primary transition-colors">Модели</a>
          <a href="/#calculator" className="hover:text-primary transition-colors">Кредит</a>
          <a href="/contacts" className="text-primary">Контакты</a>
        </nav>
      </div>

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
              СВЯЖИТЕСЬ С НАМИ
            </h1>
            <p className="text-xl text-muted-foreground">
              Мы ответим на все ваши вопросы
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Телефон</h3>
              <p className="text-muted-foreground mb-2">+7 (495) 123-45-67</p>
              <p className="text-muted-foreground">+7 (495) 123-45-68</p>
              <p className="text-sm text-muted-foreground mt-4">Пн-Пт: 9:00 - 21:00<br />Сб-Вс: 10:00 - 18:00</p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <p className="text-muted-foreground mb-2">info@futuredrive.ru</p>
              <p className="text-muted-foreground">sales@futuredrive.ru</p>
              <p className="text-sm text-muted-foreground mt-4">Ответим в течение 24 часов</p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Адрес</h3>
              <p className="text-muted-foreground mb-2">г. Москва</p>
              <p className="text-muted-foreground">ул. Инновационная, 1</p>
              <p className="text-sm text-muted-foreground mt-4">Удобная парковка для гостей</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/80 backdrop-blur-md border-2 border-border">
              <h2 className="text-3xl font-bold mb-6">Напишите нам</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg mb-2 block">Имя *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    required
                    className="h-12 bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-lg mb-2 block">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                    className="h-12 bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-lg mb-2 block">Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    className="h-12 bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-lg mb-2 block">Сообщение *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите, чем мы можем помочь..."
                    required
                    rows={5}
                    className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-background font-semibold text-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border">
                <h2 className="text-3xl font-bold mb-6">Как нас найти</h2>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-6">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=37.617644,55.755819&z=16&pt=37.617644,55.755819,pm2rdm"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ position: 'relative' }}
                  ></iframe>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Car" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold mb-1">На автомобиле</p>
                      <p className="text-sm text-muted-foreground">Бесплатная парковка на 50 мест</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Train" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold mb-1">На метро</p>
                      <p className="text-sm text-muted-foreground">5 минут пешком от м. Площадь Революции</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary/20 to-transparent border-2 border-primary/50">
                <h3 className="text-2xl font-bold mb-4">Запишитесь на тест-драйв</h3>
                <p className="text-muted-foreground mb-6">
                  Испытайте автомобиль мечты на дороге
                </p>
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-background font-semibold">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на тест-драйв
                </Button>
              </Card>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/30 backdrop-blur-sm border border-border text-center">
              <Icon name="Clock" className="text-primary mx-auto mb-3" size={40} />
              <h4 className="font-semibold mb-2">Быстрый ответ</h4>
              <p className="text-sm text-muted-foreground">Отвечаем на обращения в течение 2 часов</p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border border-border text-center">
              <Icon name="Shield" className="text-primary mx-auto mb-3" size={40} />
              <h4 className="font-semibold mb-2">Конфиденциальность</h4>
              <p className="text-sm text-muted-foreground">Ваши данные под надёжной защитой</p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border border-border text-center">
              <Icon name="Headphones" className="text-primary mx-auto mb-3" size={40} />
              <h4 className="font-semibold mb-2">Поддержка 24/7</h4>
              <p className="text-sm text-muted-foreground">Всегда на связи для наших клиентов</p>
            </Card>
          </div>
        </div>
      </div>

      <footer className="py-16 px-4 border-t border-border">
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

export default Contacts;
