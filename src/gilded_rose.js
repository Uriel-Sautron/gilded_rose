/* eslint-disable no-fallthrough */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {

      item.updateQuality();
      
      // switch (item.name) {

      //   case 'Sulfuras, Hand of Ragnaros':
      //     item.sellIn += 0
      //     item.quality += 0
      //     break
        
      //     case 'Backstage passes to a TAFKAL80ETC concert':
      //       if (item.sellIn <= 0) {item.quality = 0}
      //       if (item.sellIn <= 5) {item.quality += 3}
      //       else if (item.sellIn <= 10) {item.quality += 2}
      //       else if (item.sellIn > 10) {item.quality += 1}
      //       if (item.quality > 50) {item.quality = 50}
      //       item.sellIn <= 0 ? item.sellIn = 0 : item.sellIn -= 1;
      //       break
          
      //     case 'Aged Brie':
      //       if (item.sellIn <= 5) {item.quality += 3}
      //       else if (item.sellIn <= 10) {item.quality += 2}
      //       else if (item.sellIn > 10) {item.quality += 1}
      //       if (item.quality > 50) {item.quality = 50}
      //       item.sellIn <= 0 ? item.sellIn = 0 : item.sellIn -= 1;
      //       break

      //   default:
      //     if (/^Conjured/.test(item.name)) {
      //           item.sellIn <= 0 ? item.quality -= 4 : item.quality -= 2;
      //         } else {
      //           item.sellIn <= 0 ? item.quality -= 2 : item.quality -= 1;
      //         }
      //         item.sellIn <= 0 ? item.sellIn = 0 : item.sellIn -= 1;
              
      // }

      // if (item.name === 'Sulfuras, Hand of Ragnaros') {
      //   item.sellIn += 0
      //   item.quality += 0
      // } 

      // else if (item.name === 'Aged Brie' || item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      //   if (item.name === 'Backstage passes to a TAFKAL80ETC concert' && item.sellIn <= 0) {item.quality = 0}
      //   else if (item.sellIn <= 5) {item.quality += 3}
      //   else if (item.sellIn <= 10) {item.quality += 2}
      //   else if (item.sellIn > 10) {item.quality += 1}
      //   if (item.quality > 50) {item.quality = 50}
      //   item.sellIn <= 0 ? item.sellIn = 0 : item.sellIn -= 1; 
      // }

      // else {
      //   if (/^Conjured/.test(item.name)) {
      //     item.sellIn <= 0 ? item.quality -= 4 : item.quality -= 2;
      //   } else {
      //     item.sellIn <= 0 ? item.quality -= 2 : item.quality -= 1;
      //   }
      //   item.sellIn <= 0 ? item.sellIn = 0 : item.sellIn -= 1;
      // }
  }

    return this.items;
  }
}
export default Shop;
