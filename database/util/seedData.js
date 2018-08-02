const faker = require('faker');
const { propertyListing, amenities } = require('../models.js');

const propertyListingData = [
  {
    property_listing: 'Koreatown Condo',
    host_name: 'John Doe'
  }
];
const amenitiesData = [
  {
    // just one data for now. change to multiple after it works
    property_listing: 'Koreatown Condo',
    host_name: 'John Doe',
    cookware_kitchen_utensils: faker.random.boolean(),
    hair_dryer: faker.random.boolean(),
    dish_washer: faker.random.boolean(),
    cable_tv: faker.random.boolean(),
    alarm_clock: faker.random.boolean(),
    stereo: faker.random.boolean(),
    toilet: faker.random.boolean(),
    double_bed: faker.random.boolean(),
    tv: faker.random.boolean(),
    bathroom: faker.random.boolean(),
    balcony: faker.random.boolean(),
    hot_tub: faker.random.boolean(),
    oven: faker.random.boolean(),
    microwave: faker.random.boolean(),
    fridge_freezer: faker.random.boolean(),
    air_conditioning: faker.random.boolean(),
    sofa: faker.random.boolean(),
    swimming_pool: faker.random.boolean(),
    shower: faker.random.boolean(),
    bathtub: faker.random.boolean(),
    wifi: faker.random.boolean(),
    towels: faker.random.boolean(),
    en_suite_bathroom: faker.random.boolean(),
    chairs: faker.random.boolean(),
    queen_size_bed: faker.random.boolean(),
    bed_linen: faker.random.boolean(),
    ironing_board: faker.random.boolean(),
    restaurant: faker.random.boolean(),
    coffee_maker: faker.random.boolean(),
    free_parking: faker.random.boolean(),
    golf: faker.random.boolean(),
    indoor_pool: faker.random.boolean(),
    outdoor_pool: faker.random.boolean(),
    shopping_mall: faker.random.boolean(),
    heating: faker.random.boolean()
  }
];

propertyListing.sync({ force: false }).then(() => {
  propertyListing.bulkCreate(propertyListingData).then(() => {
    amenities.sync({ force: false }).then(() => {
      amenities.bulkCreate(amenitiesData).then(() => {
        console.log('propertyListing & amenities SEEDED!');
      });
    });
  });
});
