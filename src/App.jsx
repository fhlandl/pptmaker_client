import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import NavigationBar from './components/NavigationBar/NavigationBar';
import TabPageWrapper from './components/TabPage/TabPageWrapper';
import ChurchPage from './components/TabPage/ChurchPage';
import WorshipPage from './components/TabPage/WorshipPage';
import MissionPage from './components/TabPage/MissionPage';
import FellowshipPage from './components/TabPage/FellowshipPage';

const menus = ['교회', '예배', '선교', '교제', '지원'];
function App() {
  const [menu, setMenu] = useState(menus[0]);
  const church = <ChurchPage />;
  return (
    <>
      <NavigationBar menus={menus} menu={menu} onMenuChange={setMenu} />
      {/* {menus.map((value) => (
        <TodoList id={value} currentMenu={menu} />
      ))} */}
      <TabPageWrapper tabName={menus[0]} isShow={menu === menus[0]}>
        <ChurchPage />
      </TabPageWrapper>
      <TabPageWrapper tabName={menus[1]} isShow={menu === menus[1]}>
        <WorshipPage />
      </TabPageWrapper>
      <TabPageWrapper tabName={menus[2]} isShow={menu === menus[2]}>
        <MissionPage />
      </TabPageWrapper>
      <TabPageWrapper tabName={menus[3]} isShow={menu === menus[3]}>
        <FellowshipPage />
      </TabPageWrapper>
      <TabPageWrapper tabName={menus[4]} isShow={menu === menus[4]}>
        <ChurchPage />
      </TabPageWrapper>
    </>
  );
}

export default App;
