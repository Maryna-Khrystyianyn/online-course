import BanerItem from "./BanerItem";
import styles from "./baner.module.scss"

const Baner = () => {
  const banerList = [
    {
      title: "Learn The Latest Skills",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
      img: "online-test.png",
    },
    {
      title: "Get Ready For a Career",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
      img: "exam.png",
    },
    {
      title: "Earn a Certificate",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
      img: "certification.png",
    },
  ];
  return (
    <div className={styles.container}>
      {banerList.map((item, i) => {
        return <BanerItem item={item} key={i} />;
      })}
    </div>
  );
};

export default Baner;
