import style from "./style.module.scss";

const Section = (props) => {
  const { className, children, inlineStyle, center, authPage } = props;

  return (
    <section
      className={`${style.section}${className ? ` ${className}` : ""}${
        center ? ` ${style.center}` : ""
      }${authPage ? ` ${style.auth}`:``}`}
      style={inlineStyle}
    >
      <div className={style.content}>{children}</div>
    </section>
  );
};

export default Section;
