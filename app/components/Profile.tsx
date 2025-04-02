import Socials from "./Socials";
import NavigationMenu from "./NavigationMenu";

const Profile = (): JSX.Element => {
  return (
    <div>
      <h1 id="profile" className="text-5xl font-bold tracking-tight "> William Ong </h1>

      <div className="text-base ml-1 mt-1">
        Software Developer
      </div>

      <NavigationMenu  />
      <Socials />
    </div>
  );
};

export default Profile;