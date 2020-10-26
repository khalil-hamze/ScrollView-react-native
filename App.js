import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Platform,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const renderItem = ({item}) => <Item title={item.title} />;

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class App extends React.Component {
  state = {
    mystate: 'I finish my masters degree in System and network engineer',
  };
  updateState = () => this.setState({mystate: 'Updated'});

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Hi I AM KHALIL</Text>
          <Text>I am Learning react native</Text>
          <Text>I am From Naqoura</Text>
          <Text onPress={this.updateState}>{this.state.mystate}</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <ScrollView>
            <View>
              <Text>Khalil hamze</Text>
            </View>
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            snapToInterval={0.8 * Dimensions.get('window').width}>
            <View>
              <Image
                style={styles.Image}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1567513068697-fca8c2af4528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                }}></Image>
            </View>
            <View>
              <Image
                style={styles.Image}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1567513068697-fca8c2af4528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                }}></Image>
            </View>
            <View>
              <Image
                style={styles.Image}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1567513068697-fca8c2af4528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                }}></Image>
            </View>
            <View>
              <Image
                style={styles.Image}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1567513068697-fca8c2af4528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                }}></Image>
            </View>
            <View>
              <Image
                style={styles.Image}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1567513068697-fca8c2af4528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                }}></Image>
            </View>
            <View>
              <Image
                style={styles.Image}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1567513068697-fca8c2af4528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                }}></Image>
            </View>
            <View>
              <Image
                style={styles.Image}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1567513068697-fca8c2af4528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                }}></Image>
            </View>
            <View>
              <Image
                style={styles.Image}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1567513068697-fca8c2af4528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                }}></Image>
            </View>
            <View>
              <Image
                style={styles.Image}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1567513068697-fca8c2af4528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                }}></Image>
            </View>
            <View>
              <Image
                style={styles.Image}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1567513068697-fca8c2af4528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                }}></Image>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  Image: {
    // width: 100,
    width: 0.8 * Dimensions.get('window').width,
    // height: 100,
    height: 0.8 * Dimensions.get('window').width,
    margin: 10,
  },
});

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,;
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One KHALIL hamze</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
