import SkillsInfo from './SkillsInfo.jsx'
import BasicInfo from './BasicInfo.jsx'
import Languages from './Languages.jsx'


function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-component" id="sidebar-component1"><BasicInfo /></div>
      <div className="sidebar-component" id="sidebar-component2"><SkillsInfo /></div>
      <div className="sidebar-component" id="sidebar-component3"><Languages /></div>
    </div>
  );
}

export default SideBar;