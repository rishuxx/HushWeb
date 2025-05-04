import React, { useState } from "react";
import styled from "styled-components";

// Image imports
import bambooRazor from "../assets/Dry1.jpg";
import wheatStrawRazor from "../assets/Dry2.jpg";
import dorcoRazor from "../assets/Dry3.jpg";
import giletteGel from "../assets/Dry4.jpg";
import eticGel from "../assets/Dry5.jpg";
import wheatBrush from "../assets/Dry6.jpg";
import whiteBrush from "../assets/Dry7.jpg";
import colgateBrush from "../assets/Dry8.jpg";
import bathCaps from "../assets/Dry9.jpeg";
import bathrobe from "../assets/Dry10.jpg";
import loofah from "../assets/Dry11.jpg";
import slippers from "../assets/Dry12.jpg";

const DryItemsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
  color: rgba(92, 71, 56, 0.8); // Dark brown with 50% opacity
  font-weight: 300;
  line-height: 1.6;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 1rem;
`;

const MainTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 300;
  letter-spacing: -0.01em;
  color: rgba(61, 47, 38, 0.8); // Darker brown with 50% opacity
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: rgba(92, 71, 56, 0.5); // Dark brown divider
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: rgba(92, 71, 56, 0.7);
  margin: 0 auto 3.5rem;
  max-width: 800px;
  line-height: 1.8;
  font-weight: 300;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 3rem;
  padding: 0 1rem;
`;

const CategoryCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(92, 71, 56, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryHeader = styled.div`
  padding: 1.5rem 2rem;
  background: white;
  border-bottom: 1px solid rgba(92, 71, 56, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: rgba(61, 47, 38, 0.8);
  margin: 0;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 20px;
    background: rgba(92, 71, 56, 0.5);
    margin-right: 12px;
  }
`;

const SubSectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  color: rgba(92, 71, 56, 0.7);
  margin: 2rem 0 1rem 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background: rgba(92, 71, 56, 0.5);
    border-radius: 50%;
  }
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0 2rem 1.5rem;
  margin: 0;
