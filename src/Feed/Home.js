import TopBar from "./TopBar";
import Post from "./posts/Post";
import data from '../Data.json';
const Home = ({sidebar, setSidebar}) => {
    const { profile } = data;
  return (
    <section>
      <TopBar
        title="Home"
        bTitle1="For you"
        bTitle2="Following"
        bTitle3={null}
        sidebar={sidebar}
        setSidebar={setSidebar}
      
      />
      <div className="d-flex flex-column">
        <Post profile={profile.person1} />
        <Post profile={profile.person2} />
        <Post profile={profile.person3} />
        <Post profile={profile.person3} />
        <Post profile={profile.person3} />
        <Post profile={profile.person3} />
        <Post profile={profile.person3} />
        <Post profile={profile.person3} />
      </div>
    </section>
  );
};
export default Home;