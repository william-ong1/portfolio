import Socials from "./socials";
import NavigationMenu from "./navigation-menu";

const Profile = (): JSX.Element => {
  return (
    <div>
      <h1 id="profile" className="text-4xl font-bold tracking-tight sm:text-5xl"> William Ong </h1>

      <div className="text-base ml-1 mt-2">
        Junior Software Developer
      </div>

      <NavigationMenu />
      <Socials />
    </div>
  );
};

export default Profile;