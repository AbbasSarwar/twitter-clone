import FollowWidget from "./FollowWidget";
import FooterWidget from "./FooterWidget";
import SubscribeCard from "./SubscribeCard";
import Trending from "./Trending";
import Search from "./search";

const Widget = () => {
  return (
    <section className="widget col-xl-4 col-xxl-3 py-2 ps-4 pe-5" >
      <Search />
      <SubscribeCard />
      <Trending />
      <FollowWidget />
      <FooterWidget />
    </section>
  );
};
export default Widget;
