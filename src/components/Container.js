import cardStyles from "./Card.module.css";

const Card = (props) => {
  return (
    <>
      <section className={cardStyles.card}>{props.children}</section>
    </>
  );
};
export default Card;
