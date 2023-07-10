import Photo from './Photo';
import SocialLinks from './SocialLinks';
import Menu from './Menu';
import "../components/technical.css";
import CopyRight from './CopyRight';

function Technical(){
  return (
    <>
    <div>
        <Photo/>
    </div>
    <div class ="to">
        <SocialLinks/>
        <Menu/>
        <CopyRight/>
    </div>
    </>
  );
}

export default Technical;