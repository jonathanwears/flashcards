/* eslint-disable object-shorthand */
import React, { useEffect, useState } from 'react';

function Score() {
  const [score, setScore] = useState({
    correct: 0,
    wrong: 0,
    total: 0,
  });

  const { correct, wrong, total } = score;

  function newScore(event) {
    const newValue = score[event.target.name] + 1;
    setScore((prevValues) => ({
      ...prevValues,
      [event.target.name]: newValue,
    }));
  }

  useEffect(() => {
    const newTotal = correct + wrong;
    setScore((prevValues) => ({
      ...prevValues,
      total: newTotal,
    }));
  }, [correct, wrong]);

  return (
    null
    // <Flex
    //   direction="row"
    //   alignItems="center"
    // >
    //   <Box p="5%">
    //     <Heading>Correct</Heading>
    //     <Text>{correct}</Text>
    //     <button type="button" name="correct" onClick={newScore}>Plus One!</button>
    //   </Box>
    //   <Box p="5%">
    //     <Heading>Wrong</Heading>
    //     <Text>{wrong}</Text>
    //     <button type="button" name="wrong" onClick={newScore}>Plus One!</button>
    //   </Box>
    //   <Box p="5%" h="100%">
    //     <Heading>Total</Heading>
    //     <Text>{total}</Text>
    //   </Box>
    // </Flex>
  );
}
export default Score;
