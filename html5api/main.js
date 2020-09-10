if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (pos) => console.log(pos),
    (err) => console.log(err)
  );
}
