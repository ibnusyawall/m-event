import React, { Component } from 'react';

import Event from './Event';
import AddEvent from './AddEvent';
import ApiService from './apiService';

class App extends Component {
  state = {
    events: [],
    showCreateEventForm: false
  };

  constructor(props) {
    super(props);

    this.apiService = new ApiService();
  }

  componentWillMount() {
    this.fetchEvents();
  }

  fetchEvents = () =>
    this.apiService.getEvents().then(({ data }) => {
      this.setState({
        events: data.events
      });
    });
    
  storeEvent = (data) => {
    this.apiService.storeEvent(data)
      .then(() => {
        this.fetchEvents()
        this.toggleShowCreateEventForm()
      })
  }

  deleteEvent = (id) => {
    this.apiService.deleteEvent(id)
      .then(() => {
        this.fetchEvents()
      })
  }

  toggleShowCreateEventForm = () => {
    this.setState({
      showCreateEventForm: !this.state.showCreateEventForm
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center my-5">Event Manager</h1>
        <div className="text-center mb-5">
          <button
            className={`btn ${this.state.showCreateEventForm ? 'btn-danger' : 'btn-info'}`}
            onClick={this.toggleShowCreateEventForm}
          >
            {this.state.showCreateEventForm ? 'Batal' : 'Buat Event Baru'}
          </button>
        </div>
        {this.state.showCreateEventForm && <AddEvent storeEvent={this.storeEvent} />}
        {this.state.events.map((event) => <Event deleteEvent={this.deleteEvent} event={event} key={event.id} />)}
      </div>
    );
  }
}

export default App;
