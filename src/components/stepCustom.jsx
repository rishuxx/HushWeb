import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styled, { keyframes, css } from "styled-components";

// Glow animation
const glow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(139, 69, 19, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(139, 69, 19, 0); }
  100% { box-shadow: 0 0 0 0 rgba(139, 69, 19, 0); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  max-width: 900px;
  margin: 0 auto;
`;

const ProgressTrack = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: #ede0d4;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, #8b4513, #d2a679);
  border-radius: 4px;
  transform-origin: left center;
`;

const StepContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  margin-top: 2rem;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StepIndicator = styled(motion.div).attrs((props) => ({
  active: props.active || false,
}))`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? "linear-gradient(145deg, #8b4513, #a0522d)" : "#ede0d4"};
  color: ${(props) => (props.active ? "#fff" : "#a38b6d")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 8px;
  position: relative;
  border: 2px solid ${(props) => (props.active ? "#8b4513" : "transparent")};
  ${(props) =>
    props.active &&
    css`
      animation: ${glow} 2s infinite;
    `};
`;

const StepLabel = styled.span.attrs((props) => ({
  active: props.active || false,
}))`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "#5c3a21" : "#a38b6d")};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: absolute;
  top: 50px;
  white-space: nowrap;
`;

const steps = [
  { id: 1, label: "Your Design" },
  { id: 2, label: "Bottle Shape" },
  { id: 3, label: "Liquid" },
  { id: 4, label: "Fragrance" },
  { id: 5, label: "Quantity" },
  { id: 6, label: "Finish" },
];

const SeamlessProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const controls = useAnimation();

  useEffect(() => {
    const animateProgress = async () => {
      while (true) {
        for (let i = 1; i <= steps.length; i++) {
          await controls.start({
            scaleX: (i - 1) / (steps.length - 1),
            transition: { duration: 2.2, ease: [0.16, 1, 0.3, 1] },
          });
          setCurrentStep(i);
          await new Promise((resolve) => setTimeout(resolve, 800));
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setCurrentStep(1);
        await controls.start({
          scaleX: 0,
          transition: { duration: 0.3 },
        });
      }
    };

    animateProgress();

    return () => {
      // Cleanup if needed
    };
  }, [controls]);

  return (
    <Container>
      <ProgressTrack>
        <ProgressFill initial={{ scaleX: 0 }} animate={controls} />
      </ProgressTrack>

      <StepContainer>
        {steps.map((step, index) => (
          <Step key={step.id}>
            <StepIndicator
              active={index < currentStep}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              {step.id}
            </StepIndicator>
            <StepLabel active={index < currentStep}>{step.label}</StepLabel>
          </Step>
        ))}
      </StepContainer>
    </Container>
  );
};

export default SeamlessProgressBar;
