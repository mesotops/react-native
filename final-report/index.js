// import loginPage from './loginPage';
// export default loginPage;
import React from 'react';
import {Router, Stack, Scene, Drawer} from 'react-native-router-flux';
import loginPage from './loginPage';
import homePage from './homePage';
import personPage from './person/personPage';
import personForm from './person/personForm';
import TodoClass from './class/TodoClass';
import TodoList from './class/TodoList';
import TodoForm from './class/TodoForm';
import ClassDetail from './class/ClassDetail';
// import listPage from './listPage';
import drawer from './drawer';
import Curriculum from './Curriculum';
import EditList from './EditList';

class final extends React.Component {
  render() {
    return (
      // <Router>
      //   <Stack key="root" headerLayoutPreset="center">
      //     <Scene key="loginPage" title="登入驗證" component={loginPage} initial />
      //     <Scene key="homePage" title="首頁" component={homePage} />
      //   </Stack>
      // </Router>

      <Router navigationBarStyle={{backgroundColor: '#F4B860'}}>
        <Drawer contentComponent={drawer}>
          <Stack key="root" headerLayoutPreset="center">
            <Scene
              key="loginPage"
              title="登入驗證"
              hideNavBar="true"
              component={loginPage}
              initial
            />
            <Scene key="homePage" title="首頁" component={homePage} />
            {/* person */}
            <Scene
              key="personPage"
              title="個人中心"
              component={personPage}
              back
            />
            <Scene key="personForm" title="修改" component={personForm} back />
            {/* class */}
            <Scene key="TodoClass" title="學程介紹" component={TodoClass} />
            <Scene key="TodoList" title="課程內容" component={TodoList} back />
            <Scene key="TodoForm" component={TodoForm} title="新增課程" back />
            <Scene
              key="ClassDetail"
              component={ClassDetail}
              title="詳細資料"
              back
            />
            <Scene key="Curriculum" component={Curriculum} title="個人課表" />
            <Scene key="EditList" component={EditList} title="編輯課表" back />
            {/* list */}
            {/* <Scene key="listPage" title="學期課表" component={listPage} back /> */}
          </Stack>
        </Drawer>
      </Router>
    );
  }
}

export default final;
