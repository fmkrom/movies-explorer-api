import '../NavTab/NavTab.css';

import IconLink from '../IconLink/IconLink';

function NavTab(){

return (
    <nav className="navtab">
        <IconLink 
            name="О проекте" 
            linkRoute='#about-project'
        />
        <IconLink 
            name="Технологии" 
            linkRoute="#technologies"
        />
        <IconLink 
            name="Cтудент" 
            linkRoute='#about-me'
        />
    </nav>
    )
};
    
export default NavTab;