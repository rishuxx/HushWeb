import React from "react";
import styled from "styled-components";

const DryItemsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  color: #2d3748;
  font-weight: 100;
  line-height: 1.6;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  color: #1a202c;
  margin-bottom: 1.2rem;
  
`;

const Description = styled.p`
  font-size: 1rem;
  color: #4a5568;
  margin: 0 auto 3.5rem;
  max-width: 700px;
  letter-spacing: 0.02em;
`;

const ContentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const ContentColumn = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 300px;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 350;
  color: #2d3748;
  margin: 0 0 1rem 0;
  padding-left: 8px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 60%;
    width: 2px;
    background: #cbd5e0;
  }
`;

const SubSectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 350;
  color: #4a5568;
  margin: 1.5rem 0 0.5rem 1rem;
  position: relative;

  &::before {
    content: "›";
    position: absolute;
    left: -1rem;
    color: #a0aec0;
  }
`;

const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 1.5rem 1.5rem;
`;

const Item = styled.li`
  padding: 0.3rem 0;
  font-size: 1rem;
  position: relative;
  padding-left: 1.2rem;
  color: #718096;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #a0aec0;
    font-size: 1.2rem;
    line-height: 1;
  }
`;

const DryItems = () => {
  return (
    <DryItemsContainer>
      <HeaderSection>
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-thin tracking-tighter text-center mt-10 mb-5 sm:mb-5 lg:mb-10 text-[#11041ecc]">
          Dry Items & Accessories
        </h1>
        <Description>
          Our accessories and dry kits offer sustainable, guest-focused options
          made to pamper with care. Prioritizing eco-friendly materials like
          bamboo, wood, paper, and cotton, we reduce plastic use wherever
          possible.
        </Description>
      </HeaderSection>

      <ContentRow>
        <ContentColumn>
          <SectionTitle>SHAVING KIT</SectionTitle>
          <SubSectionTitle>Razors</SubSectionTitle>
          <ItemList>
            <Item>Bamboo</Item>
            <Item>Wheat Straw</Item>
            <Item>Dorco</Item>
            <SubSectionTitle>Gel</SubSectionTitle>
            <Item>Gilette</Item>
            <Item>Etic</Item>
          </ItemList>
        </ContentColumn>

        <ContentColumn>
          <SectionTitle>DENTAL KIT</SectionTitle>
          <SubSectionTitle>TOOTHBRUSH</SubSectionTitle>
          <ItemList>
            <Item>Wheat Brush</Item>
            <Item>White Brush</Item>
            <Item>Colgate</Item>
          </ItemList>
        </ContentColumn>

        <ContentColumn>
          <SectionTitle>ACCESSORIES</SectionTitle>
          <ItemList>
            <Item>Bath Caps</Item>
            <Item>Bathrobe</Item>
            <Item>Loofah</Item>
          </ItemList>
        </ContentColumn>
      </ContentRow>
    </DryItemsContainer>
  );
};

export default DryItems;
