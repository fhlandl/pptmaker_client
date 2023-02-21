import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import NavigationBar from './components/NavigationBar/NavigationBar';

const menus = ['말씀', '찬양', '기도', '소식', 'PPT'];
function App() {
  const [menu, setMenu] = useState(menus[0]);
  return (
    <>
      <NavigationBar menus={menus} menu={menu} onMenuChange={setMenu} />
      {menus.map((value) => (
        <TodoList id={value} currentMenu={menu} />
      ))}
    </>
  );
}

export default App;
