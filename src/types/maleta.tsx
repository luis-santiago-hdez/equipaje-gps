export function seguirLocalizacion(
  onSuccess: (position: [number, number]) => void,
) {
  if (!navigator.geolocation) return;

  return navigator.geolocation.watchPosition(
    (location) => {
      onSuccess([location.coords.latitude, location.coords.longitude]);
    },
    (error) => {
      console.error(error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    },
  );
}
