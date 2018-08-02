const faker = require('faker');
const db = require('../database/models');

const controller = {
  get: (req, res) => {
    const { propertyListing } = req.query;
    db.amenities
      .findAll({
        where: { property_listing: propertyListing }
      })
      .then(amenities => {
        if (amenities) {
          res.status(200).send(amenities[0].dataValues);
          // console.log('this is amenities', amenities[0].dataValues);
        } else {
          res.status(404).send('Host or Property Does Not Exist');
        }
      });
  },

  post: (req, res) => {
    // const {
    //   propertyListing
    //   hostName,
    //   cookwareKitchenUtensils,
    //   hairDryer,
    //   dishWasher,
    //   cableTv,
    //   alarmClock,
    //   stereo,
    //   toilet,
    //   doubleBed,
    //   tv,
    //   bathroom,
    //   balcony,
    //   hotTub,
    //   oven,
    //   microwave,
    //   fridgeFreezer,
    //   airConditioning,
    //   sofa,
    //   swimmingPool,
    //   shower,
    //   bathtub,
    //   wifi,
    //   towels,
    //   enSuiteBathroom,
    //   chairs,
    //   queenSizeBed,
    //   bedLinen,
    //   ironingBoard,
    //   restaurant,
    //   coffeeMaker,
    //   freeParking,
    //   golf,
    //   indoorPool,
    //   outdoorPool,
    //   shoppingMall,
    //   heating
    // } = req.body;
    db.amenities
      .create({
        property_listing: faker.address.streetName(),
        host_name: faker.name.findName(),
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
      })
      .then(amenities => {
        res.status(201).send(amenities);
      })
      .catch(err => console.error(err));
  }
};

module.exports = controller;
