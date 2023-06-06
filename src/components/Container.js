import cardStyles from "./Container.module.css";

const Container = (props) => {
  return (
    <>
      <section className={cardStyles.container}>{props.children}</section>
    </>
  );
};
export default Container;
