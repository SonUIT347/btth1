import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { data } from '../App';

const Newfeed = ({ props }) => {
  const [posts, setPosts] = useState(props)
  const [click, setClick] = useState(false)
  // 20521850
  var textStyle = click ? styles.txt_like_display_btn : styles.txt_unlike_display_btn;
  const imageChange = click ? require('../assets/blue_like.png') : require('../assets/like.jpg');
  const handleLike = () => {
    let a;
    click ? (a = posts.like - 1) : (a = posts.like + 1)
    setClick(!click)
    setPosts({ ...posts, like: a })
  }
  const handleCmt = () => {
    let a = posts.comment + 1
    setPosts({ ...posts, comment: a })
  }
  const handleShare = () => {
    let a = posts.share + 1
    setPosts({ ...posts, share: a })
  }
  return (
    <View style={styles.container} >
      <View style={styles.newfeed_ctn}>
        <View style={styles.name_image_ctn}>
          <Image
            style={styles.avt_image}
            source={{ uri: (posts.avt_img) }}
          />
          <View style={styles.name_ctn}>
            <Text style={styles.name}>{posts.name}</Text>
          </View>
          {/* 20521850 */}
        </View>
        <View style={styles.cap_ctn}>
          <Text>{posts.cap}</Text>
        </View>

        <View style={styles.image_ctn}>
          <Image
            style={styles.post_image}
            source={{ uri: (posts.image) }}
          />
        </View>
        <View style={styles.like_cmt_share_display}>

          <Text style={styles.txt_like_display} >{posts.like} Likes</Text>
          <Text style={styles.txt_like_display}>{posts.comment} Comments</Text>
          <Text style={styles.txt_like_display}>{posts.share} Shares</Text>
        </View>
        <View style={styles.like_cmt_share}>
          <TouchableOpacity onPress={() => handleLike()}>
            <View style={styles.touch_ctn}>
              <Image style={{ height: 15, width: 15, margin: 3 }} source={(imageChange)}></Image>
              <Text style={textStyle}>Likes</Text>
            </View>
            {/* 20521850 */}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCmt()} >
            <View style={styles.touch_ctn}>
              <Image style={{ height: 15, width: 15, margin: 3 }} source={require('../assets/comment.jpg')}></Image>
              <Text style={styles.txt_cmt_display_btn}>Comments</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleShare()}>
            <View style={styles.touch_ctn}>
              <Image style={{ height: 15, width: 15, margin: 3 }} source={require('../assets/share.jpg')}></Image>
              <Text style={styles.txt_share_display_btn}>Shares</Text>
            </View>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  newfeed_ctn: {
    flexDirection: 'column',
    backgroundColor: "white",
    height: 'auto',
    margin: 15,
    borderRadius: 10,
  },
  avt_image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    margin: 5

  },
  name_ctn: {
    marginTop: 20,
    marginLeft: 5,
  },
  name: {
    fontWeight: "bold"
  },
  post_image: {
    width: "97%",
    height: 200,
    borderRadius: 10,
    margin: 5,
  },
  name_image_ctn: {
    flexDirection: 'row'
  },
  like_cmt_share_display: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderColor: "#dddddd"
  },
  like_cmt_share: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5
  },
      // 20521850
  txt_like_display_btn: {
    fontWeight: "bold",
    fontSize: 15,
    color: "blue"
  },
  txt_unlike_display_btn: {
    fontWeight: "bold",
    fontSize: 15,

  },
  txt_like_display: {
    color: "#333333"
  },
  txt_cmt_display_btn: {
    fontWeight: "bold",
    fontSize: 15,
  },
  txt_share_display_btn: {
    fontWeight: "bold",
    fontSize: 15,
  },
  cap_ctn: {
    marginLeft: 10
  },
  touch_ctn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default Newfeed