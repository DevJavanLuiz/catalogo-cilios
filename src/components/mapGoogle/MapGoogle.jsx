import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import styles from "./MapGoogle.module.css";

export default function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCEg2kFx2Lyn8U7lUn5k2aHoVjU2-3rGfo",
  });

  const center = {
    lat: -8.192611,
    lng: -34.926106,
  };

  return (
    <div className={styles.map}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: " 100%", height: "100%" }}
          center={center}
          zoom={16}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}
