import React from 'react';
import {View, ScrollView, Text, StyleSheet, Alert} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import {Actions} from 'react-native-router-flux';
import {Picker} from '@react-native-picker/picker';

export default class Curriculum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      semester: 'first110',
      tableHead: ['一', '二', '三', '四', '五'],
      tableTitle: [
        '第一節\n08:10\n-09:00',
        '第二節\n09:10\n-10:00',
        '第三節\n10:10\n-11:00',
        '第四節\n11:10\n-12:00',
        '中午',
        '第五節\n13:30\n-14:20',
        '第六節\n14:30\n-15:20',
        '第七節\n15:30\n-16:20',
        '第八節\n16:30\n-17:20',
        '第九節\n17:30\n-18:20',
      ],
      tableData1101: [
        {
          id: 1,
          data: [
            '',
            '',
            '',
            '',
            '',
            'APP程式開發與設計',
            'APP程式開發與設計',
            'APP程式開發與設計',
            '',
            '',
          ],
        },
        {
          id: 2,
          data: ['', '', '', '', '', '', '', '', '', ''],
        },
        {
          id: 3,
          data: [
            '',
            '智慧商務資訊系統',
            '智慧商務資訊系統',
            '智慧商務資訊系統',
            '',
            '',
            '',
            '智聯網系統設計與應用實務',
            '智聯網系統設計與應用實務',
            '智聯網系統設計與應用實務',
          ],
        },
        {
          id: 4,
          data: [
            '',
            '',
            '',
            '',
            '',
            '大數據分析與實作',
            '大數據分析與實作',
            '大數據分析與實作',
            '',
            '',
          ],
        },
        {
          id: 5,
          data: ['', '', '', '', '', '', '', '', '', ''],
        },
      ],
      tableData1092: [
        {
          id: 1,
          data: [
            '',
            '資料分析與統計',
            '資料分析與統計',
            '資料分析與統計',
            '',
            '程式交易實作',
            '程式交易實作',
            '程式交易實作',
            '',
            '',
          ],
        },
        {
          id: 2,
          data: [
            '',
            '系統分析與設計',
            '系統分析與設計',
            '系統分析與設計',
            '',
            '機器學習應用',
            '機器學習應用',
            '機器學習應用',
            '',
            '',
          ],
        },
        {
          id: 3,
          data: [
            '',
            '感測器與物聯網實作',
            '感測器與物聯網實作',
            '感測器與物聯網實作',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          id: 4,
          data: [
            '',
            '前端網頁框架',
            '前端網頁框架',
            '前端網頁框架',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          id: 5,
          data: ['', '', '實用英文', '實用英文', '', '', '', '', '', ''],
        },
      ],
      tableData1091: [
        {
          id: 1,
          data: ['', '', '', '', '', '統計學', '統計學', '統計學', '', ''],
        },
        {
          id: 2,
          data: [
            '',
            '人工智慧與深度學習應用',
            '人工智慧與深度學習應用',
            '人工智慧與深度學習應用',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          id: 3,
          data: [
            '',
            'MVC系統架構',
            'MVC系統架構',
            'MVC系統架構',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          id: 4,
          data: [
            '',
            '資料庫管理',
            '資料庫管理',
            '資料庫管理',
            '',
            '程式設計',
            '程式設計',
            '程式設計',
            '',
            '',
          ],
        },
        {
          id: 5,
          data: ['', '', '實用英文', '實用英文', '', '', '', '', '', ''],
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      rightTitle: '編輯',
      onRight: () => {
        Actions.EditList({
          state: this.state,
          handleEditData: this.handleEditData,
          handleAddData: this.handleAddData,
        });
      },
    });
  }

  handleChangeSemester = value => {
    this.setState({
      semester: value,
    });
  };

  handleChangeData = (allData1101, allData1092, allData1091) => {
    switch (this.state.semester) {
      case 'first110':
        return allData1101;
      case 'second109':
        return allData1092;
      case 'first109':
        return allData1091;
    }
  };

  handleEditData = (edited, origin) => {
    const {semester, tableData1101, tableData1092, tableData1091} = this.state;
    const allData1101 = tableData1101.map(data => Object.values(data)[1]);
    const allData1092 = tableData1092.map(data => Object.values(data)[1]);
    const allData1091 = tableData1091.map(data => Object.values(data)[1]);
    const newData = (
      semester === 'first110'
        ? allData1101
        : semester === 'second109'
        ? allData1092
        : allData1091
    ).map(allData =>
      allData.map(data =>
        data !== '' ? (data === origin ? edited : data) : data,
      ),
    );
    semester === 'first110'
      ? Alert.alert('更改名稱', edited)
      : semester === 'second109'
      ? Alert.alert('更改名稱', edited)
      : Alert.alert('更改名稱', edited);
    console.log(newData);
  };

  handleAddData = added => {
    const {semester} = this.state;
    semester === 'first110'
      ? Alert.alert('新增', '110第一學期新增：' + added)
      : semester === 'second109'
      ? Alert.alert('新增', '109第二學期新增：' + added)
      : Alert.alert('新增', '109第一學期新增：' + added);
    console.log('handleAddData');
  };

  counter = (allData1101, allData1092, allData1091) => {
    let count = 0;
    allData1101.map(allData =>
      allData.map(data => (data !== '' ? (count += 1) : null)),
    );
    allData1092.map(allData =>
      allData.map(data => (data !== '' ? (count += 1) : null)),
    );
    allData1091.map(allData =>
      allData.map(data => (data !== '' ? (count += 1) : null)),
    );
    console.log(count);
    return count;
  };

  render() {
    const {
      semester,
      tableHead,
      tableTitle,
      tableData1101,
      tableData1092,
      tableData1091,
    } = this.state;
    const allData1101 = tableData1101.map(data => Object.values(data)[1]);
    const allData1092 = tableData1092.map(data => Object.values(data)[1]);
    const allData1091 = tableData1091.map(data => Object.values(data)[1]);
    const totalCount = this.counter(allData1101, allData1092, allData1091);
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={semester}
          onValueChange={this.handleChangeSemester}
          style={styles.picker}>
          <Picker.Item label="110-1學期" value="first110" />
          <Picker.Item label="109-2學期" value="second109" />
          <Picker.Item label="109-1學期" value="first109" />
        </Picker>
        <ScrollView>
          <Table
            style={styles.table}
            borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <TableWrapper style={{width: 80}}>
              <Cell data="" style={styles.singleHead} />
              <TableWrapper style={{flexDirection: 'row'}}>
                <Col
                  data={tableTitle}
                  style={styles.title}
                  heightArr={[60, 60, 60, 60, 30, 60, 60, 60, 60, 60]}
                  textStyle={styles.titleText}
                />
              </TableWrapper>
            </TableWrapper>
            <TableWrapper style={{flex: 1}}>
              <Row
                data={tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              <Cols
                data={this.handleChangeData(
                  allData1101,
                  allData1092,
                  allData1091,
                )}
                heightArr={[60, 60, 60, 60, 30, 60, 60, 60, 60, 60]}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
          <View>
            <Text>目前學分/畢業學分</Text>
            <Text>{totalCount}/128</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
  picker: {
    backgroundColor: '#F5F5F5',
    margin: 10,
  },
  head: {
    height: 30,
  },
  table: {
    flexDirection: 'row',
  },
  tablew: {
    width: 80,
  },
  singleHead: {
    width: 80,
    height: 30,
    backgroundColor: '#c8e1ff',
  },
  title: {
    flex: 1,
    backgroundColor: '#f1f8ff',
  },
  titleText: {
    marginRight: 6,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
