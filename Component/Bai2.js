import {
  View,
  Text,
  SafeAreaView,
  SectionList,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image
} from 'react-native'
import React, { useState, useEffect } from 'react'

const Bai2 = ({ DATA, DATA2 }) => {
  const [display, setDisplay] = useState([])

  // 20521850
  const addSelectedIds = (type) => {
    const updateSelectedtype = [...display]
    updateSelectedtype.includes(type) ? updateSelectedtype.splice(updateSelectedtype.indexOf(type), 1) : updateSelectedtype.push(type)
    setDisplay(updateSelectedtype);
  }
  const addFruitVegetable = (item) => {
    const updateDisplay = [...display]
    updateDisplay.includes(item) ? updateDisplay.splice(updateDisplay.indexOf(item), 1) : updateDisplay.push(item)
    setDisplay(updateDisplay)
  }
  const renderItem = ({ item }) => {
    const isPress = display.includes(item.type);
    return (
      <Item
        item={item}
        isPress={isPress}
      />
    );
  };
  const Item = ({ item, isPress }) => (
    <View style={styles.work_ctn} >
      <TouchableOpacity onPress={() => (addSelectedIds(item.type))}>
        <View style={{ backgroundColor: 'blue', height: 30, justifyContent: 'center', borderRadius: 3, width: 80, alignItems: 'center', }}>
          <Text style={{ color: 'white', margin: 5 }}>{isPress ? 'DESELECT' : 'SELECT'}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.type_ctn}>
        <Text style={styles.txt_type}>{item.type}</Text>
      </View>
      {/* 20521850 */}
    </View>
  );
  return (
    <SafeAreaView style={styles.ctn}>
      <View style={styles.title_ctn}>
        <Text style={styles.titleList}>Flatlist-Workouts</Text>
      </View>
      <ImageBackground style={styles.image} source={{ uri: 'https://legacy.reactjs.org/logo-og.png' }}>
        <ScrollView style={styles.flatlist_ctn}>
          {/* 20521850 */}
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />

        </ScrollView>
      </ImageBackground>
      <View style={styles.title_ctn}>
        <Text style={styles.titleList}>SelectionList - Fruit&Vegetables</Text>
      </View>
      <ImageBackground style={styles.image} source={{ uri: 'https://legacy.reactjs.org/logo-og.png' }}>

        <ScrollView style={styles.scroll}>

          <SectionList
            sections={DATA2}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, isPress = display.includes(item) }) => (
              // 20521580
              <View style={styles.vegetable_ctn}>
                <TouchableOpacity style={{ backgroundColor: 'blue', height: 30, alignItems: 'center' }} onPress={() => addFruitVegetable(item)}>
                  <View style={{ backgroundColor: 'blue', height: 30, justifyContent: 'center', borderRadius: 3, width: 80, alignItems: 'center', }}>
                    <Text style={{ color: 'white', margin: 5 }}>{isPress ? 'DESELECT' : 'SELECT'}</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.vegetable_ele_ctn}>
                  <Text style={{ fontSize: 20 }}>{item}</Text>
                </View>
                {console.log(item)}

              </View>

            )}
            renderSectionHeader={({ section: { title, url } }) => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={styles.header}>{title}</Text>
                <Image style={{ width: 30, height: 30 }} source={{ uri: (url) }}></Image>
              </View>

            )}
          />

        </ScrollView>
      </ImageBackground>
      <View style={styles.title_ctn}>
        <Text style={styles.seletedexc}>Selected Exercise</Text>
      </View>
      <View>
        <Text style={{ fontSize: 20 }}>{display.join(', ')}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  ctn: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  work_ctn: {
    // 20521850
    backgroundColor: 'white',
    marginTop: 3,
    marginBottom: 3,
    width: '95%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    left: 8
  },
  vegetable_ctn: {
    backgroundColor: 'white',
    marginTop: 3,
    marginBottom: 3,
    width: '95%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    left: 8
  },
  txt_type: {
    fontSize: 20
  },
  type_ctn: {
    width: 200
  },
  vegetable_ele_ctn: {
    width: 200
  },
  flatlist_ctn: {
    height: 200,
    // 20521850
    width: '90%',
    marginBottom: 10,
    marginTop: 10
  },
  titleList: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  seletedexc: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
  },
  center: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    height: 250
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%'
  },
  // 20521850
  header: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 24,
  },
  scroll: {
    height: 300,
    width: '90%',
    marginBottom: 10,
    marginTop: 10
  },
  title_ctn: {
    margin: 10
  }
})
export default Bai2