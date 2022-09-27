import React, { useState } from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import { 
  Box, 
  Tabs, 
  TabPanels, 
  TabPanel, 
  Button, 
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Stack} from "@chakra-ui/react";
import SignUpFirstStep from "./SignUpFirstStep";

const SignUpForm = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const labelStyles = {
      mt: '-3.5',
      ml: '-2.5',
      fontSize: 'sm',
    }

  // const handleTabsChange = (index: number) => {
  //   setTabIndex(index);
  // };

  const handleNextButton = () => {
    if (tabIndex < 2){
      setTabIndex(tabIndex+1);
    }
  };

  const handleBackButton = () => {
    setTabIndex(tabIndex-1);
  };

  return (
    <HeaderLayout>
      <Box>
        <Tabs index={tabIndex}>
          <TabPanels>
            <TabPanel>
              <SignUpFirstStep
                buttonStatus={(isDisabled: boolean): boolean | void => setIsDisabled(isDisabled)}
              />
            </TabPanel>
            <TabPanel>
              <p>Yeah yeah. What's up?</p>
            </TabPanel>
            <TabPanel>
              <p>Oh, hello there.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Flex justifyContent="center" alignItems="center" direction="column" >
          <Slider aria-label='slider-ex-6' value={tabIndex} min={0} max={2} step={1} isDisabled= {true} height={45}>
            <SliderMark value={0.03} {...labelStyles}>
              Step 1
            </SliderMark>
            <SliderMark value={0.91} {...labelStyles}>
              Step 2
            </SliderMark>
            <SliderMark value={1.82} {...labelStyles}>
              Step 3
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Stack direction='row' spacing={4} align='center'>
            {tabIndex === 0 ? (
            <Button
              colorScheme="green"
              disabled={isDisabled}
              onClick={handleNextButton}
            >Next
            </Button>) : (
            <><Button 
            colorScheme="green"
            onClick={handleBackButton}
            >Back</Button>
            <Button
            colorScheme="gray"
            disabled={isDisabled}
            onClick={handleNextButton}
            >Next
            </Button></>) }
          </Stack>
        </Flex>
      </Box>
    </HeaderLayout>
  );
};
export default SignUpForm;
