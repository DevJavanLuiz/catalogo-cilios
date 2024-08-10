import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import config from "../../config";
import styles from "./MapGoogle.module.css";

export default function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: config.PUBLICK_KEY_GOOGLE_MAPS,
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
