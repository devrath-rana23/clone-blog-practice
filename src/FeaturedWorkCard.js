import "./FeaturedWorkCard.css";

export const FeaturedWorkCard = (props) => {
  return (
    <div className="featured-section-card-container">
      <figure className="featured-section-card-image-container">
        <img
          className="featured-section-card-image"
          src={props.image}
          alt="image1"
        />
      </figure>
      <div className="featured-section-card-details">
        <h1 className="featured-section-card-details-heading">{props.title}</h1>
        <div className="featured-section-card-details-para-one">
          <p className="featured-section-card-details-span-container-date">
            <span className="featured-section-card-details-span-date">
              {props.year}
            </span>
          </p>
          <span className="featured-section-card-details-span-type">
            {props.category}
          </span>
        </div>
        <p className="featured-section-card-details-para-two">
          {props.description}
        </p>
      </div>
    </div>
  );
};
