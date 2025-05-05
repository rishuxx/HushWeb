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
  color: rgba(92, 71, 56, 0.8);
  font-weight: 300;
  line-height: 1.6;
`;

const HeaderSection = styled.header`
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 1rem;
`;

const MainTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 300;
  letter-spacing: -0.01em;
  color: rgba(61, 47, 38, 0.8);
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
    background: rgba(92, 71, 56, 0.5);
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

const ContentGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 3rem;
  padding: 0 1rem;
`;

const CategoryCard = styled.article`
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
  background: rgba(61, 47, 38, 0.9);
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
        <MainTitle>Premium Sustainable Hotel Amenities in India</MainTitle>
        <Description>
          Discover our eco-friendly hotel dry items collection featuring premium
          shaving kits, dental care products, and bath accessories. Our
          sustainable amenities are carefully selected for luxury hotels across
          India, combining guest comfort with environmental responsibility.
        </Description>
      </HeaderSection>

      <ContentGrid>
        {/* Shaving Kit */}
        <CategoryCard itemScope itemType="https://schema.org/ProductCollection">
          <CategoryHeader>
            <SectionTitle itemProp="name">Luxury Shaving Kit</SectionTitle>
          </CategoryHeader>

          <SubSectionTitle>Premium Razors</SubSectionTitle>
          <ProductList>
            <ProductItem itemScope itemType="https://schema.org/Product">
              <ProductImage
                onClick={() => openModal(bambooRazor)}
                itemProp="image"
              >
                <img
                  src={bambooRazor}
                  alt="Eco-friendly Bamboo Razor for hotel guests"
                />
              </ProductImage>
              <ProductInfo>
                <ProductName itemProp="name">Bamboo Razor</ProductName>
                <ProductDescription itemProp="description">
                  Eco-friendly bamboo handle with premium stainless steel blades
                  - perfect for sustainable hotels in Mumbai, Delhi, and
                  Bangalore
                </ProductDescription>
                <meta itemProp="category" content="Hotel Amenities" />
                <meta itemProp="material" content="Bamboo, Stainless Steel" />
              </ProductInfo>
            </ProductItem>

            <ProductItem
              itemScope
              itemProp="isRelatedTo"
              itemType="https://schema.org/Product"
            >
              <ProductImage
                onClick={() => openModal(wheatStrawRazor)}
                itemProp="image"
              >
                <img
                  src={wheatStrawRazor}
                  alt="Biodegradable wheat straw razor for eco hotels"
                />
              </ProductImage>
              <ProductInfo>
                <ProductName itemProp="name">Wheat Straw Razor</ProductName>
                <ProductDescription itemProp="description">
                  Biodegradable razor made from wheat straw plastic alternative
                  - ideal for green hotels in Goa and Kerala
                </ProductDescription>
                <meta itemProp="category" content="Hotel Amenities" />
                <meta
                  itemProp="material"
                  content="Wheat Straw, Stainless Steel"
                />
              </ProductInfo>
            </ProductItem>

            <ProductItem
              itemScope
              itemProp="isRelatedTo"
              itemType="https://schema.org/Product"
            >
              <ProductImage
                onClick={() => openModal(dorcoRazor)}
                itemProp="image"
              >
                <img
                  src={dorcoRazor}
                  alt="Professional hotel razor with lubricating strip"
                />
              </ProductImage>
              <ProductInfo>
                <ProductName itemProp="name">Dorco Razor</ProductName>
                <ProductDescription itemProp="description">
                  Professional quality razor with lubricating strip - preferred
                  by luxury hotels in Jaipur and Udaipur
                </ProductDescription>
                <meta itemProp="category" content="Hotel Amenities" />
              </ProductInfo>
            </ProductItem>
          </ProductList>

          <SubSectionTitle>Shaving Gel</SubSectionTitle>
          <ProductList>
            <ProductItem
              itemScope
              itemProp="isRelatedTo"
              itemType="https://schema.org/Product"
            >
              <ProductImage
                onClick={() => openModal(giletteGel)}
                itemProp="image"
              >
                <img
                  src={giletteGel}
                  alt="Aloe vera shaving gel for sensitive skin"
                />
              </ProductImage>
              <ProductInfo>
                <ProductName itemProp="name">Gilette Gel</ProductName>
                <ProductDescription itemProp="description">
                  Ultra-sensitive formula with aloe vera for smooth shaving -
                  stocked by 5-star hotels across India
                </ProductDescription>
                <meta itemProp="category" content="Hotel Amenities" />
              </ProductInfo>
            </ProductItem>

            <ProductItem
              itemScope
              itemProp="isRelatedTo"
              itemType="https://schema.org/Product"
            >
              <ProductImage onClick={() => openModal(eticGel)} itemProp="image">
                <img
                  src={eticGel}
                  alt="Vegan shaving gel for eco-conscious hotels"
                />
              </ProductImage>
              <ProductInfo>
                <ProductName itemProp="name">Etic Gel</ProductName>
                <ProductDescription itemProp="description">
                  Vegan and cruelty-free shaving gel with organic ingredients -
                  popular in boutique hotels in Himachal and Uttarakhand
                </ProductDescription>
                <meta itemProp="category" content="Hotel Amenities" />
              </ProductInfo>
            </ProductItem>
          </ProductList>
        </CategoryCard>

        {/* Dental Kit */}
        <CategoryCard itemScope itemType="https://schema.org/ProductCollection">
          <CategoryHeader>
            <SectionTitle itemProp="name">Eco Dental Care Kit</SectionTitle>
          </CategoryHeader>

          <SubSectionTitle>Sustainable Toothbrushes</SubSectionTitle>
          <ProductList>
            <ProductItem itemScope itemType="https://schema.org/Product">
              <ProductImage
                onClick={() => openModal(wheatBrush)}
                itemProp="image"
              >
                <img
                  src={wheatBrush}
                  alt="Eco-friendly wheat straw toothbrush"
                />
              </ProductImage>
              <ProductInfo>
                <ProductName itemProp="name">Wheat Straw Brush</ProductName>
                <ProductDescription itemProp="description">
                  Sustainable brush with bamboo handle and wheat straw bristles
                  - reducing plastic waste in Indian hotels since 2018
                </ProductDescription>
                <meta itemProp="category" content="Hotel Amenities" />
                <meta itemProp="material" content="Bamboo, Wheat Straw" />
              </ProductInfo>
            </ProductItem>

            <ProductItem
              itemScope
              itemProp="isRelatedTo"
              itemType="https://schema.org/Product"
            >
              <ProductImage
                onClick={() => openModal(whiteBrush)}
                itemProp="image"
              >
                <img
                  src={whiteBrush}
                  alt="Bamboo toothbrush with charcoal bristles"
                />
              </ProductImage>
              <ProductInfo>
                <ProductName itemProp="name">White Bamboo Brush</ProductName>
                <ProductDescription itemProp="description">
                  Natural bamboo with charcoal-infused bristles - featured in
                  wellness resorts across South India
                </ProductDescription>
                <meta itemProp="category" content="Hotel Amenities" />
                <meta itemProp="material" content="Bamboo, Charcoal" />
              </ProductInfo>
            </ProductItem>

            <ProductItem
              itemScope
              itemProp="isRelatedTo"
              itemType="https://schema.org/Product"
            >
              <ProductImage
                onClick={() => openModal(colgateBrush)}
                itemProp="image"
              >
                <img
                  src={colgateBrush}
                  alt="Recyclable hotel toothbrush with tongue cleaner"
                />
              </ProductImage>
              <ProductInfo>
                <ProductName itemProp="name">Colgate Brush</ProductName>
                <ProductDescription itemProp="description">
                  Soft bristles with tongue cleaner, in recyclable packaging -
                  trusted by business hotels in metropolitan cities
                </ProductDescription>
                <meta itemProp="category" content="Hotel Amenities" />
              </ProductInfo>
            </ProductItem>
          </ProductList>
        </CategoryCard>

        {/* Accessories */}
        <CategoryCard itemScope itemType="https://schema.org/ProductCollection">
          <CategoryHeader>
            <SectionTitle itemProp="name">Luxury Bath Accessories</SectionTitle>
          </CategoryHeader>

          <ProductList>
            <ProductItem itemScope itemType="https://schema.org/Product">
              <ProductImage
                onClick={() => openModal(bathCaps)}
                itemProp="image"
              >
                <img
                  src={bathCaps}
                  alt="Recycled material shower caps for hotels"
                />
              </ProductImage>
              <ProductInfo>
                <ProductName itemProp="name">Bath Caps</ProductName>
                <ProductDescription itemProp="description">
                  Reusable shower caps made from recycled materials - supplied
                  to spa resorts and heritage hotels
                </ProductDescription>
                <meta itemProp="category" content="Hotel Amenities" />
              </ProductInfo>
            </ProductItem>

            <ProductItem
              itemScope
              itemProp="isRelatedTo"
              itemType="https://schema.org/Product"
            >
              <ProductImage
                onClick={() => openModal(bathrobe)}
                itemProp="image"
              >
                <img
                  src={bathrobe}
                  alt="Organic cotton bathrobe for luxury hotels"
                />
              </ProductImage>
              <ProductInfo>
                <ProductName itemProp="name">Luxury Bathrobe</ProductName>
                <ProductDescription itemProp="description">
                  100% organic cotton with premium absorbency - standard in
                  premium hotels and resorts nationwide
                </ProductDescription>
                <meta itemProp="category" content="Hotel Amenities" />
                <meta itemProp="material" content="Organic Cotton" />
              </ProductInfo>
            </ProductItem>

            <ProductItem
              itemScope
              itemProp="isRelatedTo"
              itemType="https://schema.org/Product"
            >
              <ProductImage onClick={() => openModal(loofah)} itemProp="image">
                <img
                  src={loofah}
                  alt="Natural loofah sponge for eco-friendly hotels"
                />
              </ProductImage>
              <ProductInfo>
                <ProductName itemProp="name">Natural Loofah</ProductName>
                <ProductDescription itemProp="description">
                  Plant-based exfoliating sponge, completely biodegradable -
                  perfect for ayurvedic resorts and eco-lodges
                </ProductDescription>
                <meta itemProp="category" content="Hotel Amenities" />
              </ProductInfo>
            </ProductItem>

            <ProductItem
              itemScope
              itemProp="isRelatedTo"
              itemType="https://schema.org/Product"
            >
              <ProductImage
                onClick={() => openModal(slippers)}
                itemProp="image"
              >
                <img src={slippers} alt="Recycled material hotel slippers" />
              </ProductImage>
              <ProductInfo>
                <ProductName itemProp="name">Soft Slippers</ProductName>
                <ProductDescription itemProp="description">
                  Eco-friendly slippers made from recycled materials - provided
                  in hotel rooms across India for guest comfort
                </ProductDescription>
                <meta itemProp="category" content="Hotel Amenities" />
              </ProductInfo>
            </ProductItem>
          </ProductList>
        </CategoryCard>
      </ContentGrid>

      {selectedImage && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalImage
              src={selectedImage}
              alt="Enlarged view of hotel amenity product"
            />
          </ModalContent>
        </ModalOverlay>
      )}
    </DryItemsContainer>
  );
};

export default DryItems;
