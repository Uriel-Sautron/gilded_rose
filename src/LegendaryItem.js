/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
import Item from './Item';

class LegendaryItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {}
}

export default LegendaryItem;
