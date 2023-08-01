import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = (selectedJob, item, handleCardPress) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleCardPress(item);
      }}
      style={styles.container(selectedJob, item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: item.employer_logo }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text>{item.employer_name}</Text>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
