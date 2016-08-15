/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

const USERNAME = 'marclundgren';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Promise from 'bluebird';
// import GitHubApi = from 'github';

// console.log({Promise})

// const github = new GitHubApi({
//   Promise,
//   debug: true,
//   protocol: 'https',
//   host: 'api.github.com',
//   pathPrefix: '/api/v3', // for some GHEs; none for GitHub
//   headers: {
//     'user-agent': 'My-Gist-List' // GitHub is happy with a unique user agent
//   },
//   followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
//   timeout: 5000
// });
//
// github.users.getFollowingForUser({
//     // optional:
//     // headers: {
//     //     "cookie": "blahblah"
//     // },
//     user: USERNAME
// }, function(err, res) {
//   // do i need this?
//   console.log(JSON.stringify(res));
// });
//
// github.authenticate({
//   type: 'basic',
//   username: USERNAME,
//   password: PASSWORD
// })
// .then(() => {
//   return github.gists.getAll()
// })
// .then((gists) => {
//   console.log({gists});
// });

class MyGistList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyGistList', () => MyGistList);
