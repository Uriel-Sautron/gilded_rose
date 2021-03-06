/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import Item from './Item';

class RareItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (
      this.sellIn <= 0 &&
      this.name === 'Backstage passes to a TAFKAL80ETC concert'
    ) {
      this.quality = 0;
      return;
    }
    if (this.sellIn <= 5) {
      this.quality += 3;
    } else if (this.sellIn <= 10) {
      this.quality += 2;
    } else if (this.sellIn > 10) {
      this.quality += 1;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}

export default RareItem;
