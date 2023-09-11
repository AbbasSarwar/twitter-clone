import SubscribeCard from "./SubscribeCard";
import Search from "./search";

const Widget = () => {
  return (
    <section className="widget col-xl-0 col-xl-4 col-xxl-4 py-2 ps-4 pe-5" >
      <Search />
      <SubscribeCard />
    </section>
  );
};
export default Widget;
