import styled from 'styled-components';

export const TeamContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
`;
export const Cards =styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5em;
  color: #fff;
  margin-bottom: 40px;
  position: relative;
  ::after {
    content: '';
    width: 60px;
    height: 4px;
    background-color: #1a237e;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
  }
`;
export const MemberInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(26, 35, 126, 0.85);
  color: white;
  padding: 20px;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease;
`;
export const MemberCard = styled.div`
  position: relative;
  width: 350px;
  height: 450px;
  background-color: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-radius 0.3s ease;
  margin-left: 25px;
  margin-top: 25px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
  }
  &:hover ${MemberInfo} {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const ContainerTeam = styled.div`
  width: 100%;
  height: 100%;
`

export const MemberImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;



export const MemberName = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: white;
`;

export const MemberDetails = styled.p`
  margin: 8px 0;
  font-size: 0.9em;
  color: white;
  strong {
    color: #ffeb3b;
  }
`;
