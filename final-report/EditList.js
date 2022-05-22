import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';

export default class EditList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passData: '',
      finalPassData: '',
      crossFileData: '',
      tmpData: '',
      tmpDeleteData: '',
      add: false,
      edit: false,
    };
  }

  handleAddLesson = () => {
    this.setState({
      add: true,
      edit: false,
    });
  };

  handleAdd = () => {
    const {passData} = this.state;
    const {handleAddData} = this.props;
    passData === ''
      ? Alert.alert('警告！', '不可留白')
      : handleAddData(passData);
    this.setState({
      tmpData: passData,
      add: false,
    });
  };

  handleEdit = data => {
    this.setState({
      passData: data,
      finalPassData: data,
      crossFileData: data,
      add: false,
      edit: true,
    });
  };

  handleChangeText = text => {
    this.setState({
      passData: text,
    });
  };

  handleChangeRealdata = () => {
    const {handleEditData} = this.props;
    const {passData, crossFileData} = this.state;
    console.log(passData);
    console.log(crossFileData);
    passData === ''
      ? Alert.alert('警告！', '不可留白')
      : handleEditData(passData, crossFileData);
    this.setState({
      finalPassData: passData,
      edit: false,
    });
  };

  handleChangeEditMode = () => {
    this.setState({
      add: false,
      edit: false,
    });
  };

  handleDelete = data => {
    Alert.alert('notice', '刪除', [
      {text: '取消'},
      {text: '確定', onPress: () => this.setState({tmpDeleteData: data})},
    ]);
  };

  getSemesterData = (
    semester,
    filteredData1101,
    filteredData1092,
    filteredData1091,
  ) => {
    switch (semester) {
      case 'first110':
        return filteredData1101;
      case 'second109':
        return filteredData1092;
      case 'first109':
        return filteredData1091;
    }
  };

  render() {
    const {
      passData,
      finalPassData,
      crossFileData,
      tmpData,
      tmpDeleteData,
      add,
      edit,
    } = this.state;
    const {semester} = this.props.state;
    const allData1101 = this.props.state.tableData1101.map(
      data => Object.values(data)[1],
    ); // 取出tableData的data
    const allData1092 = this.props.state.tableData1092.map(
      data => Object.values(data)[1],
    );
    const allData1091 = this.props.state.tableData1091.map(
      data => Object.values(data)[1],
    );
    // 對處理後的tableData內每一項作去除重複
    const filteredData1101 = allData1101.map(tData =>
      tData.filter((ele, pos) => tData.indexOf(ele) === pos),
    );
    const filteredData1092 = allData1092.map(tData =>
      tData.filter((ele, pos) => tData.indexOf(ele) === pos),
    );
    const filteredData1091 = allData1091.map(tData =>
      tData.filter((ele, pos) => tData.indexOf(ele) === pos),
    );
    const filteredData = this.getSemesterData(
      semester,
      filteredData1101,
      filteredData1092,
      filteredData1091,
    );
    tmpData !== '' ? filteredData.push([tmpData]) : null;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={this.handleAddLesson}>
          <Text style={styles.addText}>新增課程</Text>
        </TouchableOpacity>
        {add === true ? (
          <View style={styles.editLesson}>
            <TextInput
              style={styles.editText}
              onChangeText={this.handleChangeText}
              value={passData}
              autoFocus={true}
              placeholder="新增課程"
            />
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={this.handleChangeEditMode}
                style={styles.editCancelButton}>
                <Text style={styles.editCancelText}>取消</Text>
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={this.handleAdd}
                style={styles.editConfirmButton}>
                <Text style={styles.editConfirmText}>完成</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        <ScrollView>
          {filteredData.map(allData =>
            allData.map(data =>
              data !== '' ? (
                data !== tmpDeleteData ? (
                  <View style={styles.lessonsContent}>
                    <View style={styles.lessonsContentText}>
                      <Text style={styles.lessonsText}>
                        {data !== crossFileData ? data : finalPassData}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        key={data.id}
                        onPress={() => this.handleEdit(data)}>
                        <Text style={styles.editButtonText}>修改</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        key={data.id}
                        onPress={() => this.handleDelete(data)}>
                        <Text style={styles.deleteButtonText}>刪除</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : null
              ) : null,
            ),
          )}
          {edit === true ? (
            <View style={styles.editLesson}>
              <TextInput
                style={styles.editText}
                onChangeText={this.handleChangeText}
                value={passData}
                autoFocus={true}
                placeholder="修改中"
              />
              <View style={{justifyContent: 'center'}}>
                <TouchableOpacity
                  onPress={this.handleChangeEditMode}
                  style={styles.editCancelButton}>
                  <Text style={styles.editCancelText}>取消</Text>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent: 'center'}}>
                <TouchableOpacity
                  onPress={this.handleChangeRealdata}
                  style={styles.editConfirmButton}>
                  <Text style={styles.editConfirmText}>完成</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    height: 40,
    backgroundColor: '#A5C5C5',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'blue',
    margin: 10,
    elevation: 5,
    justifyContent: 'center',
  },
  addText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#008800',
    textAlign: 'center',
  },
  lessonsContent: {
    height: 60,
    borderWidth: 2,
    borderRadius: 3,
    marginVertical: 5,
    padding: 5,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lessonsContentText: {
    justifyContent: 'center',
  },
  lessonsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  editButtonText: {
    color: 'blue',
    height: 30,
  },
  deleteButtonText: {
    color: 'red',
    height: 30,
  },
  editLesson: {
    height: 60,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    marginVertical: 2,
    margin: 10,
    padding: 5,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editText: {
    fontSize: 15,
    width: 250,
    borderBottomWidth: 1,
  },
  editConfirmButton: {
    width: 50,
    height: 30,
    backgroundColor: 'lightgreen',
    borderWidth: 1,
    justifyContent: 'center',
  },
  editConfirmText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'darkgreen',
    justifyContent: 'center',
  },
  editCancelButton: {
    width: 50,
    height: 30,
    backgroundColor: '#EEAAAA',
    borderWidth: 1,
    justifyContent: 'center',
  },
  editCancelText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'darkred',
    justifyContent: 'center',
  },
});
