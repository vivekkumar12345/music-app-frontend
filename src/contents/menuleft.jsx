import "./css/menuleft.css";
import { MdNewReleases, MdFeaturedPlayList } from "react-icons/md";
import { IoIosMicrophone } from "react-icons/io";
import { FaChartLine, FaHistory, FaLink } from "react-icons/fa";
import { BiSolidPhotoAlbum, BiSolidPlaylist } from "react-icons/bi";
import { Link } from "react-router-dom";

const MenuLeft = () => {
  return (
    <>
      <div className="menuleft-container">
        <div className="menuleft-item-container-head">
          <a className="nothing">BROWSE</a>
        </div>
        <div className="menuleft-item-container">
          <Link className="anchor" to="/newrelease">
            <span>
              <MdNewReleases />
            </span>
            <a className="nothing">New Release</a>
          </Link>
        </div>
        <div className="menuleft-item-container">
          <span>
            <FaChartLine />
          </span>
          <a className="nothing">Top charts</a>
        </div>
        <div className="menuleft-item-container">
          <span>
            <MdFeaturedPlayList />
          </span>
          <a className="nothing">Top Playlists</a>
        </div>
        <div className="menuleft-item-container">
          <span>
            <IoIosMicrophone />
          </span>
          <a className="nothing">Top Artists</a>
        </div>

        <div className="menuleft-item-container-head">
          <a className="nothing">LIBRARY</a>
        </div>
        <div className="menuleft-item-container">
          <span>
            <FaHistory />
          </span>
          <a className="nothing">History</a>
        </div>
        <div className="menuleft-item-container">
          <span>
            <FaLink />
          </span>
          <a className="nothing">Linked Songs</a>
        </div>
        <div className="menuleft-item-container">
          <span>
            <BiSolidPhotoAlbum />
          </span>
          <a className="nothing">Albums</a>
        </div>
        <div className="menuleft-item-container">
          <span>
            <BiSolidPlaylist />
          </span>
          <a className="nothing">Custom Playlists</a>
        </div>
      </div>
    </>
  );
};
export default MenuLeft;
