import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import PanelItem from './PanelItem.js'

export default function CurrentStateIndicator({ state, style }: *) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <Text>
        Current tab is: {state.routes[state.index].title}
      </Text>
      <PanelItem
          header="Mindfulness Track"
          text="This is a long discription of mindfulness and what we can do to improve our wellness!"
          action='Sign Up'
      />
      <PanelItem
          header="Emotion Wellness Track"
          text="This is a long discription of emotional wellness and what we can do to make us happy!"
          videoLink='https://www.youtube.com/watch?v=thYoV-MCVs0'
          externalLink='http://cs.carleton.edu/cs_comps/1718/gamify/index.php'
      />
      <PanelItem
          header="Physical Wellness Track"
          text="This is a long discription of physical wellness and what we can do to make us strong and fit!"
      />
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
      paddingBottom: 20,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 3,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
  },
});