import styled from "styled-components";

const ImageSlide = styled.section`
    height: 100vh;
    width: 100%;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export default function FullBleedImage({ src, alt = "" }) {
    return (
        <ImageSlide>
            <Image src={src} alt={alt} />
        </ImageSlide>
    );
}
