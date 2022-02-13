import React, { Component } from 'react';
import items from "../data"

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  }

  // get Data
  componentDidMount() {
    let rooms = this.formatData(items);

    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = e.target.value;

    console.log(type, name, value);
  }

  filterRoom = () => {
    console.log("Hello");
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id }

      return room;
    })

    return tempItems;
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, handleChange: this.handleChange }}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomConsumer, RoomProvider };