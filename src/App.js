import React, { useState } from 'react';
import './App.css';
import AnimalCard from './components/AnimalCard';

function App() {
  const [animals] = useState([
    {
      id: 1,
      name: 'Лев',
      image: 'https://zoographia.ru/upload/iblock/d09/yllh6km9i3bqxbs8dp2qs12fbflpf5na.jpg',
      description: 'Царь зверей, мощный хищник саванны'
      
    },
    {
      id: 2,
      name: 'Слон',
      image: 'https://wibes-03.wbbasket.ru/6e48abeb-9922-442a-bc23-86b21e5d934a/kids-preview.jpg',
      description: 'Самое крупное наземное животное, но боится мышей'
    },
    {
      id: 3,
      name: 'Жираф',
      image: 'https://s-english.ru/images/albion/272.jpg',
      description: 'Самое высокое животное с длинной шеей'
    },
    {
      id: 4,
      name: 'Зебра',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/ac/5d/6a/zebra.jpg',
      description: 'Лошадь с чёрно-белыми или бело-чёрными полосками'
    },
    {
      id: 5,
      name: 'Панда',
      image: 'https://static.aviasales.com/psgr-v2/ru/kuda-poehat-posmotret-na-pandu/panda_ec149c30a2.jpg?',
      description: 'Китайский бро с чёрно-белой окраской'
    },
    {
      id: 6,
      name: 'Коала',
      image: 'https://mns.ams3.digitaloceanspaces.com/ru/2020/01/small_koala_1110229356.jpg',
      description: 'Сумчатое животное из Австралии'
    },
    {
      id: 7,
      name: 'Утконос',
      image: 'https://www.ecosever.ru/image/preview/article/8/2/0/57820_w.jpeg',
      description: 'Максимально странное существо с другой планеты'
    },
    {
      id: 8,
      name: 'Голубой ара',
      image: 'https://faunazoo.ru/wp-content/uploads/2018/03/%D0%93%D0%BE%D0%BB%D1%83%D0%B1%D0%BE%D0%B9-%D0%B0%D1%80%D0%B0.jpg',
      description: 'К сожалению, исчезли с нашей планеты'
    }
  ]);

  return (
    <div className="App">
      <header className="app-header">
        <h1>🦁 Карточки животных 🦁</h1>
        <p>Посмотрите на разнообразие животных нашей планеты</p>
      </header>
      
      <main className="animals-container">
        {animals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </main>

      <footer className="app-footer">
        <p>© 2025 Приложение "Карточки животных"</p>
      </footer>
    </div>
  );
}

export default App;