
import './HHeader.css';

function Header (){
  return (
    <header className="home-header" title="head">
        <div className="h-left">
          <h1>facebook</h1>
        </div>
        <div className="h-right">
          <div>
            <i className="fa-solid fa-add icon"></i>
          </div>
          <div>
            <i className="fa-solid fa-search icon"></i>
          </div>
          <div className="message">
            <i className="fa-solid fa-comment icon"></i>
            <span className="message-nots-count">15</span>
          </div>
        </div>
      </header>
    )
}

export default Header;