import { StyleSheet, View } from 'react-native';

const Card = ({ children, style }) => {
  return (
    <View style={{ ...styles.card, ...style }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
