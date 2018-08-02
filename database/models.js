const Sequelize = require('sequelize');
const connection = require('./index');

const propertyListing = connection.define('propertyListing', {
  property_listing: {
    type: Sequelize.STRING,
    allowNull: false
  },
  host_name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
const amenities = connection.define('amenities', {
  property_listing: {
    type: Sequelize.STRING,
    allowNull: false
  },
  host_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cookware_kitchen_utensils: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  hair_dryer: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  dish_washer: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  cable_tv: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  alarm_clock: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  stereo: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  toilet: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  double_bed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  tv: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  bathroom: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  balcony: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  hot_tub: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  oven: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  microwave: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  fridge_freezer: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  air_conditioning: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  sofa: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  swimming_pool: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  shower: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  bathtub: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  wifi: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  towels: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  en_suite_bathroom: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  chairs: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  queen_size_bed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  bed_linen: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  ironing_board: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  restaurant: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  coffee_maker: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  free_parking: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  golf: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  indoor_pool: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  outdoor_pool: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  shopping_mall: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  heating: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

connection
  .sync({ force: false })
  .then(() => console.log('MYSQL Database Successfully Synced!'))
  .catch(err => console.log(`MYSQL Database Sync Failed. Reason: ${err}`));

module.exports = { propertyListing, amenities };
