import { useState } from 'react';
import TabsItem from '../tabs-item/tabs-item';
import { CITIES, DEFAULT_CITIES } from '../../consts';

function Tabs(): JSX.Element {
  const [currentTabs, setCurrentTabs] = useState(DEFAULT_CITIES);
  const onClickTabsItem = (city: string) => setCurrentTabs(city);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES && CITIES.length > 0 && CITIES.map((city, index) => (
              <TabsItem
                key={String(city) + String(index)}
                city={city}
                isActive={currentTabs === city}
                changeCurrentTabs={onClickTabsItem}
              />
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
