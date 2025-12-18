 

const MapSection = () => {  

  return (
    <div className="map-wrapper">
      <iframe
        title="Location"
        src='https://www.google.com/maps?q=Delhi,India&output=embed'
        loading="lazy"
        className="map-iframe"
        
      />
    </div>
  );
};

export default MapSection;
