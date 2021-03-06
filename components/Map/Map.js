import React, { Component } from 'react'
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'

import ControlPanel from './control-panel'
import CityPin from './city-pin'
import CityInfo from './city-info'

import CITIES from '~/static/json/cities.json'

const token = 'pk.eyJ1IjoiY2FpaXppbGF6IiwiYSI6ImNqODE4YXFyZDZsMGwyd3JyMGN5MTRkdG8ifQ.NAy2vHn0JLuDwSDZ-eI_SQ'

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
        width: 500,
        height: 500,
      },
      popupInfo: null
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize)
    this._resize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize)
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: this.props.height || window.innerHeight
      }
    })
  }

  _updateViewport = (viewport) => {
    this.setState({ viewport })
  }

  _renderCityMarker = (city, index) => {
    return (
      <Marker key={`marker-${index}`}
        longitude={city.longitude}
        latitude={city.latitude} >
        <CityPin size={20} onClick={() => this.setState({ popupInfo: city })} />
      </Marker>
    )
  }

  _renderPopup() {
    const { popupInfo } = this.state

    return popupInfo && (
      <Popup tipSize={5}
        anchor="top"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        onClose={() => this.setState({ popupInfo: null })} >
        <CityInfo info={popupInfo} />
      </Popup>
    )
  }
  render() {
    return (
      <div className={'MapGLContainer'}>
        <MapGL
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={token} >

          {CITIES.map(this._renderCityMarker)}

          {this._renderPopup()}

          <div className="nav" style={navStyle}>
            <NavigationControl onViewportChange={this._updateViewport} />
          </div>

          <ControlPanel containerComponent={this.props.containerComponent} />

        </MapGL>
      </div>
    )
  }
}
