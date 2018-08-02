import React, { Component } from 'react';
import Modal from 'react-modal';
import styles from './ModalComponent.css';
import axios from 'axios';
import aircon from '../styles/images/air-conditioner.png';
import bed from '../styles/images/bed.png';
import hairdryer from '../styles/images/hair-dryer.png';
import television from '../styles/images/television.png';
import toilet from '../styles/images/toilet.png';
import wifi from '../styles/images/wifi.png';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default class ModalComponent extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      propertyListing: 'Koreatown Condo',
      amenities: {
        air_conditioning: false,
        alarm_clock: false,
        balcony: false,
        bathroom: false,
        bathtub: false,
        bed_linen: false,
        cable_tv: false,
        chairs: false,
        coffee_maker: false,
        cookware_kitchen_utensils: false,
        createdAt: '',
        dish_washer: false,
        double_bed: false,
        en_suite_bathroom: false,
        free_parking: false,
        fridge_freezer: false,
        golf: false,
        hair_dryer: false,
        heating: false,
        host_name: 'John Doe',
        hot_tub: false,
        id: '',
        indoor_pool: false,
        ironing_board: false,
        microwave: false,
        outdoor_pool: false,
        oven: false,
        property_listing: 'Koreatown Condo',
        queen_size_bed: false,
        restaurant: false,
        shopping_mall: false,
        shower: false,
        sofa: false,
        stereo: false,
        swimming_pool: false,
        toilet: false,
        towels: false,
        tv: false,
        updatedAt: '',
        wifi: false
      }
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.fetchAmenities();
  }

  fetchAmenities() {
    let option = {
      params: {
        propertyListing: this.state.propertyListing
      },
      headers: { 'Access-Control-Allow-Origin': '*' }
    };
    // let amenities = { ...this.state.amenities };
    axios
      .get('http://localhost:3012/api/amenities', option)
      .then(results => {
        let amen = results.data;

        this.setState({
          amenities: {
            air_conditioning: true,
            alarm_clock: amen.alarm_clock,
            balcony: amen.balcony,
            bathroom: true,
            bathtub: amen.bathtub,
            bed_linen: amen.bed_linen,
            cable_tv: amen.cable_tv,
            chairs: amen.chairs,
            coffee_maker: amen.coffee_maker,
            cookware_kitchen_utensils: amen.cookware_kitchen_utensils,
            createdAt: amen.createdAt,
            dish_washer: amen.dish_washer,
            double_bed: amen.double_bed,
            en_suite_bathroom: amen.en_suite_bathroom,
            free_parking: amen.free_parking,
            fridge_freezer: amen.fridge_freezer,
            golf: amen.golf,
            hair_dryer: true,
            heating: amen.heating,
            host_name: amen.host_name,
            hot_tub: amen.hot_tub,
            id: amen.id,
            indoor_pool: amen.indoor_pool,
            ironing_board: amen.ironing_board,
            microwave: amen.microwave,
            outdoor_pool: amen.outdoor_pool,
            oven: amen.oven,
            property_listing: 'Koreatown Condo',
            queen_size_bed: true,
            restaurant: amen.restaurant,
            shopping_mall: amen.shopping_mall,
            shower: amen.shower,
            sofa: amen.sofa,
            stereo: amen.stereo,
            swimming_pool: amen.swimming_pool,
            toilet: amen.toilet,
            towels: amen.toilet,
            tv: true,
            updatedAt: amen.updatedAt,
            wifi: true
          }
        });
      })
      .catch(err => console.log(err));
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const xSymbol = '\u2573';
    console.log('this is this.state.amenities', this.state.amenities);
    let amen = this.state.amenities;
    let amencount = 0;
    for (let a in amen) {
      if (amen[a] === true) {
        amencount++;
      }
    }

    return (
      <div>
        <hr className={styles.hr} />
        <div className={styles.head}>Amenities</div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.maintableright}>
                {amen.air_conditioning ? (
                  <div>
                    <img className={styles.images} src={aircon} /> Air
                    Conditioning
                  </div>
                ) : null}
              </td>
              <td className={styles.maintableleft}>
                {amen.bathroom ? (
                  <div>
                    <img className={styles.images} src={toilet} /> Bathroom
                  </div>
                ) : null}
              </td>
            </tr>
            <tr>
              <td className={styles.maintableright}>
                {amen.tv ? (
                  <div>
                    <img className={styles.images} src={television} /> TV
                  </div>
                ) : null}
              </td>
              <td className={styles.maintableleft}>
                {amen.queen_size_bed ? (
                  <div>
                    <img className={styles.images} src={bed} /> Queen Sized Bed
                  </div>
                ) : null}
              </td>
            </tr>
            <tr>
              <td className={styles.maintableright}>
                {amen.wifi ? (
                  <div>
                    <img className={styles.images} src={wifi} /> Wifi
                  </div>
                ) : null}
              </td>
              <td className={styles.maintableleft}>
                {amen.hair_dryer ? (
                  <div>
                    <img className={styles.images} src={hairdryer} /> Hair Dryer
                  </div>
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.hover}>
          <a className={styles.openup} onClick={this.openModal}>
            Show all {amencount} amenities
          </a>
          <hr className={styles.hr} />
        </div>
        <Modal
          className={styles.Modal}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <div className={styles.modalgut}> */}
          <button className={styles.exit} onClick={this.closeModal}>
            {xSymbol}
          </button>
          <h2
            className={styles.subtitle}
            ref={subtitle => (this.subtitle = subtitle)}
          >
            Amenities
          </h2>
          <div className={styles.modalsubtitle}>Basic</div>

          {amen.wifi && (
            <div className={styles.modalamen}>
              Wifi
              <hr className={styles.hr} />
            </div>
          )}

          {amen.air_conditioning && (
            <div className={styles.modalamen}>
              Air Conditioning
              <hr className={styles.hr} />
            </div>
          )}

          {amen.cable_tv && (
            <div className={styles.modalamen}>
              Cable TV
              <hr className={styles.hr} />
            </div>
          )}

          {amen.heating && (
            <div className={styles.modalamen}>
              Heating
              <hr className={styles.hr} />
            </div>
          )}

          {amen.hair_dryer && (
            <div className={styles.modalamen}>
              Hair Dryer
              <hr className={styles.hr} />
            </div>
          )}

          {amen.balcony && (
            <div className={styles.modalamen}>
              Balcony
              <hr className={styles.hr} />
            </div>
          )}

          {amen.stereo && (
            <div className={styles.modalamen}>
              Stereo
              <hr className={styles.hr} />
            </div>
          )}

          <div className={styles.modalsubtitle}>Facilities</div>

          {amen.free_parking && (
            <div className={styles.modalamen}>
              Free Parking
              <hr className={styles.hr} />
            </div>
          )}

          {amen.golf && (
            <div className={styles.modalamen}>
              Golf Course
              <hr className={styles.hr} />
            </div>
          )}

          {amen.indoor_pool && (
            <div className={styles.modalamen}>
              Indoor Pool
              <hr className={styles.hr} />
            </div>
          )}

          {amen.outdoor_pool && (
            <div className={styles.modalamen}>
              Outdoor Pool
              <hr className={styles.hr} />
            </div>
          )}

          {amen.shopping_mall && (
            <div className={styles.modalamen}>
              Shopping Mall
              <hr className={styles.hr} />
            </div>
          )}

          {amen.restaurant && (
            <div className={styles.modalamen}>
              Restaurants Nearby
              <hr className={styles.hr} />
            </div>
          )}

          <div className={styles.modalsubtitle}>Dining</div>

          {amen.coffee_maker && (
            <div className={styles.modalamen}>
              Coffee Maker
              <hr className={styles.hr} />
            </div>
          )}

          {amen.cookware_kitchen_utensils && (
            <div className={styles.modalamen}>
              Kitchen Utensils
              <hr className={styles.hr} />
            </div>
          )}

          {amen.dish_washer && (
            <div className={styles.modalamen}>
              Dishwasher
              <hr className={styles.hr} />
            </div>
          )}

          {amen.fridge_freezer && (
            <div className={styles.modalamen}>
              Freezer
              <hr className={styles.hr} />
            </div>
          )}

          {amen.oven && (
            <div className={styles.modalamen}>
              Oven
              <hr className={styles.hr} />
            </div>
          )}

          {amen.microwave && (
            <div className={styles.modalamen}>
              Microwave
              <hr className={styles.hr} />
            </div>
          )}

          <div className={styles.modalsubtitle}>Bed and bath</div>

          {amen.bed_linen && (
            <div className={styles.modalamen}>
              Bed Linen
              <hr className={styles.hr} />
            </div>
          )}

          {amen.double_bed && (
            <div className={styles.modalamen}>
              Double Bed
              <hr className={styles.hr} />
            </div>
          )}

          {amen.queen_size_bed && (
            <div className={styles.modalamen}>
              Queen Bed
              <hr className={styles.hr} />
            </div>
          )}

          {amen.en_suite_bathroom && (
            <div className={styles.modalamen}>
              En Suite Bathroom
              <hr className={styles.hr} />
            </div>
          )}

          {amen.towels && (
            <div className={styles.modalamen}>
              Towels
              <hr className={styles.hr} />
            </div>
          )}

          {amen.hot_tub && (
            <div className={styles.modalamen}>
              Hottub
              <hr className={styles.hr} />
            </div>
          )}

          {amen.alarm_clock && (
            <div className={styles.modalamen}>
              Alarm Clock
              <hr className={styles.hr} />
            </div>
          )}

          {amen.ironing_board && (
            <div className={styles.modalamen}>
              Iron/Iron Board
              <hr className={styles.hr} />
            </div>
          )}

          <form />
          {/* </div> */}
        </Modal>
      </div>
    );
  }
}
