type PropertyPhotoProps = {
  photoUrl:string;
}

function PropertyPhoto({photoUrl}:PropertyPhotoProps) {
  return(
    <div className="property__image-wrapper">
      <img className="property__image" src={photoUrl} alt="studio" />
    </div>
  );
}

export default PropertyPhoto;
