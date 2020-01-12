import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

let arr = [
  {
    state: "Alaska",
    latitude: 61.385,
    longitude: -152.2683
  },
  {
    state: "Alabama",
    latitude: 32.799,
    longitude: -86.8073
  },
  {
    state: "Arkansas",
    latitude: 34.9513,
    longitude: -92.3809
  },
  {
    state: "Arizona",
    latitude: 33.7712,
    longitude: -111.3877
  },
  {
    state: "California",
    latitude: 36.17,
    longitude: -119.7462
  },
  {
    state: "Colorado",
    latitude: 39.0646,
    longitude: -105.3272
  },
  {
    state: "Connecticut",
    latitude: 41.5834,
    longitude: -72.7622
  },
  {
    state: "Delaware",
    latitude: 39.3498,
    longitude: -75.5148
  },
  {
    state: "Florida",
    latitude: 27.8333,
    longitude: -81.717
  },
  {
    state: "Georgia",
    latitude: 32.9866,
    longitude: -83.6487
  },
  {
    state: "Hawaii",
    latitude: 21.1098,
    longitude: -157.5311
  },
  {
    state: "Iowa",
    latitude: 42.0046,
    longitude: -93.214
  },
  {
    state: "Idaho",
    latitude: 44.2394,
    longitude: -114.5103
  },
  {
    state: "Illinois",
    latitude: 40.3363,
    longitude: -89.0022
  },
  {
    state: "Indiana",
    latitude: 39.8647,
    longitude: -86.2604
  },
  {
    state: "Kansas",
    latitude: 38.5111,
    longitude: -96.8005
  },
  {
    state: "Kentucky",
    latitude: 37.669,
    longitude: -84.6514
  },
  {
    state: "Louisiana",
    latitude: 31.1801,
    longitude: -91.8749
  },
  {
    state: "Massachusetts",
    latitude: 42.2373,
    longitude: -71.5314
  },
  {
    state: "Maryland",
    latitude: 39.0724,
    longitude: -76.7902
  },
  {
    state: "Maine",
    latitude: 44.6074,
    longitude: -69.3977
  },
  {
    state: "Michigan",
    latitude: 43.3504,
    longitude: -84.5603
  },
  {
    state: "Minnesota",
    latitude: 45.7326,
    longitude: -93.9196
  },
  {
    state: "Missouri",
    latitude: 38.4623,
    longitude: -92.302
  },
  {
    state: "Mississippi",
    latitude: 32.7673,
    longitude: -89.6812
  },
  {
    state: "Montana",
    latitude: 46.9048,
    longitude: -110.3261
  },
  {
    state: "North Carolina",
    latitude: 35.6411,
    longitude: -79.8431
  },
  {
    state: "North Dakota",
    latitude: 47.5362,
    longitude: -99.793
  },
  {
    state: "Nebraska",
    latitude: 41.1289,
    longitude: -98.2883
  },
  {
    state: "New Hampshire",
    latitude: 43.4108,
    longitude: -71.5653
  },
  {
    state: "New Jersey",
    latitude: 40.314,
    longitude: -74.5089
  },
  {
    state: "New Mexico",
    latitude: 34.8375,
    longitude: -106.2371
  },
  {
    state: "Nevada",
    latitude: 38.4199,
    longitude: -117.1219
  },
  {
    state: "New York",
    latitude: 42.1497,
    longitude: -74.9384
  },
  {
    state: "Ohio",
    latitude: 40.3736,
    longitude: -82.7755
  },
  {
    state: "Oklahoma",
    latitude: 35.5376,
    longitude: -96.9247
  },
  {
    state: "Oregon",
    latitude: 44.5672,
    longitude: -122.1269
  },
  {
    state: "Pennsylvania",
    latitude: 40.5773,
    longitude: -77.264
  },
  {
    state: "Rhode Island",
    latitude: 41.6772,
    longitude: -71.5101
  },
  {
    state: "South Carolina",
    latitude: 33.8191,
    longitude: -80.9066
  },
  {
    state: "South Dakota",
    latitude: 44.2853,
    longitude: -99.4632
  },
  {
    state: "Tennessee",
    latitude: 35.7449,
    longitude: -86.7489
  },
  {
    state: "Texas",
    latitude: 31.106,
    longitude: -97.6475
  },
  {
    state: "Utah",
    latitude: 40.1135,
    longitude: -111.8535
  },
  {
    state: "Virginia",
    latitude: 37.768,
    longitude: -78.2057
  },
  {
    state: "Vermont",
    latitude: 44.0407,
    longitude: -72.7093
  },
  {
    state: "Washington",
    latitude: 47.3917,
    longitude: -121.5708
  },
  {
    state: "Wisconsin",
    latitude: 44.2563,
    longitude: -89.6385
  },
  {
    state: "West Virginia",
    latitude: 38.468,
    longitude: -80.9696
  },
  {
    state: "Wyoming",
    latitude: 42.7475,
    longitude: -107.2085
  }
];


const CustomSkinMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 39.8283, lng: -98.5795 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      {arr.map(x => {
        return (
          <Marker
            position={{ lat: x.latitude, lng: x.longitude }}
            key={x.latitude.toString()}
          />
        );
      })}
    </GoogleMap>
  ))
);
window.abc = arr;
class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <CustomSkinMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFAia8Dm1OlHLtQ9x9ppMkIiN-gfO8DAg"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Maps;