`;

const ProductItem = styled.li`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(92, 71, 56, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

const ProductImage = styled.div`
  width: 140px;
  height: 140px;
  flex-shrink: 0;
  margin-right: 1.5rem;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductName = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  color: rgba(61, 47, 38, 0.9);
  margin: 0 0 0.5rem 0;
`;

const ProductDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(92, 71, 56, 0.7);
  margin: 0;
  line-height: 1.5;
  font-weight: 300;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(61, 47, 38, 0.9); // Dark brown overlay
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  width: auto;
  height: auto;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 85vh;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: opacity 0.2s ease;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const DryItems = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <DryItemsContainer>
      <HeaderSection>
        <MainTitle>Premium Dry Items Collection</MainTitle>
        <Description>
          Discover our sustainable, guest-focused accessories made with
          eco-friendly materials. Each product is carefully selected to pamper
          while reducing environmental impact.
        </Description>
      </HeaderSection>

      <ContentGrid>
        {/* Shaving Kit */}
        <CategoryCard>
          <CategoryHeader>
            <SectionTitle>Shaving Kit</SectionTitle>
          </CategoryHeader>

          <SubSectionTitle>Razors</SubSectionTitle>
          <ProductList>
            <ProductItem>
              <ProductImage onClick={() => openModal(bambooRazor)}>
                <img src={bambooRazor} alt="Bamboo Razor" />
              </ProductImage>
              <ProductInfo>
                <ProductName>Bamboo Razor</ProductName>
                <ProductDescription>
                  Eco-friendly bamboo handle with premium stainless steel blades
                </ProductDescription>
              </ProductInfo>
            </ProductItem>

            <ProductItem>
              <ProductImage onClick={() => openModal(wheatStrawRazor)}>
                <img src={wheatStrawRazor} alt="Wheat Straw Razor" />
              </ProductImage>
              <ProductInfo>
                <ProductName>Wheat Straw Razor</ProductName>
                <ProductDescription>
                  Biodegradable razor made from wheat straw plastic alternative
                </ProductDescription>
              </ProductInfo>
            </ProductItem>

            <ProductItem>
              <ProductImage onClick={() => openModal(dorcoRazor)}>
                <img src={dorcoRazor} alt="Dorco Razor" />
              </ProductImage>
              <ProductInfo>
                <ProductName>Dorco Razor</ProductName>
                <ProductDescription>
                  Professional quality razor with lubricating strip
                </ProductDescription>
              </ProductInfo>
            </ProductItem>
          </ProductList>

          <SubSectionTitle>Shaving Gel</SubSectionTitle>
          <ProductList>
            <ProductItem>
              <ProductImage onClick={() => openModal(giletteGel)}>
                <img src={giletteGel} alt="Gilette Gel" />
              </ProductImage>
              <ProductInfo>
                <ProductName>Gilette Gel</ProductName>
                <ProductDescription>
                  Ultra-sensitive formula with aloe vera for smooth shaving
                </ProductDescription>
              </ProductInfo>
            </ProductItem>

            <ProductItem>
              <ProductImage onClick={() => openModal(eticGel)}>
                <img src={eticGel} alt="Etic Gel" />
              </ProductImage>
              <ProductInfo>
                <ProductName>Etic Gel</ProductName>
                <ProductDescription>
                  Vegan and cruelty-free shaving gel with organic ingredients
                </ProductDescription>
              </ProductInfo>
            </ProductItem>
          </ProductList>
        </CategoryCard>

        {/* Dental Kit */}
        <CategoryCard>
          <CategoryHeader>
            <SectionTitle>Dental Kit</SectionTitle>
          </CategoryHeader>

          <SubSectionTitle>Toothbrushes</SubSectionTitle>
          <ProductList>
            <ProductItem>
              <ProductImage onClick={() => openModal(wheatBrush)}>
                <img src={wheatBrush} alt="Wheat Brush" />
              </ProductImage>
              <ProductInfo>
                <ProductName>Wheat Straw Brush</ProductName>
                <ProductDescription>
                  Sustainable brush with bamboo handle and wheat straw bristles
                </ProductDescription>
              </ProductInfo>
            </ProductItem>

            <ProductItem>
              <ProductImage onClick={() => openModal(whiteBrush)}>
                <img src={whiteBrush} alt="White Brush" />
              </ProductImage>
              <ProductInfo>
                <ProductName>White Bamboo Brush</ProductName>
                <ProductDescription>
                  Natural bamboo with charcoal-infused bristles
                </ProductDescription>
              </ProductInfo>
            </ProductItem>

            <ProductItem>
              <ProductImage onClick={() => openModal(colgateBrush)}>
                <img src={colgateBrush} alt="Colgate Brush" />
              </ProductImage>
              <ProductInfo>
                <ProductName>Colgate Brush</ProductName>
                <ProductDescription>
                  Soft bristles with tongue cleaner, in recyclable packaging
                </ProductDescription>
              </ProductInfo>
            </ProductItem>
          </ProductList>
        </CategoryCard>

        {/* Accessories */}
        <CategoryCard>
          <CategoryHeader>
            <SectionTitle>Bath Accessories</SectionTitle>
          </CategoryHeader>

          <ProductList>
            <ProductItem>
              <ProductImage onClick={() => openModal(bathCaps)}>
                <img src={bathCaps} alt="Bath Caps" />
              </ProductImage>
              <ProductInfo>
                <ProductName>Bath Caps</ProductName>
                <ProductDescription>
                  Reusable shower caps made from recycled materials
                </ProductDescription>
              </ProductInfo>
            </ProductItem>

            <ProductItem>
              <ProductImage onClick={() => openModal(bathrobe)}>
                <img src={bathrobe} alt="Bathrobe" />
              </ProductImage>
              <ProductInfo>
                <ProductName>Luxury Bathrobe</ProductName>
                <ProductDescription>
                  100% organic cotton with premium absorbency
                </ProductDescription>
              </ProductInfo>
            </ProductItem>

            <ProductItem>
              <ProductImage onClick={() => openModal(loofah)}>
                <img src={loofah} alt="Loofah" />
              </ProductImage>
              <ProductInfo>
                <ProductName>Natural Loofah</ProductName>
                <ProductDescription>
                  Plant-based exfoliating sponge, completely biodegradable
                </ProductDescription>
              </ProductInfo>
            </ProductItem>

            <ProductItem>
              <ProductImage onClick={() => openModal(slippers)}>
                <img src={slippers} alt="Slippers" />
              </ProductImage>
              <ProductInfo>
                <ProductName>Soft Slippers</ProductName>
                <ProductDescription>
                  Eco-friendly slippers made from recycled materials
                </ProductDescription>
              </ProductInfo>
            </ProductItem>
          </ProductList>
        </CategoryCard>
      </ContentGrid>

      {selectedImage && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalImage src={selectedImage} alt="Enlarged product view" />
          </ModalContent>
        </ModalOverlay>
      )}
    </DryItemsContainer>
  );
};

export default DryItems;
