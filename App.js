import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Bai2 from './Component/Bai2';
import Newfeed from './Component/Newfeed';
// import Test from './Component/Test';
export const fruits_vegetables = [
  {
    title: 'Fruits',
    url: 'https://cdn-icons-png.flaticon.com/512/1625/1625099.png',
    data: ['Banana', 'Orange', 'Grapes', 'Mango', 'Pineapple'],
  },
  {
    title: 'Vegetables',
    url: 'https://cdn-icons-png.flaticon.com/512/2153/2153788.png',
    data: ['Carrot', 'Broccoli', 'Spinach', 'Beets & Beet Greens', 'Kale'],
  },
];
export const workouts = [
  {
    id: '1',
    type: 'Push-ups',
  },
  {
    id: '2',
    type: 'Squats',
  },
  {
    id: '3',
    type: 'Planks',
  },
  {
    id: '4',
    type: 'Groiner',
  }, {
    id: '5',
    type: 'Spider Crawl',
  },
  {
    id: '6',
    type: 'Glute Bridge',
  },
  {
    id: '7',
    type: 'Dumbbell rows',
  },
  {
    id: '8',
    type: 'Burpees',
  },
  {
    id: '9',
    type: 'Standing Long Jump',
  },
  {
    id: '10',
    type: 'Lunges',
  },
];
const data = [
  {
    id: 1,
    name: "Alexsander",
    cap: "Vuong quoc anh",
    avt_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-h7JVnqd-k7xFeQqDehPGojOV7TFJppYvPA&usqp=CAU',
    image: 'https://auviettour.vn/wp-content/uploads/2023/04/dat-nuoc-va-con-nguoi-anh-quoc.jpeg',
    like: 233,
    comment: 562,
    share: 5216,
  },
  {
    id: 2,
    name: "Alexsander2",
    cap: "Vuong quoc anh",
    avt_img: 'https://auviettour.vn/wp-content/uploads/2023/04/dat-nuoc-va-con-nguoi-anh-quoc.jpeg',
    image: 'https://auviettour.vn/wp-content/uploads/2023/04/dat-nuoc-va-con-nguoi-anh-quoc.jpeg',
    like: 233,
    comment: 562,
    share: 5216,
  },
  {
    id: 3,
    name: "Alexsander3",
    cap: "Vuong quoc anh",
    avt_img: 'https://auviettour.vn/wp-content/uploads/2023/04/dat-nuoc-va-con-nguoi-anh-quoc.jpeg',
    image: 'https://auviettour.vn/wp-content/uploads/2023/04/dat-nuoc-va-con-nguoi-anh-quoc.jpeg',
    like: 233,
    comment: 562,
    share: 5216,
  },
  {
    id: 4,
    name: "Alexsander3",
    cap: "Vuong quoc anh",
    avt_img: 'https://auviettour.vn/wp-content/uploads/2023/04/dat-nuoc-va-con-nguoi-anh-quoc.jpeg',
    image: 'https://auviettour.vn/wp-content/uploads/2023/04/dat-nuoc-va-con-nguoi-anh-quoc.jpeg',
    like: 233,
    comment: 562,
    share: 5216,
  },
]

export default function App() {

  return (

    <ScrollView style={styles.container}>
      {/* <View style={styles.title_ctn}>
        <Text style={styles.title} >Social Media Feed</Text>
      </View>
      {
        data.map((posts, index) => (
          // console.log(posts.id)
          <Newfeed key={posts.id} props={posts} />
        ))
      } */}
      {/* <Bai2 DATA={workouts} /> */}
      <Bai2 DATA={workouts} DATA2={fruits_vegetables} />
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'column',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title_ctn: {
    flexDirection: "column",
    width: "100%",
    height: "5%",
    backgroundColor: "#4dc3ff",
    // borderRadius:5,
    justifyContent: 'center',
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 20,
    alignItems: 'center',
    fontWeight: 'bold',
  },
});