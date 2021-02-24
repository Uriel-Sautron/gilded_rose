/* eslint-disable no-continue */
/* eslint-disable no-fallthrough */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
import LegendaryItem from './LegendaryItem'

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item instanceof LegendaryItem) continue;
      item.updateQuality();
      item.sellIn -= 1;
  }

    return this.items;
  }
}
export default Shop;
