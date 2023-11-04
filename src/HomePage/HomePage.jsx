import FeatureBlog from '../FeatureBlog/FeatureBlog';
import Maincontent from '..//Maincontent/Maincontent';
import Navbar from '../Navbar/Navbar';


function HomePage() {
  return (
    <div>
     <Navbar/>
     <FeatureBlog/>
     <Maincontent/>
</div>
  );
}

export default HomePage;