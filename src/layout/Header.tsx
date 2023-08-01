export const Header = () => {

  return(
    <header>
        <img src="#logo" alt="logo" /> 
        <h1>Title</h1>
        <div className="Socials">
          <ul className="SocialsList">
            <li><a><img src="#Twitter"/></a></li>
            <li><a><img src="#Discord"/></a></li>
            <li><a><img src="#Telegram"/></a></li>
            <li><a><img src="#Medium"/></a></li>
          </ul>
        </div>
    </header>
  )
}