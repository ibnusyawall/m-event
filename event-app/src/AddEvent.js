import React, { Component } from 'react'
import Flatpickr from 'react-flatpickr'

import 'flatpickr/dist/themes/material_green.css'

class AddEvent extends Component {

  state = {
    title: '',
    location: '',
    price: '',
    start_date: '',
    end_date: ''
  }

  handleFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDateChange = (date, selectedDate, config) => {
    this.setState({
      [config._input.name]: selectedDate
    })
  }

  createEvent = () => {
    this.props.storeEvent(this.state)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4 className="text-center mb-5">Tambah Event Baru</h4>
            <div className="form-group">
              <input name="title" onChange={this.handleFieldChange} type="text" className="form-control" placeholder="Title" />
            </div>
            <div className="form-group">
              <input name="location" onChange={this.handleFieldChange} type="text" className="form-control" placeholder="Location" />
            </div>
            <div className="form-group">
              <input name="price" onChange={this.handleFieldChange} type="number" className="form-control" placeholder="Price" />
            </div>
            <div className="form-group">
              <Flatpickr
                className="form-control"
                name="start_date"
                data-enable-time
                placeholder="Select start date and time"
                onChange={this.handleDateChange}
              />
            </div>
            <div className="form-group">
              <Flatpickr
                className="form-control"
                placeholder="Select end date and time"
                name="end_date"
                data-enable-time
                onChange={this.handleDateChange}
              />
            </div>
            <div className="form-group text-center">
              <button onClick={this.createEvent} className="btn btn-success">BuatEvent</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddEvent
