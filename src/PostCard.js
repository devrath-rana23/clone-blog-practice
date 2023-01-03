import "./PostCard.css";

export const PostCard = (props) => {
  return (
    <>
      <div className="posts-card">
        <h1 className="posts-card-heading">{props.heading}</h1>
        <p className="posts-card-para-one">
          <span className="posts-card-span-one">{props.date}</span>
          <span className="posts-card-span-two">|</span>
          <span className="posts-card-span-three">{props.categories}</span>
        </p>
        <p className="posts-card-para-two">{props.description}</p>
      </div>
    </>
  );
};
