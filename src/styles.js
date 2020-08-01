import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItem: {
    padding: 10,
    margin: 5,
    borderColor: 'grey',
    borderWidth: 1,
  },
  filtersPanel: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#22334450',
  },
  pages: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#22334450',
  },

  driverInfoCard: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 5,
  },

  driverInfoCardWL: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 5,
    flexDirection: 'row',
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  linkToRaces: {
    flex: 0.2,
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    color: 'blue',
  },
});

export default styles;
