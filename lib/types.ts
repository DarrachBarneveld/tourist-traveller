import { Map as LeafletMap } from "leaflet";

export interface MapRefType {
  mapRef: React.RefObject<LeafletMap>;
}
