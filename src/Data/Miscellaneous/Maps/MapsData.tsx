export const BasicContainerStyle = {
  height: "500px",
};

export const BasicCenter = {
  lat: -3.745,
  lng: -38.523,
};

export const MarkerContainerStyle = {
  height: "500px",
};

export const MarkerCenter = {
  lat: -3.745,
  lng: -38.523,
};

export const PolygonContainerStyle = {
  height: "500px",
};

export const PolygonCenter = {
  lat: -3.745,
  lng: -38.523,
};

export const PolylineContainerStyle = {
  height: "500px",
};

export const PolylineCenter = {
  lat: -3.745,
  lng: -38.523,
};

export const WorldMapData = [
  {
    text: "Below Map is displaying the world map.",
  },
];

export const UsaMapData = [
  {
    text: "Below Map is displaying the USA map.",
  },
];

export const UsaPosition = { lat: 50, lng: 10 };

export const WorldMapProps = {
  center: UsaPosition,
  zoom: 13,
  attributionControl: true,
  scrollWheelZoom: true,
  easeLinearity: 0.35,
};
const positionUSA = { lat: 51.505, lng: -0.09 };

export const UsaMapProps = {
  center: positionUSA,
  zoom: 13,
  minZoom: 2,
  maxZoom: 10,
  attributionControl: true,
  easeLinearity: 0.35,
  zoomControl: true,
  doubleClickZoom: true,
  scrollWheelZoom: true,
  dragging: true,
};

export const IndianMapData = [
  {
    text: "Below Map is displaying the India map.",
  },
];

export const IndianMapPosition = { lat: 20.5937, lng: 78.9629 };

export const IndiaMapProps = {
  center: IndianMapPosition,
  zoom: 5,
}

export const AustaliaMapData = [
  {
    text: "Below Map is displaying the Australia map.",
  },
];

export const AustaliaMapPosition = { lat: -25.2744, lng: 130.7751 };

export const AustraliaMapProps = {
  center: AustaliaMapPosition,
  zoom: 4,
  zoomControl: true,
  doubleClickZoom: true,
  scrollWheelZoom: true,
  dragging: true,
}